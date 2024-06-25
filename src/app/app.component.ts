import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import * as action from '../app/form/store/lista/lista.action';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent]
})
export class AppComponent {
  title = 'Angular-Ngrx';

  constructor(private store: Store) {
  }

  buttonClick(){
    this.store.dispatch(action.loadComplete());
  }
}
