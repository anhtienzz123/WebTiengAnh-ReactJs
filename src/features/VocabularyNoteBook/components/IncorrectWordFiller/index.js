import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Input, Space, Tag, Typography } from 'antd';
import './IncorrectWordFiller.scss';

const { Title, Text } = Typography;

IncorrectWordFiller.propTypes = {

    word: PropTypes.object,
    writed: PropTypes.string,
    status: PropTypes.string,
};

IncorrectWordFiller.defaultProps = {
    word: {},
    writed: '',
    status: '',

}

function IncorrectWordFiller(props) {

    const { word, writed, status, onEnter } = props;
    const { id, key, value, mixKey } = word;


    const handleEnter = (e) => {

        const data = e.target.value;
        onEnter(data);


    }

    return (
        <div className="incorrect-word-filler">
            <Space direction="vertical">

                <div>
                    <div className="english">
                        English
                   <span>{key}</span>
                    </div>
                    <Divider />

                    <div className="vietnam">
                        Vietnamese
                   <span>{value}</span>
                    </div>
                </div>

                <div className="writed">
                    <Text style={{ fontSize: '16px' }} >Bạn đã viết: <b>{writed}</b> </Text>
                </div>

                <div className="fill">

                    <Space direction="vertical">
                        <Text style={{ fontSize: '20px' }} >Chép lại <b>English</b> cho <b>Vietnamese</b> ở phía trên và bấm Enter   </Text>
                        <Input onPressEnter={handleEnter} className={`input input--${status}`} size="large" />

                        <div className="tag">
                            {
                                mixKey.map((item, index) => <Tag key={index} className="mark" color="#108ee9">{item}</Tag>)
                            }

                        </div>
                    </Space>


                </div>
            </Space>
        </div>
    );
}

export default IncorrectWordFiller;