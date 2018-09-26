import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contenedor-imagenes",
  templateUrl: "./contenedor-imagenes.component.html",
  styleUrls: ["./contenedor-imagenes.component.css"]
})
export class ContenedorImagenesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  rutasImagenes = [
    {
      id: "buenos_aires",
      titulo: "Buenos Aires",
      url: "../../assets/bs-as.jpg"
    },
    {
      id: "icbc",
      titulo: "El mejor equipo de IT",
      url: "../../assets/icbc1.png"
    },

    
  ];
}
