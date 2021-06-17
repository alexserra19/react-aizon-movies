
import React from 'react';
import './HomeMenuItem.scss'
import { Link } from 'react-router-dom';
import AppConstants from '../../utils/AppConstants';

interface IHomeMenuItemProps {
    text: string;
    image: any;
    link: string
}

export const HomeMenuItem = (props: IHomeMenuItemProps) => {
    return (
        <div className="homeMenuItem">
            <Link to={props.link}>
                <img src={props.image} className="menuImage" alt={props.text} />
                <div className="titleRow">
                    <h1 style={{color: AppConstants.colors.white}}>{props.text}</h1>
                </div>
            </Link>
        </div>
    );
}
