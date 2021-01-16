import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NoteBookList from 'features/VocabularyNoteBook/components/NoteBookList';
import { Col, Row, Pagination } from 'antd';
import './MainPage.scss';

import NoteBookInfo from 'features/VocabularyNoteBook/components/NoteBookInfo';
import vocabularyNoteBookApi from 'api/vocabularyNoteBookApi';
import { useSelector } from 'react-redux';
import checkLogin from 'utils/checkLogin';


MainPage.propTypes = {

};
const style = {
    border: '1px solid black'
}
function MainPage(props) {

    checkLogin();

    const [noteBooks, setNoteBooks] = useState([]);
    const [noteBookInfo, setNoteBookInfo] = useState({});
    const username = localStorage.getItem('username');
    const SIZE = 10;
    const [page, setPage] = useState(0);

    useEffect(() => {

        const fetchVocabularyNoteBookOfMe = async () => {

            const data = await vocabularyNoteBookApi.fetchVocabularyNoteBookOfMe(page, SIZE);

            setNoteBooks(data);
        }

        fetchVocabularyNoteBookOfMe();

    }, [page]);

    useEffect(() => {

        const fecthVocabularyNoteBookCommonInfo = async () => {
            const data = await vocabularyNoteBookApi.fetchVocabularyNoteBookCommonInfo();
            setNoteBookInfo(data);
        }
        fecthVocabularyNoteBookCommonInfo();


    }, [])

    const handlePagination = (page, pageSize) => {

        setPage(page - 1);

    }


    console.log("render vocabularynotebook");
    return (
        <div className="main-page" >

            <div className="content" >
                <Row >

                    <Col span={7}
                    >
                        <NoteBookInfo noteBookInfo={noteBookInfo} username={username} />
                    </Col>


                    <Col span={16} offset={1} >
                        <NoteBookList noteBooks={noteBooks} />
                        <Pagination
                            defaultCurrent={1} total={50}

                            onChange={handlePagination}
                        />
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default MainPage;