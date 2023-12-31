import { createReducer, on } from '@ngrx/store';
import { set } from './posts.actions';

// const testData = [{ userId: 1, id: 1, title: 'test', body: 'test' }, { userId: 2, id: 2, title: 'test2', body: 'test2' }];

const initialState: Post[] = [];

export const postsReducer = createReducer(
    initialState,
    on(set, (state, action) => action.posts)
)

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
