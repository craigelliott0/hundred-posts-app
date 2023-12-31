import { Component, Input } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-square',
  // standalone: true,
  // imports: [],
  templateUrl: './post-square.component.html',
  styleUrl: './post-square.component.css'
})
export class PostSquareComponent {
  @Input() post: Post = { userId: 0, id: 0, title: '', body: '' };

  constructor() { }

}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
