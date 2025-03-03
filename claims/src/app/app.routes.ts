import { Routes } from '@angular/router';
import { ProductionReportComponent } from './production-report/production-report.component';
import { PendingClaimsAdjustedComponent } from './pending-claims-adjusted/pending-claims-adjusted.component';
import { PendingClaimsNewComponent } from './pending-claims-new/pending-claims-new.component';
import { FinalizedClaimsComponent } from './finalized-claims/finalized-claims.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'productionReport', component: ProductionReportComponent },
    { path: 'pendingClaimsNew', component: PendingClaimsNewComponent },
    { path: 'pendingClaimsAdjusted', component: PendingClaimsAdjustedComponent },
    { path: 'finalizedClaims', component: FinalizedClaimsComponent },
    { path: '', redirectTo:'productionReport',
        pathMatch:'full'
    }
];
