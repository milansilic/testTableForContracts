import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class FormService {
   form = false;

   formToggleEvn = new EventEmitter<any>();

   formSrOpenAdd() {
      this.form = !this.form;
      this.formToggleEvn.emit(this.form);
   }
}