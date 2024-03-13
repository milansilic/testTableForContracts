import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from "src/app/services/clients.service";
import { FormService } from 'src/app/services/form.service';
import { Client } from "src/app/models/client.model";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
   selector: 'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
   nekiObjekat: object = {};
   customObj: any | undefined;

   constructor(
      private clientsService: ClientsService, 
      private formService: FormService
   ) {}

   ngOnInit(): void {
      this.customObj = new Client(13243, '1.2.2024', 'Milan', 'Silic', 'Pete Licke 3', 21000, 'Novi Sad', 604168010, 'asdas@asdsa', 'ns-2123-sad', 'asda', 'asasd', 'asda', 'asda', 'asasd', 'asda', '1');
   }

   postData(ob: Client) {
      console.log(ob);
      
      this.clientsService.clieSrPostData(new Client(ob.cntrNum, ob.cntrDate, ob.fName, ob.lName, ob.address, ob.PTT, ob.city, ob.mPhone, ob.mail, ob.plates, ob.vehType, ob.vehCol, ob.vehicle, ob.vehManYear, ob.dateStart, ob.dateEnd, ob.pcg)).subscribe();
      this.clientsService.newClientEvn.emit(ob);
      this.formService.formToggleEvn.emit(false);
   }

   cleanFields() {
      document.querySelectorAll('input').forEach(inp => inp.value = '');
   }

   closeAdd() {
      this.formService.formToggleEvn.emit(false);
   }
}