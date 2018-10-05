import { Component, OnInit, Input } from "@angular/core";
import { callbackify } from "util";

export interface RutaImagen {
  ruta: string;
  title: string;
}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  constructor() {
    this.activeImage = this.imagenes[0];
    this.changeImage();
  }

  ngOnInit() {}

  activeImage: RutaImagen;

  @Input()
  imagenes: RutaImagen[];
  activeImageIndex: number = 0;

  changeImage() {
    this.activeImageIndex++;

    if (this.activeImageIndex === this.imagenes.length)
      this.activeImageIndex = 0;

    this.activeImage = this.imagenes[this.activeImageIndex];

    setTimeout(() => this.changeImage(), 2000);
  }
}
