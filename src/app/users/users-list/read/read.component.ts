import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Tutorial } from 'src/app/models/tutorial.model'
import { Store } from '@ngxs/store'
import { RemoveTutorial } from 'src/app/actions/tutorial.actions'

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html'
})
export class ReadComponent {

  tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
      this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }
}