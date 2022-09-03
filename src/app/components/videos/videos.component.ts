import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public url: string;
  public video: string;
  public namee: string;

  constructor(
      private _sanitizer: DomSanitizer,
      private _router: Router,
      private _route: ActivatedRoute
    ) { 

      this.url = '';
      this.video = '';
      this.namee = '';

    }

  ngOnInit(): void {
      this._route.params.subscribe(params => {
      this.namee = params['name'];
      this.url = params['url'];
    });
  }

  getVideoIframe(url:any) {
    var results;
 
    if (this.url === null) {
        return '';
    }
    results = this.url.match('[\\?&]v=([^&#]*)');
    this.video   = (results === null) ? this.url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video);   
    }

}
