import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Persona } from "../models/persona.model";

@Injectable({ providedIn: 'root' })
export class ListaService {
  constructor(public http: HttpClient) {}
  mockUrl = '../asssets/mocks/lista-persone.mocks.json';

  getLista(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.mockUrl);
  }
}