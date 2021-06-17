import MediaService from '../../../services/MediaService';
import { initialize } from '../../../store/saga/mediaSaga';
import { call, put } from 'redux-saga/effects';
import mediaActions from '../../../store/actions/mediaActions';
import helpers from '../../../utils/helpers';
import { Media } from '../../../utils/typings';

describe('Media Saga', () => {

    it('initialize with no error', async () => {

        const gen = initialize();
        const mockMovies = [
            {
                id: 1,
                type: "movie",
                title: 'title',
                description: 'description',
                date: '2020',
                image: 'image.jpg',
            }
        ]

        const mockSeries = [
            {
                id: 1,
                type: 'series',
                title: 'title',
                description: 'description',
                date: '2020',
                image: 'image.jpg',
            }
        ]


        const movies: Array<Media> = mockMovies
        const series: Array<Media> = mockSeries

        const media: Array<Media> = [
            {
                id: 1,
                type: "movie",
                title: 'title',
                description: 'description',
                date: '2020',
                image: 'image.jpg',
            },
            {
                id: 1,
                type: 'series',
                title: 'title',
                description: 'description',
                date: '2020',
                image: 'image.jpg',
            }
        ]


        expect(gen.next().value).toEqual(call(MediaService.getPopularMedia))

        expect(gen.next(media).value).toEqual(put(mediaActions.initializeFinish(movies, series)))

    });


    it('initialize with error', async () => {

        const gen = initialize();

        const movies: any = []
        const series: any = []
        const media: any = []

        expect(gen.next().value).toEqual(call(MediaService.getPopularMedia))
        expect(gen.next(media).value).toEqual(call(helpers.handleNetworkError));

    });
});