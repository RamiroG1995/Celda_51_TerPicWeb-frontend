import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ProjectService]
})
export class PrincipalComponent implements OnInit {

  public projects: Project[] = [];
  public projects2: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService

  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects2();
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
        response => {
          if(response){
              this.projects = response;
          }
        },
        error => {
            console.log(<any>error);
        }
      );
  }

    getProjects2(){
    this._projectService.getProjects2().subscribe(
        response => {
          if(response){
              this.projects2 = response;
          }
        },
        error => {
            console.log(<any>error);
        }
      );
  }

}
