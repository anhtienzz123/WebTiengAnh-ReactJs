import { ReloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './WordFiller.scss';


const { Title, Text } = Typography;

WordFiller.propTypes = {

    word: PropTypes.object,
    status: PropTypes.string,
    onEnter: PropTypes.func,
};





function WordFiller(props) {


    const { word, status, onEnter } = props;
    const { id, key, value, mixKey = [] } = word;

    const [valueInput, setValueInput] = useState('');




    const handlePressEnter = (e) => {
        const inputValue = e.target.value;
        onEnter(inputValue);

    }

    const handleOnchange = (e) => {
        setValueInput(e.target.value);
    }

    useEffect(() => {
        setValueInput('');
    }, [word])

    return (
        <div className="word-filler">
            <Space style={{ width: '100%' }} direction="vertical">

                <Title level={1}>{value}</Title>
                <p>Nhập <Text strong>English</Text> cho <Text strong>Vietnamese</Text> ở phía trên và bấm Enter: </p>
                <Input className={`input input--${status}`} onChange={handleOnchange} value={valueInput} onPressEnter={handlePressEnter} size="large" />

                <div className="tag">
                    {
                        mixKey.map((item, index) => { return <Tag key={index} className="mark" color="#108ee9">{item}</Tag> })
                    }
                </div>

                <div className="seen-question">
                    <Button icon={<ReloadOutlined />} >Xem câu trả lời</Button>
                </div>

            </Space>
        </div>
    );
}

export default WordFiller;