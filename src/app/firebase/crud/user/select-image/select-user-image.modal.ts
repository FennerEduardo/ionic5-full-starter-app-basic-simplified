import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseCrudService } from '../../firebase-crud.service';

@Component({
  selector: 'app-select-user-image',
  templateUrl: './select-user-image.modal.html',
  styleUrls: [
    './styles/select-user-image.modal.scss',
    './styles/select-user-image.shell.scss'
  ]
})
export class SelectUserImageModal implements OnInit {
  avatars: [];

  constructor(
    private modalController: ModalController,
    public firebaseCrudService: FirebaseCrudService
  ) { }

  ngOnInit() {
    this.firebaseCrudService.getAvatarsData().subscribe(
      (data: any) => {
        this.avatars = data;
      },
      (error) => {}
    );
  }

  dismissModal(avatar) {
    this.modalController.dismiss(avatar);
  }
}
