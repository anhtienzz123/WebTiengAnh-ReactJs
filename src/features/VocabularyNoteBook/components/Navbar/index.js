import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Navbar.scss';
import { Row, Col, Typography, Progress, Divider, Button, Popconfirm } from 'antd';
import { AliwangwangOutlined, CloseOutlined } from '@ant-design/icons';
import { Redirect, useRouteMatch } from 'react-router-dom';


const { Title, Text } = Typography;

Navbar.propTypes = {


};

function Navbar(props) {

    const match = useRouteMatch();
    const { learnedNumber, courseReviewInfo } = props;
    const { wordNumber, vocabularyCourseName } = courseReviewInfo;

    const percent = Math.round((learnedNumber * 1.00 / wordNumber) * 100);

    const [isRedirect, setIsRedirect] = useState(false);

    const slug = match.params.slug;


    const handleConfirm = (e) => {
        setIsRedirect(true);
    }

    return (
        <div className="nav-bar">
            {
                isRedirect ?
                    <Redirect to={`/GhiChuTuVung/${slug}`} />
                    :
                    <Row>
                        <Col span={5}>
                            <AliwangwangOutlined />

                        </Col>

                        <Col span={14}>
                            <div style={{ textAlign: 'left', borderLeft: '2px solid #c0cbcc', borderRight: '2px solid #c0cbcc', padding: '5px 20px' }}>
                                <span style={{ fontSize: '18px', marginRight: '30px' }} >Số từ ôn được: {learnedNumber}/{wordNumber} từ </span> <Text style={{ fontSize: '24px' }} strong >{vocabularyCourseName}</Text>
                                <Progress strokeWidth={15} percent={percent} />
                            </div>

                        </Col>

                        <Col span={5}>

                            <Popconfirm
                                title='Khi thoát, kết quả sẽ không được lưu lại'
                                onConfirm={handleConfirm}
                                okText='Xác nhận'
                                cancelText='Hủy'

                            >

                                <Button type="primary" danger ><CloseOutlined /> Thoát</Button>

                            </Popconfirm>
                        </Col>
                    </Row>
            }
        </div >
    );
}

export default Navbar;