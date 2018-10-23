import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { PdfComponent } from './pdf/pdf.component';
import { AppRoutingModule } from './app.routes';
import { VideoComponent } from './video/video.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    VideoComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
