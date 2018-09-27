import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 cards = [
    {
      id: "buenos_aires",
      titulo: "Buenos Aires",
      url: "../../assets/bs-as.jpg",
      fecha:  "26 de julio 2018",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`, 
    },
    {
      id: "icbc",
      titulo: "El mejor equipo de IT",
      url: "../../assets/icbc1.png",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error harum accusamus officiis, soluta ipsum inventore blanditiis 
      fuga aspernatur.`, 
      fecha:  "21 de agosto 2018"

    },
    {
      id: "buenos_aires",
      titulo: "Usuario",
      url: "../../assets/user.png",
      fecha:  "26 de julio 2018",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`, 
    },
    {
      id: "icbc",
      titulo: "El mejor equipo de IT",
      url: "../../assets/icbc1.png",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error harum accusamus officiis, soluta ipsum inventore blanditiis 
      fuga aspernatur.`, 
      fecha:  "21 de agosto 2018"

    },    {
      id: "buenos_aires",
      titulo: "Buenos Aires",
      url: "../../assets/bs-as.jpg",
      fecha:  "26 de julio 2018",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`, 
    },
    {
      id: "icbc",
      titulo: "El mejor equipo de IT",
      url: "../../assets/icbc1.png",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error har.`, 
      fecha:  "21 de agosto 2018"

    },    
    {
      id: "buenos_aires",
      titulo: "Buenos Aires",
      url: "../../assets/bs-as.jpg",
      fecha:  "26 de julio 2018",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`, 
    },
    {
      id: "icbc",
      titulo: "El mejor equipo de IT",
      url: "../../assets/icbc1.png",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error harum accusamus officiis, soluta ipsum inventore blanditiis 
      fuga asp.`, 
      fecha:  "21 de agosto 2018"

    },   
  ];



}
