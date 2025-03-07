import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
     provideClientHydration(withEventReplay()),
     {
      provide: 'AuthService',
      useFactory: () => 
        loadRemoteModule({
          remoteEntry: 'http://localhost:8080/remoteEntry.js',
          remoteName: 'host-app',
          exposedModule: './AuthService'
        }).then(m => new m.AuthService()),
    },]
};
