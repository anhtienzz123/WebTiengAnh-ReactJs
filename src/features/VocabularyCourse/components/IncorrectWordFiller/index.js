import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Input, Space, Tag, Typography } from 'antd';
import './IncorrectWordFiller.scss';

const { Title, Text } = Typography;

IncorrectWordFiller.propTypes = {

};

function IncorrectWordFiller(props) {
    return (
        <div className="incorrect-word-filler">
            <Space direction="vertical">

                <div>
                    <div className="english">
                        English
                   <span>take</span>
                    </div>
                    <Divider />

                    <div className="vietnam">
                        Vietnamese
                   <span>Tốn (thời gian)</span>
                    </div>
                </div>

                <div className="writed">
                    <Text style={{ fontSize: '16px' }} >Bạn đã viết: <b>Tien huynh</b> </Text>
                </div>

                <div className="fill">

                    <Space direction="vertical">
                        <Text style={{ fontSize: '20px' }} >Chép lại <b>English</b> cho <b>Vietnamese</b> ở phía trên và bấm Enter   </Text>
                        <Input size="large" />

                        <div className="tag">
                            <Tag className="mark" color="#108ee9">a</Tag>
                            <Tag className="mark" color="#108ee9">a</Tag>
                            <Tag className="mark" color="#108ee9">a</Tag>
                            <Tag className="mark" color="#108ee9">a</Tag>
                        </div>
                    </Space>


                </div>
            </Space>
        </div>
    );
}

export default IncorrectWordFiller;