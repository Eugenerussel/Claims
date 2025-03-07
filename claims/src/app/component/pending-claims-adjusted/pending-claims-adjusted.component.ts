import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-pending-claims-adjusted',
  imports: [CommonModule],
  templateUrl: './pending-claims-adjusted.component.html',
  styleUrl: './pending-claims-adjusted.component.css'
})
export class PendingClaimsAdjustedComponent implements OnInit{
  activeTab: string = '1'; 
  dashboardUrl: SafeResourceUrl | null = null; 
  qlikUrl: string = '';

  constructor(
    private sanitizer:DomSanitizer,
    private route: ActivatedRoute,
    private httpService:HttpService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activeTab = params['tab'] || '1'; 
      this.updateDashboardUrl();
    });
  }

  setActiveTab(tab: string) {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
      this.updateDashboardUrl();
    }
  }

  updateDashboardUrl() {
    this.httpService. getQlikSenseUrl().subscribe((response: any) => {
      this.qlikUrl = response.url;
    });
    const urls: { [key: string]: string } = {
  '1': this.qlikUrl,
  '2': this.qlikUrl
    };
    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls[this.activeTab] || urls['1']);
  }
}
