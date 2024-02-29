import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractTemplateComponent } from './contract-template/contract-template.component';
import { TableComponent } from './components/table/table.component';
import { ControlsComponent } from './components/controls/controls.component';
import { NewClientComponent } from './components/new-client/new-client.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator'; // Optional
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; // Optional for sorting
import { MatPaginatorModule } from '@angular/material/paginator'; // Optional for pagination

import { ClientsService } from './services/clients.service';
import { HttpService } from './services/http.service';



@NgModule({
   declarations: [
      AppComponent,
      ContractTemplateComponent,
      TableComponent,
      ControlsComponent,
      NewClientComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule,
      MatFormFieldModule,
      HttpClientModule
   ],
   providers: [ClientsService, HttpService],
   bootstrap: [AppComponent]
})
export class AppModule { }
