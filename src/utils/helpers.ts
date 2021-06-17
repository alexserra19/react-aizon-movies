import _ from "lodash"
import moment from "moment"
import { Media } from "./typings"

export default {
    reduceText,
    handleNetworkError,
    filterMedia
}

function reduceText(text: string, length: number) {
    return text.slice(0, length) + (text.length > length ? '...' : '')
}

function handleNetworkError() {
    alert(
        "Something went wrong. Please, try it again",
    )
}

function filterMedia(target: string, value: any, mediaArray: Array<Media>) {

    let filtered = mediaArray

    if (target === 'search') {
        filtered = mediaArray.filter((media: Media) => media.title.toLowerCase().includes(value))
    }
    else if (target === 'dates' && !_.isEmpty(value)) {

        const yearFrom = value[0]
        const yearTo = value[1]

        filtered = mediaArray.filter((media: Media) =>
            moment(media.date, "YYYY") >= yearFrom &&
            moment(media.date, "YYYY") <= yearTo 
        )
    }

    return filtered
}