import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransferStateHelper {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private state: TransferState,
  ) { }

  // Method with generic param
  checkDataSourceState<T>(stateKey: string, dataSource: Observable<T>): Observable<T> {
    const dataKey = makeStateKey<T>(stateKey);

    if (isPlatformServer(this.platformId)) {
      // When loading resource in the server, store the result in the TransferState
      // to use when transitioning to the browser from the SSR rendered app
      return dataSource.pipe(
        tap(
          (data: T) => {
            this.state.set(dataKey, data);
          }
        )
      );
    } else {
      // Check if we have data in the TransferState
      if (this.state.hasKey(dataKey)) {
        const stateData = this.state.get(dataKey, null);

        if (stateData && stateData !== null) {
          const cachedDataSource = of(stateData);

          // After using it, remove data from state
          this.state.remove(dataKey);

          // Set a flag to track if the dataSource is being cached in the server state or not
          Object.assign(cachedDataSource, {ssr_state: true});

          return cachedDataSource;
        } else {
          return dataSource;
        }
      } else {
        return dataSource;
      }
    }
  }
}
