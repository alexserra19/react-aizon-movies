
import React, { useEffect, useState } from 'react';
import './PaginatedMediaList.scss'
import { Media } from '../../utils/typings';
import _ from 'lodash';
import { Pagination } from 'antd';
import { Loading } from "carbon-components-react"
import { PaginatedMediaListItem } from './PaginatedMediaListItem';

interface IPaginatedMediaListProps {
    title: string;
    mediaList: Array<Media>;
    isLoading: boolean
}

export const PaginatedMediaList = (props: IPaginatedMediaListProps) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginatedArray, setPaginatedArray] = useState<Array<Media>>(props.mediaList);

    useEffect(() => {
        const length = props.mediaList.length > 10 ? 10 : props.mediaList.length
        const from = (currentPage - 1) * 10
        const to = from + length
        let newArray = []

        for (let index = from; index < to && props.mediaList[index]; index++) {
            newArray.push(props.mediaList[index])
        }

        setPaginatedArray(newArray);

    }, [currentPage, props.mediaList])

    useEffect(() => {
        setCurrentPage(1);
    }, [props.mediaList])


    const renderList = () => {
        return (
            <>
                <div className="bx--grid gridContainer">
                    <div className="bx--row">
                        {paginatedArray.map((media: Media, index: number) => renderItem(media, index))}
                    </div>
                </div>
                <Pagination
                    className="paginator"
                    current={currentPage}
                    onChange={setCurrentPage}
                    defaultPageSize={10}
                    total={props.mediaList.length}
                    showSizeChanger={false}
                />
            </>
        )
    }

    const renderItem = (item: Media, index: number) => {
        return (
            <PaginatedMediaListItem
                title={item.title}
                image={item.image}
                description={item.description}
                date={item.date}
                key={index}
            />
        )
    }

    const renderEmptyListMessage = () => {
        return (
            <div className="noMediaAvailable">
                <h4>No results found</h4>
            </div>
        )
    }

    return (
        <div className="paginatedMediaListContainer">
            <h3>{props.title}</h3>
            {!_.isEmpty(props.mediaList) && renderList()}
            {_.isEmpty(props.mediaList) && !props.isLoading && renderEmptyListMessage()}
            {props.isLoading &&
                <Loading
                    description="Active loading indicator"
                    withOverlay={true}
                    active={true}
                />
            }
        </div>
    );
}
