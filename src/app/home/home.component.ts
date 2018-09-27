import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  articles = [
    {
      id: "buenos_aires",
      url: "../../assets/bs-as.jpg",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`
    },
    {
      id: "icbc",
      url: "../../assets/icbc1.png",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`
    },
    {
      id: "basas",
      url: "../../assets/bs-as.jpg",
      descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sit error haru`
    },
    ];
    
}
