import { createReducer, on } from '@ngrx/store';
import { init } from './posts.actions';

const testData = [{ userId: 1, id: 1, title: 'test', body: 'test' }, { userId: 2, id: 2, title: 'test2', body: 'test2' }];

const initialState: Post[] = testData;

export const postsReducer = createReducer(
    initialState,
    // on(init, (state)=> )
)

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// const postsReducer = createReducer(
//     { posts: [] },
//     on(addPost, (state, action) => {
//         return {
//         posts: [...state.posts, action.post]
//         }
//     })
//     );
// );

// export function reducer(state, action) {
//     return postsReducer(state, action);
// }

