import { HttpClient } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
  alternarImagem(){
    this.mostrarImagem =!this.mostrarImagem;
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
