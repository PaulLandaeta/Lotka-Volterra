import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PdfComponent } from './pdf/pdf.component';
import { VideoComponent } from './video/video.component';


const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: PdfComponent },
    { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }