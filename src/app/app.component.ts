import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import * as action from '../app/form/store/lista/lista.action';
import { Store } from '@ngrx/store';
import { ListaService } from '../api/lista.service';
import { Persona } from '../models/persona.model';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent,CommonModule],
})
export class AppComponent {
  title = 'Angular-Ngrx';


  constructor(private store: Store, private listaService: ListaService) {
  }
  listaPersone: Persona[] = [];
    /**
     * Subscribes to the observable returned by the getLista method of the ListaService.
     * When the observable emits a value, it assigns the received data to the listaPersone property.
     * It also logs the received data to the console.
     */
  ngOnInit() {
    this.listaService.getLista().subscribe(data => {
      this.listaPersone = data;
      console.log(this.listaPersone);
    })

  }
  buttonClick(){
    this.store.dispatch(action.loadComplete());
  }
}
