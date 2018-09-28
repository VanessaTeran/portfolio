import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-detalle-portfolio",
  templateUrl: "./detalle-portfolio.component.html",
  styleUrls: ["./detalle-portfolio.component.css"]
})
export class DetallePortfolioComponent {
 

  
  detalle = {
    id: "bs-as",
    titulo:"Portfolio Works!",
    subTitulo: "Detalle portfolio...",
    descripcion: "Bunos Aires, etc...",
    fotos: [{ url: "/assets/bs-as.jpg", titulo:"foto1"},
    { url: "/assets/bs-as.jpg", titulo:"foto2" },
    { url: "/assets/icbc1.png", titulo:"foto3" },
    { url: "/assets/bs-as.jpg", titulo:"foto4" }
    
  ]
  };


  fotoActual = this.detalle.fotos[0];

  mostrarFoto(element){
    this.fotoActual = element;
  }
  // detalleActual$ = this.router.root.paramMap.
}
