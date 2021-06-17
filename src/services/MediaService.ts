import AppConstants from "../utils/AppConstants";
import configuration from "../api/config";
import { Media } from "../utils/typings";
import MediaAdapter from "../utils/adapters/MediaAdapter";
import RequestInterceptorService from "./RequestInterceptorService";

class MediaService {

    async getPopularMedia(): Promise<Array<Media>> {
        let url = AppConstants.domain + configuration.routes.getMedia
        let response = await RequestInterceptorService.doRequest(url);
        let data: Array<Media> = []
        if (response?.isSuccess) {
            data = MediaAdapter.JSONToMediaList(response.data.entries)
        }
        return data
    }
}

export default new MediaService();
