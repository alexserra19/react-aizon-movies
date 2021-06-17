import mediaTypes from '../../../store/types/mediaTypes';
import mediaActions from '../../../store/actions/mediaActions';


describe('Media Actions', () => {
    it('initializeStart', () => {
        const expectedAction = {
            type: mediaTypes.INITIALIZE_START,
        }

        expect(mediaActions.initializeStart()).toEqual(expectedAction)
    });

    it('initializeFinish', () => {
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
                type: "series",
                title: 'title',
                description: 'description',
                date: '2020',
                image: 'image.jpg',
            }
        ]

        const expectedAction = {
            type: mediaTypes.INITIALIZE_FINISH,
            data: {
                movies: mockMovies,
                series: mockSeries,
            }
        }

        expect(mediaActions.initializeFinish(mockMovies, mockSeries)).toEqual(expectedAction)
    });

});