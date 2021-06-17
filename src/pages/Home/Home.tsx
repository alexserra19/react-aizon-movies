import React from 'react';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar'
import { HomeMenuItem } from '../../components/HomeMenuItem/HomeMenuItem';
import movies from '../../assets/movies.png';
import series from '../../assets/series.png';
import './Home.scss'


const Home = () => {
    return (
        <div>
            <HeaderBar
                displayFilters={() => { }}
            />
            <div className="layoutContainer">
                <div className="bx--grid" style={{ textAlign: 'center', padding: 0, display: 'initial' }}>
                    <div className="bx--row" style={{ margin: 0 }}>
                        <div className="bx--col-lg-8 homeMenuItemCol">
                            <HomeMenuItem
                                text={'Movies'}
                                link={'/movies'}
                                image={movies}
                            />
                        </div>
                        <div className="bx--col-lg-8 homeMenuItemCol">
                            <HomeMenuItem
                                text={'Series'}
                                link={'/series'}
                                image={series}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;