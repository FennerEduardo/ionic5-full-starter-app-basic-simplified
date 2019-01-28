import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FashionDetailsModel } from './fashion-details.model';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fashion-details',
  templateUrl: './fashion-details.page.html',
  styleUrls: [
    './fashion-details.page.scss',
    './fashion-details.page.ios.scss',
    './fashion-details.page.md.scss'
  ]
})
export class FashionDetailsPage implements OnInit {
  details: FashionDetailsModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }
  colorVariants = [];
  sizeVariants = [];

  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - FashionDetailsPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: FashionDetailsModel) => {
            if (observableData) {
              this.details = observableData;

              this.colorVariants = this.details.colorVariants
              .map(item =>
                ({
                  name: item.name,
                  type: 'radio',
                  label: item.name,
                  value: item.value,
                  checked: item.default
                })
              );
              this.sizeVariants = this.details.sizeVariants
              .map(item =>
                ({
                  name: item.name,
                  type: 'radio',
                  label: item.name,
                  value: item.value,
                  checked: item.default
                })
              );
            }

            console.log('observableData - FashionDetailsPage - ngOnInit()', observableData);
          });
        } else {
          alert('No route data 2');
        }
      });
    } else {
      alert('No route data');
    }
  }

  async openColorChooser() {
    const alert = await this.alertController.create({
      header: 'Color',
      inputs: this.colorVariants,
      cssClass: 'variant-alert color-chooser',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async openSizeChooser() {
    const alert = await this.alertController.create({
      header: 'Size',
      inputs: this.sizeVariants,
      cssClass: 'variant-alert size-chooser',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (selectedValue) => {
            console.log('Selected Value', selectedValue);
          }
        }
      ]
    });

    await alert.present();
  }
}
