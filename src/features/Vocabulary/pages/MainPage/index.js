import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.scss';

import SearchForm from 'features/Vocabulary/components/SearchForm';
import SearchResult from 'features/Vocabulary/components/SearchResult';

import vocabularyApi from 'api/vocabularyApi';
import { getVocabulary } from './../../vocabularySlice';


MainPage.propTypes = {

};

function MainPage(props) {

    const dispatch = useDispatch();
    const vocabulary = useSelector(state => state.vocabulary);

    console.log('vocabulary: ', vocabulary);
    const isSearch = Object.keys(vocabulary).length == 0 ? false : true;

    const handleSearchClick = value => {

        vocabularyApi.getVocabulary(value).then(vocabularyData => {

            const action = getVocabulary(vocabularyData);
            dispatch(action);

        }).catch(e => console.log(e));


    }

    console.log('isSearch: ', isSearch);

    return (
        <div className="main-search-vocabulary" style={isSearch ? {} : { height: '90vh' }}>
            <Row >
                <Col span={16} offset={4}>

                    <Col span={16} offset={4}>
                        <SearchForm onSearchClick={handleSearchClick} />
                    </Col>

                    <Divider>Kết quả</Divider>
                    <SearchResult vocabulary={vocabulary} />
                </Col>
            </Row>



        </div>
    );
}

export default MainPage;