import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import * as ListaAction from '../app/form/store/lista/lista.action';
import { Store } from '@ngrx/store';
import { ListaService } from '../api/lista.service';
import { Persona, isEditing } from '../models/persona.model';
import { CommonModule } from '@angular/common';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { selectListaState } from './form/store/lista/lista.selectors';
import * as EditAction from './form/store/edit/edit.action';
import { selectEditValue } from './form/store/edit/edit.selectors';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FormComponent, CommonModule, FormsModule],
})
export class AppComponent {
  title = 'Angular-Ngrx';

  lista$: Observable<Persona[]> = this.store.select(selectListaState);
  edit$: Observable<Persona | undefined> = this.store.select(selectEditValue);

  constructor(
    private store: Store,
    private listaService: ListaService,
    public dialog: MatDialog
  ) {}
  listaPersone: Persona[] = [];
  itemPersona: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private dialogRef!: MatDialogRef<ModalContentComponent> | null;

  /**
   * Subscribes to the observable returned by the getLista method of the ListaService.
   * When the observable emits a value, it assigns the received data to the listaPersone property.
   * It also logs the received data to the console.
   */
  ngOnInit() {
    this.store.dispatch(ListaAction.load());

    this.edit$.subscribe((edit) => {
      if (!isEditing(edit) && this.dialogRef !== null) {
        return;
      }

      this.dialogRef = this.dialog.open(ModalContentComponent, {
        width: '250px',
        data: edit,
      });

      this.dialogRef.afterClosed().subscribe((data) => {
        if (data) {
          this.store.dispatch(
            EditAction.save({ id: data.id, persona: data.persona })
          );
          return;
        }
        this.store.dispatch(EditAction.clear());
        this.dialogRef = null;
      });
    });
  }

  bottoneDelete(id: string) {
    this.store.dispatch(ListaAction.deletePersona({ id }));
  }

  editPerson(id: string) {
    this.store.dispatch(EditAction.add({ id }));
  }

  addPerson() {
    this.store.dispatch(EditAction.init());
  }


  
}
