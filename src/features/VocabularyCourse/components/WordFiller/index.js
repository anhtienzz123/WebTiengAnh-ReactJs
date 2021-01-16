import { ReloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Tag, Typography } from 'antd';
import React from 'react';
import './WordFiller.scss';


const { Title, Text } = Typography;

WordFiller.propTypes = {

};

function WordFiller(props) {

    return (
        <div className="word-filler">
            <Space style={{ width: '100%' }} direction="vertical">

                <Title level={1}>Con chos con la nhung nguoi ban la cua ta</Title>
                <p>Nhập <Text strong>English</Text> cho <Text strong>Vietnamese</Text> ở phía trên và bấm Enter: </p>
                <Input size="large" />

                <div className="tag">
                    <Tag className="mark" color="#108ee9">a</Tag>
                    <Tag className="mark" color="#108ee9">a</Tag>
                    <Tag className="mark" color="#108ee9">a</Tag>
                    <Tag className="mark" color="#108ee9">a</Tag>
                </div>

                <div className="seen-question">
                    <Button icon={<ReloadOutlined />} >Xem câu trả lời</Button>
                </div>

            </Space>
        </div>
    );
}

export default WordFiller;