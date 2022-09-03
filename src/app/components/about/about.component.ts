import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public url: string;
  public video: string;

  constructor(
      private _sanitizer: DomSanitizer
    ) { 
      this.url = 'https://www.youtube.com/watch?v=7e67r3ds7mI&t=2s';
      this.video = '';
  }

  ngOnInit(): void {
  }




    getIframe(url:any) {
    var results;
 
    if (this.url === null) {
        return '';
    }
    results = this.url.match('[\\?&]v=([^&#]*)');
    this.video   = (results === null) ? this.url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video);   
    }

}
