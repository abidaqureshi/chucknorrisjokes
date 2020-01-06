import { AppState } from '../app.state';
import {
  LOAD_JOKE,
  ADD_JOKE,
  REMOVE_JOKE,
} from './../actions/jokes.actions';
export const initialState: AppState = {
    key: {
      joke: {
        icon_url: '',
        id: '',
        url: '',
        value: '',
      }
    },
    favoriteJokes: []
};

export function rootReducer(state: AppState , action): any {


    switch (action.type) {
        case LOAD_JOKE:
            return {...state, ...action.payload};
        case ADD_JOKE:
            return {...state, ...action.payload};
        case REMOVE_JOKE:
            return {...state, ...action.payload};
        default:
           return state;
    }
}
