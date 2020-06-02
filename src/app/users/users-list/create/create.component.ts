import { AddTutorial } from 'src/app/actions/tutorial.actions';
import { Store } from '@ngxs/store';
import { Component } from '@angular/core';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html'
  })
  export class CreateComponent {
  
    constructor(private store: Store) { }
  
    addTutorial(name, url) {
      this.store.dispatch(new AddTutorial({name: name, url: url}))
    }
  
  }