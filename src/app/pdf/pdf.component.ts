import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './pdf.html'
})
export class PdfComponent {
  title = 'app';
  pdfSrc: string = '../../assets/http.pdf';
}
