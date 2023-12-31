import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { init } from '../store/posts.actions';

@Component({
  selector: 'app-posts-output',
  // standalone: true,
  // imports: [],
  templateUrl: './posts-output.component.html',
  styleUrl: './posts-output.component.css'
})
export class PostsOutputComponent {
  posts$: Observable<Post[]>;
  allPosts: Post[]

  constructor(private store: Store<{posts: []}>) { 
    this.posts$ = store.select('posts');
    this.allPosts = [];
    this.posts$.subscribe(posts => {
      this.allPosts = posts;
    });
    console.log(this.allPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(init());
  }

}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
