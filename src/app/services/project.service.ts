import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'list-d1/usuarios', {headers: headers});
	}

	getProjects2(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'list-d1/usuarios2', {headers: headers});
	}

	

	getSubPage(name:any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'list-d1/'+name, {headers: headers});
	}


	sendEmail(body:any): Observable<any>{
		return this._http.post(this.url+'form', body);
	}

	


}