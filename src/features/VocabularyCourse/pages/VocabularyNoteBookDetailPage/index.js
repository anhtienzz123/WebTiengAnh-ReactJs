import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import './NoteBookDetailPage.scss';

import { Card, Avatar, Divider, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import CardOptionDetail from 'features/VocabularyNoteBook/components/CardOptionDetail';
import VocabularyTable from 'features/VocabularyNoteBook/components/VocabularyTable';
import HeaderNoteBookDetail from 'features/VocabularyNoteBook/components/HeaderNoteBookDetail';
import vocabularyNoteBookApi from 'api/vocabularyNoteBookApi';

const { Meta } = Card;

VocabularyNoteBookDetailPage.propTypes = {

};

function VocabularyNoteBookDetailPage(props) {

    const match = useRouteMatch();
    const [vocabularyNoteBook, setVocabularyNoteBook] = useState({});
    const [words, setWords] = useState([]);
    const [process, setProcess] = useState({});
    const [headerData, setHeaderData] = useState({});


    useEffect(() => {

        const fetchVocabularyNoteBook = async (slug) => {

            const data = await vocabularyNoteBookApi.fetchVocabularyNoteBookBySlug(slug);
            setVocabularyNoteBook(data);

            const { numberWordLearned, numberWordNoted, percent, words, vocabularyCourseName, thumbnail, createdAt, description } = data;

            setWords(words);

            setProcess({ numberWordLearned, numberWordNoted, percent });
            setHeaderData({ vocabularyCourseName, thumbnail, createdAt, description });


        }

        const slug = match.params.slug;
        fetchVocabularyNoteBook(slug);

    }, []);


    return (
        <div className="notebook-detail">

            <div className="content">

                <div className="header">
                    <div className="header-option">
                        <HeaderNoteBookDetail data={headerData} />
                    </div>
                </div>


                <div className="body">

                    <div className="body-option">

                        <CardOptionDetail data={process} />
                        <p></p>
                        <VocabularyTable words={words} />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default VocabularyNoteBookDetailPage;