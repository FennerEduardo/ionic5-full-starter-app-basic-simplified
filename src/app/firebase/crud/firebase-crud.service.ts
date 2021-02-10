import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable, of, forkJoin, throwError, combineLatest } from 'rxjs';
import { map, concatMap, first, take } from 'rxjs/operators';
import * as dayjs from 'dayjs';
import { FirebaseListingItemModel } from './listing/firebase-listing.model';

@Injectable()
export class FirebaseCrudService {

  constructor(private afs: AngularFirestore) {}

  /*
    Firebase User Listing Page
  */
  public getListingData(): Observable<any> {
    return this.afs.collection('users').valueChanges({ idField: 'id' })
     .pipe(
       map(actions => actions.map((user: any) => {
          const age = this.calcUserAge(user.birthdate);
          return { age, ...user };
        })
      )
    );
  }

  // Filter users by age
  public searchUsersByAge(lower: number, upper: number): Observable<any> {
    // we save the dateOfBirth in our DB so we need to calc the min and max dates valid for this query
    const minDate = (dayjs(Date.now()).subtract(upper, 'year')).unix();
    const maxDate =  (dayjs(Date.now()).subtract(lower, 'year')).unix();

    const listingCollection = this.afs.collection('users', ref =>
      ref.orderBy('birthdate').startAt(minDate).endAt(maxDate));

    return listingCollection.valueChanges({ idField: 'id' }).pipe(
      map(actions => actions.map((user: any) => {
         const age = this.calcUserAge(user.birthdate);
         return { age, ...user };
       })
     ));
  }

  public getUserDetailsData(userId: string) {
    return this.getUser(userId)
    .pipe(
      concatMap(user => {
        if (user && user.skills) {

          // Map each skill id and get the skill data as an Observable
          const userSkillsObservables: Array<Observable<any>> = user.skills.map(skill => {
            return this.getSkill(skill).pipe(first());
          });

          // Get all users with at least 1 skill in common
          const relatedUsers: Observable<Array<any>> = this.getUsersWithSameSkill(user.id, user.skills);

          return combineLatest([
            of(user),
            forkJoin(userSkillsObservables),
            relatedUsers
          ]).pipe(
            map(([userDetails, userSkills, relatedUsersResult]) => {
              const userResult = {...userDetails, skills: userSkills};
              return { user: userResult, relatedUsers: relatedUsersResult };
            })
          );

        } else {
          // Throw error
          return throwError('User does not have any skills.');
        }
      }),
      take(1)
    );
  }

  /*
    Firebase Create User Modal
  */
  public createUser(userData: any): Promise<DocumentReference>  {
    return this.afs.collection('users').add({...userData});
  }

  /*
    Firebase Update User Modal
  */
  public updateUser(userData: any): Promise<void> {
    return this.afs.collection('users').doc(userData.id).set(userData);
  }

  public deleteUser(userKey: string): Promise<void> {
    return this.afs.collection('users').doc(userKey).delete();
  }

  /*
    Firebase Select User Image Modal
  */
  public getAvatarsData(): Observable<Array<any>> {
    return this.afs.collection('avatars').valueChanges();
  }

  /*
    FireStore utility methods
  */
  // Get list of all available Skills (used in the create and update modals)
  public getSkills(): Observable<Array<any>> {
    return this.afs.collection('skills').valueChanges({ idField: 'id' });
  }

  // Get data of a specific Skill
  private getSkill(skillId: string): Observable<any> {
    return this.afs.doc('skills/' + skillId)
    .snapshotChanges()
    .pipe(
      map((a: any) => {
        const data = a.payload.data();
        const id = a.payload.id;
        return { id, ...data };
      })
    );
  }


  // Get data of a specific User
  private getUser(userId: string): Observable<any> {
    return this.afs.doc('users/' + userId)
    .snapshotChanges()
    .pipe(
      map((a: any) => {
        const userData = a.payload.data();
        const id = a.payload.id;
        const age = userData ? this.calcUserAge(userData.birthdate) : 0;
        return { id, age, ...userData };
      })
    );
  }

  // Get all users who share at least 1 skill of the user's 'skills' list
  private getUsersWithSameSkill(userId: string, skills: [any]): Observable<Array<FirebaseListingItemModel>> {
    // Get the users who have at least 1 skill in common
    // Because firestore doesn't have a logical 'OR' operator we need to create multiple queries, one for each skill from the 'skills' list
    const queries = skills.map(skill => {
      return this.afs.collection('users', ref => ref
      .where('skills', 'array-contains', skill)
      .where('id', '!=', userId))
      .valueChanges({ idField: 'id' });
    });

    // Combine all these queries
    return combineLatest(queries)
    .pipe(
      map((relatedUsers: FirebaseListingItemModel[][]) => {
        // Flatten the array of arrays of FirebaseListingItemModel
        const flattenedRelatedUsers = ([] as FirebaseListingItemModel[]).concat(...relatedUsers);

        // Removes duplicates from the array of FirebaseListingItemModel objects.
        const filteredRelatedUsers = flattenedRelatedUsers
        .reduce((accumulatedUsers, user) => {
          if ((accumulatedUsers.findIndex(accumulatedUser => accumulatedUser.id === user.id) < 0)) {
            return [...accumulatedUsers, user];
          } else {
            // If the user doesn't pass the test, then don't add it to the filtered users array
            return accumulatedUsers;
          }
        }, ([] as FirebaseListingItemModel[]));
        return filteredRelatedUsers;
      })
    );
  }

  private calcUserAge(dateOfBirth: number): number {
    return dayjs(Date.now()).diff(dayjs.unix(dateOfBirth), 'year');
  }
}
