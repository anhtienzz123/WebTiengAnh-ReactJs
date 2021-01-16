import { RightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import vocabularyNoteBookApi from 'api/vocabularyNoteBookApi';
import IncorrectWordFiller from 'features/VocabularyNoteBook/components/IncorrectWordFiller';
import CompletedResult from 'features/VocabularyNoteBook/components/CompletedResult';
import Timer from 'features/VocabularyNoteBook/components/Timer';
import WordFiller from 'features/VocabularyNoteBook/components/WordFiller';
import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import './ReviewWordFill.scss';
import Navbar from 'features/VocabularyNoteBook/components/Navbar';



ReviewWordFillPage.propTypes = {

};

function ReviewWordFillPage(props) {

    const match = useRouteMatch();
    const slug = match.params.slug;

    const [word, setWord] = useState({});
    const [courseReviewInfo, setcourseReviewInfo] = useState(0);

    // trạng thái ô màu xanh hay đỏ
    const [fillStatus, setFillStatus] = useState('');
    const [seconds, setSeconds] = useState(5);

    // false: component WordFiller, true: component IncorrectWordFiller
    const [type, setType] = useState(false);
    const [writed, setWrited] = useState('');

    const wordIds = useRef([0]);

    // chua hoan thanh het cau
    const [isCompleted, setIsCompleted] = useState(false);


    useEffect(() => {
        fetchWord(slug, wordIds.current);
        fetchCourseReviewInfo(slug);

    }, [])


    // lấy từ mới về
    const fetchWord = async (slug, wordIds) => {

        const wordData = await vocabularyNoteBookApi.fetchWordBySlug(slug, wordIds);

        if (wordData.status === 204) {
            setIsCompleted(true);

        }


        setWord(wordData);



    }

    const fetchCourseReviewInfo = async (slug) => {
        const data = await vocabularyNoteBookApi.fetchCourseReviewInfoBySlug(slug);

        if (data.status === 204) {
            return;

        }

        setcourseReviewInfo(data);
    }

    // ở trang fill page khi enter
    const handleEnter = data => {

        const { id, key, value } = word;

        // nếu đúng
        if (key === data) {
            // set đáp án màu xanh
            setFillStatus('success');
            // fetch lại từ mới và cho trạng thái default 

            const x = [...wordIds.current, id];

            wordIds.current = x;

            setTimeout(() => {
                fetchWord(slug, wordIds.current);
                setFillStatus('');
            }, 1000)

        } else {
            // set đáp án màu đỏ
            setFillStatus('incorrect');

            setTimeout(() => {

                // để render ra IncorrectWordFiller
                setWrited(data);
                setType(true);
                setFillStatus('');

            }, 1000);
        }


    }

    const handleEnterIncorrect = data => {
        const { id, key, value } = word;

        // nếu đúng
        if (key === data) {
            // set đáp án màu xanh
            setFillStatus('success');

            const x = [...wordIds.current, id];

            wordIds.current = x;

            // fetch lại từ mới và cho trạng thái default 
            setTimeout(() => {
                fetchWord(slug, wordIds.current);
                setType(false);
                setFillStatus('');
            }, 1000)

        } else {
            // set đáp án màu đỏ
            setFillStatus('incorrect');

        }
    }


    const handleClock = () => {
        console.log('da chay xong roi');

    }



    return (

        <div>

            <Navbar learnedNumber={wordIds.current.length - 1} courseReviewInfo={courseReviewInfo} />
            <div className="main">

                {
                    isCompleted ?
                        <CompletedResult />
                        :
                        <Row>
                            <Col span={6}></Col>

                            <Col span={10}>

                                {
                                    type === false ? <WordFiller onEnter={handleEnter} status={fillStatus} word={word} />
                                        : <IncorrectWordFiller
                                            word={word}
                                            writed={writed}
                                            status={fillStatus}
                                            onEnter={handleEnterIncorrect}
                                        />
                                }

                            </Col>

                            <Col span={4}>
                                <Button type="primary" icon={<RightOutlined />} > Câu khác  </Button>
                            </Col>

                            <Col span={4} >

                                {/* <div className="clock">{clock}</div> */}
                                {
                                    type ?
                                        ''
                                        :
                                        <Timer initialSeconds={seconds} onClock={handleClock} />

                                }

                            </Col>
                        </Row>
                }

            </div>


        </div>
    );
}

export default ReviewWordFillPage;