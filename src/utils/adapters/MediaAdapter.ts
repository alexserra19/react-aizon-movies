import { Media } from "../typings";

class MediaAdapter {

    JSONToMediaList(mediaList: Array<any>): Array<Media> {
        let mediaListAdapted = mediaList.map((item, index) => {
            return (
                {
                    id: index,
                    type: item.programType,
                    title: item.title,
                    description: item.description,
                    date: item.releaseYear,
                    image: item.images['Poster Art'].url,
                }
            )
        })
        return mediaListAdapted
    }
}

export default new MediaAdapter();
