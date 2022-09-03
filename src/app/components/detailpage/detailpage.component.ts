import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
  providers: [ProjectService]
})
export class DetailpageComponent implements OnInit {

  public url: string;
  public detail: Project[] = [];
  public namee: string;

  constructor(
      private _sanitizer: DomSanitizer,
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
        this.detail = response;
      },
      error => {
        console.log(<any>error);
      }
    )

  }

    reproducir(name:any) {
        const audio = new Audio('https://firebasestorage.googleapis.com/v0/b/celda-51.appspot.com/o/Detail%2F'+this.namee+'%2F'+name+'?alt=media&token=9cd7b449-8632-4d81-9840-33dc0b331db7');
        audio.play();
      }

    getGameIframe(code:any) {
    
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://games.construct.net/'+code+'/latest');   
    }
}
