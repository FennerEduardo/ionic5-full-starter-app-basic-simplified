import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { RealStateService } from '../real-state.service';
import { RealStateListingModel } from './real-state-listing.model';

@Injectable()
export class RealStateListingResolver implements Resolve<any> {

  constructor(private realStateService: RealStateService) {}

  resolve() {
    const dataSource: Observable<RealStateListingModel> = this.realStateService.getListingDataSource();
    const dataStore: DataStore<RealStateListingModel> = this.realStateService.getListingStore(dataSource);

    return dataStore;
  }
}
