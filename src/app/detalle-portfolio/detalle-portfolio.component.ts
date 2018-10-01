import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle-portfolio",
  templateUrl: "./detalle-portfolio.component.html",
  styleUrls: ["./detalle-portfolio.component.css"]
})
export class DetallePortfolioComponent {
  detalle: any = null;
  fotoActual = null;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const data = this.activatedRoute.snapshot.params;
    this.detalle = await this.http
      .get<any>(`/api/detalle/${data.id}.json`)
      .toPromise();
    this.fotoActual = this.detalle.fotos[0];
  }

  mostrarFoto(element) {
    this.fotoActual = element;
  }
  // detalleActual$ = this.router.root.paramMap.
}
