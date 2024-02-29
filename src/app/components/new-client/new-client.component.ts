import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from "src/app/services/clients.service";
import { Client } from "src/app/models/client.model";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
   selector: 'app-new-client',
   templateUrl: './new-client.component.html',
   styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
   nekiObjekat: object = {};
   customObj: any | undefined;

   constructor(private clientsService: ClientsService) { }

   ngOnInit(): void {
      this.customObj = new Client(13243, '1.2.2024', 'Milan', 'Silic', 'Pete Licke 3', 21000, 'Novi Sad', 604168010, 'asdas@asdsa', 'ns-2123-sad', 'asda', 'asasd', 'asda', 'asda', 'asasd', 'asda');
   }

   passMyFormData(ob: Client) {
      this.clientsService.postData(new Client(ob.cntrNum, ob.cntrDate, ob.fName, ob.lName, ob.address, ob.PTT, ob.city, ob.mPhone, ob.mail, ob.plates, ob.vehType, ob.vehCol, ob.vehicle, ob.vehManYear, ob.dateStart, ob.dateEnd,)).subscribe();
      this.clientsService.emmitNewClient(ob);
   }
}