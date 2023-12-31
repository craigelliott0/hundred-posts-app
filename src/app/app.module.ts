import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostSquareComponent } from './posts-output/post-square/post-square.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postsReducer } from './store/posts.reducer';
import { PostsOutputComponent } from './posts-output/posts-output.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSquareComponent,
    PostsOutputComponent
    ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      posts: postsReducer
    }, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
