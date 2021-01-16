import { RightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import IncorrectWordFiller from 'features/VocabularyNoteBook/components/IncorrectWordFiller';
import WordFiller from 'features/VocabularyNoteBook/components/WordFiller';
import React from 'react';
import './ReviewWordFill.scss';



ReviewWordFillPage.propTypes = {

};

function ReviewWordFillPage(props) {
    return (
        <div className="main">

            <Row>
                <Col span={6}></Col>

                <Col span={10}>

                    <WordFiller />

                </Col>

                <Col span={4}>
                    <Button type="primary" icon={<RightOutlined />} > Câu khác  </Button>
                </Col>

                <Col span={4} >

                    <div className="clock"> 1 </div>

                </Col>
            </Row>
        </div>
    );
}

export default ReviewWordFillPage;