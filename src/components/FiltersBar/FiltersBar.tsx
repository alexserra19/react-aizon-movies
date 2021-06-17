
import React, { useState } from 'react';
import './FiltersBar.scss'
import { Search } from "carbon-components-react"
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

interface IFiltersBarProps {
    doSearch: (target: string, value: any) => void;
}

export const FiltersBar = (props: IFiltersBarProps) => {

    const [search, updateSearch] = useState<string>('');

    const onAnyChange = (value: string, update: (val: any) => void, target: string) => {
        update(value)
        props.doSearch(target, value)
    }

    return (
        <div className="filtersBarContainer container">
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col-lg-12 bx--col-md-12">
                        <Search
                            className="searchBar"
                            labelText="Name"
                            value={search}
                            style={{ borderRadius: 20, border: 0, height: 30 }}
                            onChange={(e) => onAnyChange(e.target.value, updateSearch, 'search')}
                        />
                    </div>
                    <div className="bx--col-lg-4">
                        <RangePicker
                            onChange={(val: any) => onAnyChange(val, () => { }, 'dates')}
                            picker="year"
                            className="yearPicker"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}
