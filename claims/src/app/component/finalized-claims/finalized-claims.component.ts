import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-finalized-claims',
  imports: [],
  templateUrl: './finalized-claims.component.html',
  styleUrl: './finalized-claims.component.css'
})
export class FinalizedClaimsComponent {
  url: string ='https://angular.io'
  styleUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
