import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { set, init } from "./posts.actions";
import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import { Post } from "../models/post-object";

@Injectable()
export class PostsEffects {
    getPosts = createEffect(() => this.actions$.pipe(
        ofType(init),
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(map((posts) => {
                return set({ posts: posts as Post[] });
            
            }))
        ),
    ));

    constructor(private actions$: Actions, private http: HttpClient) {}

}
