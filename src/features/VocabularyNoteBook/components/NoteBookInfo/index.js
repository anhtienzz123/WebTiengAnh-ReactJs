import React from 'react';
import PropTypes from 'prop-types';

import { Card, Alert, Row, Col, Button, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';

import './NoteBookInfo.scss';


const { Title } = Typography;

NoteBookInfo.propTypes = {

};

const message = (so, noiDung) => {

    return (<p style={{ textAlign: 'center' }}> <span>{so}</span>  <br /> {noiDung} </p>);
}

const title = (username) => {

    return (

        <div className="title">

            <Avatar src="https://static.memrise.com/accounts/img/placeholders/empty-avatar-3.png" size={64} icon={<UserOutlined />} />


            <Title level={3}>{username}</Title>
        </div>
    );
}

function NoteBookInfo(props) {

    const { numberNoteBook, numberWord } = props.noteBookInfo;
    const { username } = props;

    return (
        <div className="site-card-border-less-wrapper">
            <Card title={title(username)} bordered={false} style={{ width: '100%' }}>


                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Alert message={message(numberNoteBook, "Danh mục ghi chú")} type="info" />
                    </Col>

                    <Col className="gutter-row" span={12}>
                        <Alert message={message(numberWord, "Từ đã ghi chú")} type="info" />
                    </Col>
                </Row>

                <Row style={{ marginTop: '10px' }}>
                    <Col offset={4} span={16} > <Button type="primary" size="large" >Thêm danh mục ghi chú</Button></Col>
                </Row>

            </Card>
        </div>
    );
}

export default NoteBookInfo;