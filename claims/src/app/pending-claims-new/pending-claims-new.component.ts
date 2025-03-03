import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pending-claims-new',
  imports: [CommonModule],
  templateUrl: './pending-claims-new.component.html',
  styleUrls: ['./pending-claims-new.component.css']
})
export class PendingClaimsNewComponent implements OnInit {
  activeTab: string = '1'; 
  dashboardUrl: SafeResourceUrl | null = null; 

  constructor(
    private sanitizer:DomSanitizer,
    private route: ActivatedRoute
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
    const urls: { [key: string]: string } = {
      
'1': 'https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=4fddf656-2dcd-44e9-9cde-4f4c92a29f16&theme=horizon&opt=ctxmenu,currsel',
'2': 'https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=f0c7df8b-6e81-4d98-95bc-836456d73f47&theme=horizon&opt=ctxmenu,currsel&select=$::%3DYear(clm_processed_date),2024'
    };
    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls[this.activeTab] || urls['1']);
  }
}
