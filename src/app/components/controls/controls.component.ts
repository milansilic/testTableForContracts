import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

   constructor (private formService: FormService) {}

   openAdd() {
      this.formService.formToggleEvn.emit(true);
   }
}
