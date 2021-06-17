import React from 'react';

interface IPaginatedMediaListItemProps {
    title: string;
    image: any;
    date: string;
    description: string;
}

export const PaginatedMediaListItem = (props: IPaginatedMediaListItemProps) => {
    return (
        <div className="bx--col-lg-3 mediaItemContainer" style={{ position: 'relative' }}>
            <a href="#">
                <div className="mediaItemBody">
                    <img src={props.image} className="menuImage" alt={props.title} />
                    <div className="titleContainer">
                        <span>{props.title}</span>
                    </div>
                    <div className="titleContainerDescription">
                        <div className="bx--grid">
                            <div className="bx--row">
                                <b>{props.title}</b>
                            </div>
                            <div className="bx--row">
                                <span className="year">{props.date}</span>
                            </div>
                            <div className="bx--row">
                                <span>{props.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
