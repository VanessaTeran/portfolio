import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
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
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.changeImage();
  }

  async ngOnInit() {
    this.imagenes = await this.http.get<any>(`/api/carousel.json`).toPromise();
  }

  activeImage: RutaImagen;

  @Input()
  imagenes: RutaImagen[];
  activeImageIndex: number = 0;

  changeImage() {
    /*esto funciona con el .json como servidor para las imagenes del carousel (linea 24)*/

    this.activeImageIndex++;
    if (this.imagenes && this.imagenes.length) {
      if (this.activeImageIndex === this.imagenes.length)
        this.activeImageIndex = 0;

      this.activeImage = this.imagenes[this.activeImageIndex];
    }
    setTimeout(() => this.changeImage(), 2000);
  }
}
