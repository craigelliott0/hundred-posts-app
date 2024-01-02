import { createReducer, on } from '@ngrx/store';
import { set } from './posts.actions';
import { Post } from '../models/post-object';

const initialState: Post[] = [];

export const postsReducer = createReducer(
    initialState,
    on(set, (state, action) => action.posts)
)
