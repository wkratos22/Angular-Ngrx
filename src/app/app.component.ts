import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import * as action from '../app/form/store/lista/lista.action';
import { Store } from '@ngrx/store';
import { ListaService } from '../api/lista.service';
import { Persona } from '../models/persona.model';
import { CommonModule } from '@angular/common';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent,CommonModule,],
})
export class AppComponent {
  title = 'Angular-Ngrx';


  constructor(private store: Store, private listaService: ListaService, public dialog: MatDialog) {
  }
  listaPersone: Persona[] = [];
  itemPersona: BehaviorSubject<any> = new BehaviorSubject<any>(null);
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
  bottoneEdit(itemPersona : Persona){
    this.store.dispatch(action.editPersona({itemPersona}));
  }
  bottoneDelete(){
    this.store.dispatch(action.deletePersona());
  }

  openDialog(item : any): void {
    const dialogRef = this.dialog.open(ModalContentComponent, {
      width: '250px'
    });
    const itemPersona = item;
    dialogRef.componentInstance.setItemPersona(itemPersona); 

    this.bottoneEdit(itemPersona);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
