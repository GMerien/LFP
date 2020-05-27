import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StatusComponent } from './status/status.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ManualComponent } from './manual/manual.component';
import { ShutterService } from './shutter.service';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CountdownComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ShutterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
