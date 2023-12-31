import { createAction, props } from '@ngrx/store';

export const init = createAction(
    '[Posts] Init'
);

export const set = createAction(
    '[Posts] Set',
    props<{posts: Post[]}>()
)

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}