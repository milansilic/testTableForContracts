import { Component, OnInit } from '@angular/core';
import { FormService } from './services/form.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   form = false;

   constructor (private formService: FormService) {}

   ngOnInit(): void {
      this.formService.formToggleEvn.subscribe(bool => this.form = bool);
   }
}