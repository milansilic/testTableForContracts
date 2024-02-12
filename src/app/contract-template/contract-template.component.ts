import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-contract-template',
  templateUrl: './contract-template.component.html',
  styleUrls: ['./contract-template.component.scss']
})
export class ContractTemplateComponent implements OnInit {
   partyA: string = '';
   partyB: string = '';
   date: string = '';
   terms: string = '';
 
   constructor(private sanitizer: DomSanitizer) { }
 
   ngOnInit(): void {
   }
 
   // generatePDF(): void {
   //   const doc = new jsPDF();
 
   //   // Render HTML template with dynamic data
   //   const html = `
   //     <h1>Contract Agreement</h1>
   //     <p>Party A: ${this.partyA}</p>
   //     <p>Party B: ${this.partyB}</p>
   //     <p>Date: ${this.date}</p>
   //     <p>Terms and conditions:</p>
   //     <ul>
   //       <li>${this.terms}</li>
   //     </ul>
   //   `;
     
   //   // Convert HTML to PDF
   //   doc.html(this.sanitizer.bypassSecurityTrustHtml(html), {
   //     callback: (pdf) => {
   //       pdf.save('contract.pdf');
   //     }
   //   });
   // }
   convertHtmlToPdf() {
      // Get the HTML element to convert (replace with your selector)
      const element: any = document.getElementById('contentToConvert');
    
      // Use html2canvas to capture the element's contents
      html2canvas(element, {
        logging: false, // Optional: Disable logging for cleaner output
        useCORS: true // Optional: If fetching external resources
      }).then(canvas => {
        // Create a new jsPDF instance
        const doc = new jsPDF();
    
        // Add image to the PDF
        doc.addImage(canvas, 'PNG', 10, 10, doc.internal.pageSize.width, doc.internal.pageSize.height);
    
        // Optional styling (can be customized before adding image)
        doc.setFontSize(12);
        doc.setTextColor(255, 0, 0);
        doc.text('Converted by Angular!', 10, 10);
    
        // Save the PDF
        doc.save('my-pdf.pdf');
      });
    }
 }
