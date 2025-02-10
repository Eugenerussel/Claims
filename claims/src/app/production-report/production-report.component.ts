import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-production-report',
  imports: [],
  templateUrl: './production-report.component.html',
  styleUrl: './production-report.component.css'
})
export class ProductionReportComponent {
  url: string ='www.angular.io'
  styleUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
