import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CuentosVideoComponent } from './components/cuentos-video/cuentos-video.component';
import { VideosComponent } from './components/videos/videos.component';
import { Subpage2Component } from './components/subpage2/subpage2.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { ProjectService } from './services/project.service';


import * as $ from 'jquery';
import * as swal from 'sweetalert';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PrincipalComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    CuentosVideoComponent,
    VideosComponent,
    Subpage2Component,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
