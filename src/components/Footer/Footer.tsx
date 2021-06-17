
import React from 'react';
import './Footer.scss'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';

export const Footer = () => {
    return (
        <div className="footerContainer container bx--grid">
            <div className="bx--row logoRow">
                <div className="bx--col-sm-15">
                    <Link to="/home">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-4"></div>
                <div className="bx--col-lg-8">
                    <div className="bx--row linksDiv">
                        <div className="bx--col-lg-3 bx--col-sm-15 link">
                            <Link to="#">Home</Link>
                        </div>
                        <div className="bx--col-lg-3 bx--col-sm-15 link">
                            <Link to="#">Terms of Use</Link>
                        </div>
                        <div className="bx--col-lg-3 bx--col-sm-15 link">
                            <Link to="#">Legal Notices</Link>
                        </div>
                        <div className="bx--col-lg-3 bx--col-sm-15 link">
                            <Link to="#">Help</Link>
                        </div>
                        <div className="bx--col-lg-3 bx--col-sm-15 link">
                            <Link to="#">Manage Account</Link>
                        </div>
                    </div>
                </div>
                <div className="bx--col-lg-4"></div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-4"></div>
                <div className="bx--col-lg-8">
                    <div className="bx--row storesRow">
                        <div className="bx--col-lg-8 bx--col-md-8 bx--col-sm-15 store">
                            <img src={appStore} className="App-logo" alt="App Store" />
                        </div>
                        <div className="bx--col-lg-8 bx--col-md-8 bx--col-sm-15 store">
                            <img src={googlePlay} className="App-logo" alt="Google Play" />
                        </div>
                    </div>
                </div>
                <div className="bx--col-lg-4"></div>
            </div>
            <div>
                <small>Copyright 2020 Dreadfull Tomato Streaming. All Rights Reserved</small>
            </div>
        </div>
    );
}
