import InterceptorService from '../../services/RequestInterceptorService';
import MediaService from '../../services/MediaService';
import MediaAdapter from '../../utils/adapters/MediaAdapter';
import AppConstants from '../../utils/AppConstants';
import configuration from "../../api/config";

afterEach(() => {
    jest.clearAllMocks();
});

describe('MediaService', () => {

    const mockResponseAdapterMedia = [
        {
            id: 1,
            type: "movie",
            title: 'title',
            description: 'description',
            date: '2020',
            image: 'image.jpg',
        }
    ]

    const mockResponseInterceptorMedia = {
        isSuccess: true,
        data: {
            entries: [
                {
                    id: 1
                }
            ]
        }
    }


    it('getPopularMedia', async () => {
        const mockUrl = AppConstants.domain + configuration.routes.getMedia;
        const interceptorSpy = jest.spyOn(InterceptorService, 'doRequest').mockImplementation(() => Promise.resolve(mockResponseInterceptorMedia));
        const adapterSpy = jest.spyOn(MediaAdapter, 'JSONToMediaList').mockImplementation(() => mockResponseAdapterMedia);

        const data = await MediaService.getPopularMedia()

        expect(interceptorSpy).toBeCalledWith(mockUrl)
        expect(adapterSpy).toBeCalledWith(mockResponseInterceptorMedia.data.entries)
        expect(data).toBe(mockResponseAdapterMedia)
    });
});
