import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: any[] = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.articles = await this.http.get<any[]>("/api/articles.json").toPromise();    
  }

    
}
