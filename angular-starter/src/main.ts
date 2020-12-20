import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { AppModule } from './02-app-binding/app.module';
// import { AppModule } from './03-app-binding/app.module';
// import { AppModule } from './04-Routing/app.module';
import { AppModule } from './Two-Way-Binding/app.module';
//mport { AppModule } from './06-ViewChild/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
