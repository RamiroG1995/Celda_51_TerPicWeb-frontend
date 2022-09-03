import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cuentos-video',
  templateUrl: './cuentos-video.component.html',
  styleUrls: ['./cuentos-video.component.css'],
  providers: [ProjectService]
})
export class CuentosVideoComponent implements OnInit {

  public url: string;
  public cuentos: Project[] = [];
  public namee: string;

  constructor(
      private _projectService: ProjectService,
      private _router: Router,
      private _route: ActivatedRoute
    ) { 
      this.url = Global.url;
      this.namee = '';
  }

  ngOnInit(): void {
      this._route.params.subscribe(params => {
      this.namee = params['name'];

      this.getSubPage(this.namee);
    });
  }

  getSubPage(namee:any){
    this._projectService.getSubPage(this.namee).subscribe( 
      response => {
        this.cuentos = response;
      },
      error => {
        console.log(<any>error);
      }
    )

  }


}
