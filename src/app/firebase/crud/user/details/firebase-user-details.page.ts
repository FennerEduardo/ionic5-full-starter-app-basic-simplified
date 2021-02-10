import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { FirebaseUpdateUserModal } from '../update/firebase-update-user.modal';
import { FirebaseCrudService } from '../../firebase-crud.service';

@Component({
  selector: 'app-firebase-user-details',
  templateUrl: './firebase-user-details.page.html',
  styleUrls: [
    './styles/firebase-user-details.page.scss',
    './styles/firebase-user-details.shell.scss'
  ],
})
export class FirebaseUserDetailsPage implements OnInit {
  user: any;
  relatedUsers: any[];

  constructor(
    public firebaseCrudService: FirebaseCrudService,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      this.user = routeData['data'].user;
      this.relatedUsers = routeData['data'].relatedUsers;
    });
  }

  async openFirebaseUpdateModal() {
    const modal = await this.modalController.create({
      component: FirebaseUpdateUserModal,
      componentProps: {
        'user': this.user
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onWillDismiss().then(x => {
      this.firebaseCrudService.getUserDetailsData(this.user.id).subscribe(data => {
        this.user = data.user;
        this.relatedUsers = data.relatedUsers;
      });
    });

    await modal.present();
  }
}
