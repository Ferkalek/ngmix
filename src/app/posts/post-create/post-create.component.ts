import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enterValue = '';
  newPost = 'NEW POST';
  constructor() { }

  ngOnInit(): void {
  }

  onSavePost() {
    this.newPost = this.enterValue;
  }

}
