import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ListaService } from '../../api/lista.service';
import { Persona } from '../../models/persona.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
  readonly dialogRef = inject(MatDialogRef<ModalContentComponent>);
  readonly personaEdit = inject<Persona>(MAT_DIALOG_DATA);

  savePersona(persona: Persona): void {
    this.dialogRef.close({ id: this.personaEdit.id, persona });
  }
}
