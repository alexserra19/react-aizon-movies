import mediaTypes from '../types/mediaTypes';
import { Action } from 'redux';
import { Media } from '../../utils/typings';

const mediaActions: IMediaActions = {
  initializeStart() {
    return {
      type: mediaTypes.INITIALIZE_START,
    };
  },
  initializeFinish(
    movies: Array<Media>,
    series: Array<Media>,
  ) {
    return {
      type: mediaTypes.INITIALIZE_FINISH,
      data: { movies, series }
    };
  },
}

export default mediaActions;

export interface IMediaActions {
  initializeStart: () => Action;
  initializeFinish: (
    movies: Array<Media>,
    series: Array<Media>,
  ) => Action;
}
