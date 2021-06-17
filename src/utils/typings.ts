export interface Media {
    id: number,
    type: Movie | Serie,
    title: string,
    description: string,
    date: string,
    image: string
}

export type Movie = "movie"
export type Serie = "series"
