import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CataloguePage } from './pages/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RatingComponent } from './components/rating/rating.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LoginPage } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CataloguePage,
    HeaderComponent,
    FooterComponent,
    RatingComponent,
    FiltersComponent,
    LoginPage,
    ProductBoxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
