import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { RealStateService } from '../real-state.service';
import { RealStateDetailsModel } from './real-state-details.model';

@Injectable()
export class RealStateDetailsResolver implements Resolve<any> {

  constructor(private realStateService: RealStateService) {}

  resolve() {
    const dataSource: Observable<RealStateDetailsModel> = this.realStateService.getDetailsDataSource();
    const dataStore: DataStore<RealStateDetailsModel> = this.realStateService.getDetailsStore(dataSource);

    return dataStore;
  }
}
