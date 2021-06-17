import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FiltersBar } from '../../components/FiltersBar/FiltersBar';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import { PaginatedMediaList } from '../../components/PaginatedMediaList/PaginatedMediaList';
import { Media } from '../../utils/typings';
import { useHistory } from 'react-router-dom';
import mediaActions from '../../store/actions/mediaActions';
import _ from 'lodash';
import helpers from '../../utils/helpers';

const MediaContainer = () => {
    const history = useHistory();
    const [displayFilters, setDisplayFilters] = useState<boolean>(false);
    const movies = useSelector((store: any) => store.mediaReducer.movies);
    const series = useSelector((store: any) => store.mediaReducer.series);
    const [filteredMedia, setFilteredMedia] = useState<Array<Media>>(movies);
    const [isMovies, setIsMovies] = useState<boolean>(history.location.pathname === '/movies');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (_.isEmpty(movies) || _.isEmpty(series)) {
            setIsLoading(true)
            dispatch(mediaActions.initializeStart())
        }
    }, []);

    useEffect(() => {
        //I have used the settimeout to simulate the response time of BE
        setTimeout(() => {
            const media = isMovies ? movies : series
            setFilteredMedia(media)
            setIsLoading(false)
        }, 2000);
    }, [movies, series])

    useEffect(() => {
        const isMovies = history.location.pathname === '/movies'
        setIsMovies(isMovies)
        const media = isMovies ? movies : series
        setFilteredMedia(media)
    }, [history.location.pathname])

    const doSearch = (target: string, value: any) => {
        const media = isMovies ? movies : series
        const filtered = helpers.filterMedia(target, value, media)
        setFilteredMedia(filtered)
    }

    return (
        <div>
            <HeaderBar
                displayFilters={() => setDisplayFilters(!displayFilters)}
            />
            <div className="layoutContainer">
                {displayFilters &&
                    <FiltersBar doSearch={doSearch} />
                }
                <div className="container">
                    <PaginatedMediaList
                        title={isMovies ? "Popular Movies" : "Popular Series"}
                        mediaList={filteredMedia}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    )
};

export default MediaContainer;
