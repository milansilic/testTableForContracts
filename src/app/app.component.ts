import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TextOptionsLight, jsPDF } from 'jspdf';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { NgForm } from "@angular/forms";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

// (pdfMake as any).vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : (pdfMake as any).vfs

// (pdfMake as any).fonts = {
//    brlja: {
//       normal: 'Courier',
//       bold: 'Courier',
//       italics: 'Courier',
//       bolditalics: 'Courier'
//    }
// }

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   contractNo: number = 359549;
   fName: string = 'Milan';
   lName: string = 'Silic';
   address: string = 'Baštenska 41';
   PTT: string = '21201';
   city: string = 'Rumenka';
   mPhone: string = '060741869';
   mail: string = 'ranciclazar991@gmail.com';
   plates: string = 'NS540OP';
   vehType: string = 'Putničko';
   vehCol: string = 'Bela';
   vehicle: string = 'Opel Insignia';
   vehManYear: number = 2011;
   dateStart: string = '16.06.2023';
   dateEnd: string = '16.06.2024';

   @ViewChild('myForm') myForm: NgForm | undefined;

   constructor() {
      // (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;

      // (pdfMake as any).fonts = {
      //    brlja: {
      //       normal: 'Courier',
      //       bold: 'Courier',
      //       italics: 'Courier',
      //       bolditalics: 'Courier'
      //    }
      // }
   }

   getBase64ImageFromURL(url: string) {
      return new Promise((resolve, reject) => {
         var img = new Image();
         img.setAttribute("crossOrigin", "anonymous");

         img.onload = () => {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx!.drawImage(img, 0, 0);

            var dataURL = canvas.toDataURL("image/png");

            resolve(dataURL);
         };

         img.onerror = error => reject(error);

         img.src = url;
      });
   }

   async pdfmake(form: NgForm, task: string) {
      this.contractNo = form.value.contractNo;
      this.fName = form.value.fName;
      this.lName = form.value.lName;      
      this.address = form.value.address;
      this.PTT = form.value.PTT;
      this.city = form.value.city;
      this.mPhone = form.value.mPhone;
      this.mail = form.value.mail;
      this.plates = form.value.plates;
      this.vehType = form.value.vehType;
      this.vehCol = form.value.vehCol;
      this.vehicle = form.value.vehicle;
      this.vehManYear = form.value.vehManYear;
      this.dateStart = form.value.dateStart;
      this.dateEnd = form.value.dateEnd;

      // (pdfMake as any).fonts = {
      //    Courier: {
      //       normal: 'Courier',
      //       bold: 'Courier-Bold',
      //       italics: 'Courier-Oblique',
      //       bolditalics: 'Courier-BoldOblique'
      //    },
      //    Helvetica: {
      //       normal: 'Helvetica',
      //       bold: 'Helvetica-Bold',
      //       italics: 'Helvetica-Oblique',
      //       bolditalics: 'Helvetica-BoldOblique'
      //    },
      //    Times: {
      //       normal: 'Times-Roman',
      //       bold: 'Times-Bold',
      //       italics: 'Times-Italic',
      //       bolditalics: 'Times-BoldItalic'
      //    },
      //    Symbol: {
      //       normal: 'Symbol'
      //    },
      //    ZapfDingbats: {
      //       normal: 'ZapfDingbats'
      //    }
      // };

      var docDefinition: TDocumentDefinitions | any = {
         // font: 'Courier',
         pageSize: 'A4',
         pageOrientation: 'portrait',
         pageMargins: [30, 30, 30, 30],
         header: {
            columns: [
               { text: '' }
            ]
         },
         content: [
            {
               columns: [
                  {
                     image: await this.getBase64ImageFromURL("../../assets/images/logo.png"),
                     width: 230,
                     alignment: 'left',
                     margin: [0, 10, 0, 10]
                  },
                  {
                     width: '*',
                     text: ''
                  },
                  {
                     width: 'auto',
                     layout: 'noBorders',
                     style: 'companyInfo',
                     table: {
                        headerRows: 0,
                        body: [
                           [{ text: 'ATLAS SERVIS DOO', bold: true, fontSize: 18, margin: [0, -3, 0, -3] }],
                           [{ text: 'Černiševskog 5, 21000 Novi Sad', margin: [0, -1, 0, -1] }],
                           [{ text: 'PIB 105570707, MB 20408553', margin: [0, -1, 0, -1] }],
                           [{ text: 'SOS CALL CENTAR 069/667667', bold: true, margin: [0, -2, 0, -2] }],
                           [{ text: 'e-mail: office@atlas-servis.com', margin: [0, -1, 0, -1] }],
                           [{ text: 'Web: www.atlas-servis.com', margin: [0, -1, 0, -1] }]
                        ]
                     }
                  }
               ],
            },
            {
               columns: [
                  {
                     image: await this.getBase64ImageFromURL("../../assets/images/package.png"),
                     width: 120,
                     alignment: 'left',
                     margin: [0, 0, 0, 0]
                  },
                  {
                     text: 'UGOVOR O POMOĆI NA PUTU ZA NACIONALNI PAKET',
                     fontSize: 13,
                     bold: true,
                     alignment: 'center',
                     margin: [-98, 38, 0, 0]
                  }
               ],
            },
            {
               text: `BROJ UGOVORA: ${this.contractNo}`,
               fontSize: 14,
               bold: true,
               alignment: 'right',
               margin: [0, -12, 0, 20]
            },
            {
               width: 'auto',
               layout: 'noBorders',
               alignment: 'left',
               table: {
                  headerRows: 0,
                  body: [
                     [{ text: 'Sačinjen dana 17.06.2023. između:', margin: [0, -1, 0, -1] }],
                     [{ text: 'Atlas Servis doo (Prodavac), koga zastupa direktor Zoran Pilić', margin: [0, -1, 0, -1] }],
                     [{ text: `Ime i prezime (Korisnik): ${this.fName} ${this.lName}`, margin: [0, -1, 0, -1] }],
                     [{ text: `Adresa: ${this.address}, ${this.PTT} ${this.city}`, margin: [0, -1, 0, -1] }],
                     [{ text: `Telefon: ${this.mPhone}`, margin: [0, -1, 0, -1] }],
                     [{ text: `Mail: ${this.mail}`, margin: [0, -1, 0, -1] }]
                  ]
               }
            },
            {
               margin: [0, 32, 0, 34],
               columns: [
                  {
                     width: '*',
                     layout: 'noBorders',
                     alignment: 'left',
                     table: {
                        headerRows: 0,
                        body: [
                           [{ text: `Za vozilo registarske oznake: ${this.plates}`, margin: [0, -1, 0, -1] }],
                           [{ text: `Vrsta vozila: ${this.vehType}`, margin: [0, -1, 0, -1] }],
                           [{ text: `Boja vozila: ${this.vehCol}`, margin: [0, -1, 0, -1] }]
                        ]
                     }
                  },
                  {
                     width: '*',
                     layout: 'noBorders',
                     alignment: 'left',
                     table: {
                        headerRows: 0,
                        body: [
                           [{ text: ' ', margin: [0, -1, 0, -1] }],
                           [{ text: `Marka i tip: ${this.vehicle}`, margin: [0, -1, 0, -1] }],
                           [{ text: `Godina proizvodnje: ${this.vehManYear}.`, margin: [0, -1, 0, -1] }]
                        ]
                     }
                  }
               ],
            },
            {
               text: 'Član 1.',
               alignment: 'center',
               margin: [0, 0, 0, 15]
            },
            {
               text: `Početak važenja ugovora o pomoći na putu: ${this.dateStart}`,
               alignment: 'left',
               margin: [0, 1, 0, 1]
            },
            {
               text: `Istek važenja ugovora o pomoći na putu: ${this.dateEnd}`,
               alignment: 'left',
               margin: [0, 1, 0, 1]
            },
            {
               text: 'Član 2.',
               alignment: 'center',
               margin: [0, 30, 0, 15]
            },
            {
               text: 'Korisnik je upoznat sa opštim uslovima Nacionalnog paketa pomoći na putu koji se nalazi na sajtu atlas-servis.com i izvršenom uplatom na tekući račun Atlas Servisa doo potvrđuje da prihvata isti. Ugovor je zaključen kao Ugovor o prodaji na daljinu putem interneta/telefonski, u dva originalna primerka po jedan za svaku ugovornu stranu.Redovna cena Nacionalnog paketa iznosi: 3,990 dinara.',
               alignment: 'left',
               margin: [0, 1, 0, 10],
               lineHeight: 1.1,
            },
            {
               text: 'PRODAVAC',
               fontSize: 11,
               bold: true,
               margin: [68, 30, 0, 20],
            },
            {
               columns: [
                  {
                     image: await this.getBase64ImageFromURL("../../assets/images/stamp1.png"),
                     width: 212,
                     alignment: 'left',
                     // margin: [0, 10, 0, 0]
                  },
                  {
                     width: '*',
                     text: ''
                  },
                  {
                     image: await this.getBase64ImageFromURL("../../assets/images/stamp2.png"),
                     width: 80,
                     alignment: 'left',
                     margin: [-30, 0, 0, 0]
                  }
               ],
            }

         ],
         defaultStyle: {
            // font: 'Helvetica',
         },
         styles: {
            companyInfo:
            {
               alignment: 'right'
            }
         }
      }

      if (task === "open") {
         pdfMake.createPdf(docDefinition).open();   
      } else if (task === "download") {
         pdfMake.createPdf(docDefinition).download();   
      } else if (task === "print") {
         pdfMake.createPdf(docDefinition).print();   
      }
      
   }

   // fnc(ev: Event | undefined | null | any) {
   //    this.fName = ev.target.value
   // }

}