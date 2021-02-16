import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
// import { LoginComponent } from './vistas/login/login.component';
// import { DashboardComponent } from './vistas/dashboard/dashboard.component';
// import { NuevoComponent } from './vistas/nuevo/nuevo.component';
// import { EditarComponent } from './vistas/editar/editar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireAuthModule } from '@angular/fires/auth';
// import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    // LoginComponent,
    // DashboardComponent,
    // NuevoComponent,
    // EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    // AngularFireAuthModule,
    // AngularFirestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }