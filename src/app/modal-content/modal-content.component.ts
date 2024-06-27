import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ListaService } from '../../api/lista.service';
import { Persona } from '../../models/persona.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent{

  constructor(private listaservice: ListaService){}

  private itemPersona: any;
  personaEdit: any;

  setItemPersona(itemPersona: any): void {
    this.itemPersona = itemPersona;
    this.personaEdit = this.itemPersona;
    console.log(this.personaEdit.nome);
  }

  
  listaPersone: Persona[] = [];
  funzioneEdit(){
    this.listaservice.getLista().subscribe(data => {
      this.listaPersone = data;
      console.log(this.listaPersone);
    }
  )}

  
}

