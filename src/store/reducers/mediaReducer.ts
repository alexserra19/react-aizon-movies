import { Media } from '../../utils/typings';
import mediaTypes from '../types/mediaTypes';

export interface IMediaReducerState {
  movies: Array<Media>;
  series: Array<Media>;
  listsLoaded: boolean
}

export const initialState: IMediaReducerState = {
  movies: [],
  series: [],
  listsLoaded: false
};

const mediaReducer = (state: IMediaReducerState = initialState, action: any) => {
  switch (action.type) {
    case mediaTypes.INITIALIZE_FINISH:
      return {
        ...state,
        movies: action.data.movies,
        series: action.data.series,
        listsLoaded: true
      }
    default:
      return state
  }
};

export default mediaReducer;


