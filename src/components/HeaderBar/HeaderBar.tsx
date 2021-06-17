
import React from 'react';
import AppConstants from '../../utils/AppConstants';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { Header } from "carbon-components-react/lib/components/UIShell";
import './HeaderBar.scss'
import { Button } from "carbon-components-react"
import login from '../../assets/icon-login.png';
import filter from '../../assets/icon-filter.png';
import movies from '../../assets/icon-movies.png';
import series from '../../assets/icon-series.png';

interface IHeaderBarProps {
    displayFilters: () => void
}

export const HeaderBar = (props: IHeaderBarProps) => {
    let history = useHistory();
    const pathName = history.location.pathname

    return (
        <div>
            <Header className="headerBarContainer container"
                aria-label="header"
            >
                <div>
                    <Link to="/home">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className="headerLinks">
                    <Link
                        to="/movies"
                        className="linkItem"
                        style={{ backgroundColor: pathName === '/movies' ? AppConstants.colors.red : 'transparent' }}
                    >
                        <img src={movies} alt="movies" />
                        <span>Movies</span>
                    </Link>
                    <Link
                        to="/series"
                        className="linkItem"
                        style={{ backgroundColor: pathName === '/series' ? AppConstants.colors.red : 'transparent' }}
                    >
                        <img src={series} alt="series" />
                    Series
                </Link>
                </div>
                <div className="rightHeader">
                    {pathName !== '/home' &&
                        <Button
                            className="buttonFilter"
                            onClick={props.displayFilters}
                        >
                            <img src={filter} alt="filter" />
                            <span className="filtersText">Filters</span>
                        </Button>
                    }

                    <Button
                        className="buttonLogin"
                        onClick={() => { }}
                    >
                        <span className="loginText">Login</span>
                        <img src={login} alt="login" />
                    </Button>
                    <Button
                        className="freeTrial"
                        onClick={() => { }}
                    >
                        <span>Start your free trial</span>
                    </Button>
                </div>

            </Header>
        </div>
    );
}



