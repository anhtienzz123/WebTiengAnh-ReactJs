import React from 'react';
import PropTypes from 'prop-types';


import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { Search } = Input;

SearchForm.propTypes = {

};


const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);



function SearchForm(props) {

    const { onSearchClick } = props;

    const handleSearch = value => {
        onSearchClick(value);
    };

    return (
        <div className="search-form" style={{ marginTop: '10px' }}>

            <Search
                placeholder="input search text"
                allowClear
                enterButton
                size="large"
                onSearch={handleSearch}
            />

        </div>
    );
}

export default SearchForm;