import { all, call, put, takeLatest } from 'redux-saga/effects'
import moviesTypes from '../types/mediaTypes'
import MediaService from '../../services/MediaService';
import mediaActions from '../actions/mediaActions';
import _ from 'lodash';
import helpers from '../../utils/helpers';
import {Media} from '../../utils/typings'

export function* initialize() {

    let media: Array<Media> = []
    media = yield call(MediaService.getPopularMedia)

    const series = media.filter((item: Media) => item.type === "series")
    const movies = media.filter((item: Media) => item.type === "movie")

    if(_.isEmpty(media)) {
        yield call (helpers.handleNetworkError)
    }
    else yield put(mediaActions.initializeFinish(movies, series))
}



export default [
    takeLatest(moviesTypes.INITIALIZE_START, initialize),
]