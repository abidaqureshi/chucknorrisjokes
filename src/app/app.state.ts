import { Jokes } from './models/jokes.model';

export interface AppState {
  key: Jokes;
  favoriteJokes: Array<Jokes>;
}
