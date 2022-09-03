import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CuentosVideoComponent } from './components/cuentos-video/cuentos-video.component';
import { Subpage2Component } from './components/subpage2/subpage2.component';
import { VideosComponent } from './components/videos/videos.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';


const appRoutes: Routes = [

	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'principal', component: PrincipalComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'cuentos-video/:name', component: CuentosVideoComponent},
	{path: 'subpage2/:name', component: Subpage2Component},
	{path: 'videos/:name/:url', component: VideosComponent},
	{path: 'sonidos/:name', component: DetailpageComponent},
	{path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);