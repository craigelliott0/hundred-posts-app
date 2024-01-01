import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-square',
  templateUrl: './post-square.component.html',
  styleUrl: './post-square.component.css'
})
export class PostSquareComponent {
  @Input() post: Post = { userId: 0, id: 0, title: '', body: '' };

  @Input() selectedSquare = 0;

  constructor() { }

  counter = 0;
  squareProps = ['title', 'userId', 'id', 'body'];
  currentProp = 'title';

  increaseCounter(){
    if (this.counter === this.squareProps.length - 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
    this.currentProp = this.squareProps[this.counter];
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
