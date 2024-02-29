import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { NgForm } from "@angular/forms";
import { ClientsService } from "src/app/services/clients.service";
import { HttpService } from "src/app/services/http.service";
import { Client } from "src/app/models/client.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
   cntrNum: number = 0;
   cntrDate: string = '';
   fName: string = '';
   lName: string = '';
   address: string = '';
   PTT: number = 0;
   city: string = '';
   mPhone: number = 0;
   mail: string = '';
   plates: string = '';
   vehType: string = '';
   vehCol: string = '';
   vehicle: string = '';
   vehManYear: string = '';
   dateStart: string = '';
   dateEnd: string = '';

   dataSource: any = [];
   displayedColumns: string[] = ['cntrNum', 'cntrDate', 'fName', 'lName', 'address', 'PTT', 'city', 'mPhone', 'mail', 'plates', 'vehType', 'vehCol', 'vehicle', 'vehManYear', 'dateStart', 'dateEnd'];
   newRow: object | any;


   constructor(private clientsService: ClientsService) { }

   ngOnInit(): void {
      this.clientsService.getData().subscribe(data => {
         this.dataSource = data;
      });

      this.clientsService.newClientEvn.subscribe(
         (ob: object) => {
            this.dataSource = [...this.dataSource, ob];
         }
      );
   }

   // ON ROW CLICK:
   getRow(val: any) {
      this.cntrNum = val.cntrNum;
      this.cntrDate = val.cntrDate
      this.fName = val.fName
      this.lName = val.lName
      this.address = val.address
      this.PTT = val.PTT;
      this.city = val.city
      this.mPhone = val.mPhone;
      this.mail = val.mail
      this.plates = val.plates
      this.vehType = val.vehType
      this.vehCol = val.vehCol
      this.vehicle = val.vehicle
      this.vehManYear = val.vehManYear
      this.dateStart = val.dateStart
      this.dateEnd = val.dateEnd
   }

   // RENDER IMAGE FOR PDF
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

   // GENERATE PDF
   async pdfmake(task: string) {
      var docDefinition: TDocumentDefinitions | any = {
         pageSize: 'A4',
         pageOrientation: 'portrait',
         pageMargins: [30, 30, 30, 30],
         content: [
            {
               columns: [
                  {
                     image: await this.getBase64ImageFromURL("assets/images/logo.png"),
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
                     image: await this.getBase64ImageFromURL("assets/images/package.png"),
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
               text: `BROJ UGOVORA: ${this.cntrNum}`,
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
                     [{ text: `Sačinjen dana ${this.cntrDate}. između:`, margin: [0, -1, 0, -1] }],
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
                     image: await this.getBase64ImageFromURL("assets/images/stamp1.png"),
                     width: 212,
                     alignment: 'left',
                     // margin: [0, 10, 0, 0]
                  },
                  {
                     width: '*',
                     text: ''
                  },
                  {
                     image: await this.getBase64ImageFromURL("assets/images/stamp2.png"),
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
}