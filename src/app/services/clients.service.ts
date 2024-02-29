import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

const url = 'https://65defb2dff5e305f32a10a87.mockapi.io/api/cl/clients';

@Injectable()
export class ClientsService {
   newClientEvn = new EventEmitter<any>();

   constructor(private http: HttpClient) { }

   getData(): Observable<any[]> {
      return this.http.get<any[]>(url).pipe(
         map(response => response)
      );
   }

   emmitNewClient(ob: object) {
      this.newClientEvn.emit(ob);
   }

   postData(data: object): Observable<any> {
      return this.http.post(url, data);
   }
}