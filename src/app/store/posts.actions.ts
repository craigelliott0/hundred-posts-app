import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post-object';

export const init = createAction(
    '[Posts] Init'
);

export const set = createAction(
    '[Posts] Set',
    props<{posts: Post[]}>()
)
