import { HttpClient } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(){
   this.http.get('https://localhost:5001/api/values').subscribe(
     Response => {
       this.eventos = Response;
       console.log(Response);
      },
       error => {
         console.log(error);
       });
      }

}
