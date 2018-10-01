import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  cards: any[] = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.cards = await this.http.get<any[]>("/api/portfolio.json").toPromise();    
  }

}
