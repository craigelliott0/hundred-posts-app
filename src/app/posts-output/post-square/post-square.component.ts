import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post-object';

@Component({
  selector: 'app-post-square',
  templateUrl: './post-square.component.html',
  styleUrl: './post-square.component.css'
})
export class PostSquareComponent {
  @Input() post: Post = { userId: 0, id: 0, title: '', body: '' };

  @Input() selectedSquare: number = 0;

  counter: number = 0;
  squareProps: string[] = ['title', 'userId', 'id', 'body'];
  currentProp: string = 'title';
  bodyTrunc: string = '';


  ngOnInit() {
    this.bodyTrunc = this.post.body.substring(0, 70) + '...';
  }
  
  ngOnChanges() {
    if (this.selectedSquare !== this.post.id) {
      this.counter = 0;
      this.currentProp = this.squareProps[this.counter];
    }
  }

  increaseCounter(){
    if (this.counter === this.squareProps.length - 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
    this.currentProp = this.squareProps[this.counter];
  }

  getProp(){
    const propText = this.currentProp.toUpperCase();
    if (this.currentProp === 'body') {
      return `${propText}: ${this.bodyTrunc}`;
    } else {
      return `${propText}: ${this.post[this.currentProp as keyof Post]}`;
    }
  }
}
