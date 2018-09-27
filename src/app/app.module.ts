import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContenedorImagenesComponent } from './contenedor-imagenes/contenedor-imagenes.component';
import { DetallePortfolioComponent } from './detalle-portfolio/detalle-portfolio.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: DetallePortfolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**',   redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ArticleComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContactoComponent,
    ContenedorImagenesComponent,
    DetallePortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
