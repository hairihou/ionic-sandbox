import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-virtual-content',
  templateUrl: './virtual-content.page.html',
  styleUrls: ['./virtual-content.page.scss'],
})
export class VirtualContentPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  onDismiss(): void {
    this.modalController.dismiss().then();
  }
}
