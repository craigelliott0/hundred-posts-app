import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { init } from '../store/posts.actions';
import { Post } from '../models/post-object';

@Component({
  selector: 'app-posts-output',
  templateUrl: './posts-output.component.html',
  styleUrl: './posts-output.component.css'
})
export class PostsOutputComponent {
  posts$: Observable<Post[]>;
  allPosts: Post[]
  selectedSquare: number = 0;
  squareClicked: boolean = false;

  constructor(private store: Store<{posts: []}>) { 
    this.posts$ = store.select('posts');
    this.allPosts = [];
    this.posts$.subscribe(posts => {
      this.allPosts = posts;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(init());
  }

  setSelectedSquare(i: number){
    this.squareClicked = true;
    this.selectedSquare = this.allPosts[i].id;
  }
}
