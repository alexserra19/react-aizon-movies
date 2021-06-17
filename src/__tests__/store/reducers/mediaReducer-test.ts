import mediaTypes from '../../../store/types/mediaTypes';
import mediaReducer from '../../../store/reducers/mediaReducer';


describe('Media Reducer', () => {

    let initialState = {
        movies: [],
        series: [],
        listsLoaded: false,
    }

    it('should return the initial state', () => {
        expect(mediaReducer(initialState, {})).toEqual(initialState);
    });

    it('should handle INITIALIZE_FINISH', () => {

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

        const mockInitializeFinishAction = {
            type: mediaTypes.INITIALIZE_FINISH,
            data: {
                movies: mockMovies,
                series: mockSeries,
                listsLoaded: true
            }
        };

        const mockResultState = {
            ...initialState,
            movies: mockMovies,
            series: mockSeries,
            listsLoaded: true
        }

        expect(mediaReducer(initialState, mockInitializeFinishAction)).toEqual(mockResultState);
    });
});
