import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import Swiper, { SwiperOptions, Zoom } from 'swiper';

@Component({
  selector: 'app-slide-image',
  templateUrl: './slide-image.page.html',
  styleUrls: ['./slide-image.page.scss'],
})
export class SlideImagePage implements OnInit {
  readonly swiperOptions: SwiperOptions = {
    passiveListeners: false,
    slidesPerView: 1.5,
    zoom: {
      maxRatio: 2,
      minRatio: 1,
    },
  };

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    Swiper.use([Zoom]);
  }

  onDismiss(): void {
    this.modalController.dismiss().then();
  }
}
