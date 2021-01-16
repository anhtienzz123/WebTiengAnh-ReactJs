import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, Col, Divider, Dropdown, Menu, Progress, Row, Space } from 'antd';

import './CardOptionDetail.scss';
import { DownOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';

CardOptionDetail.propTypes = {

};

const title = (data) => {


    return (
        <div>
            <Row>
                <Col span={12}>
                    {data.numberWordLearned}/{data.numberWordNoted} từ đã ghi vào trí nhớ dài hạn
                </Col>

                <Col span={6} offset={6}>
                    12 từ bỏ qua
                </Col>
            </Row>

            <Progress strokeWidth={18} percent={data.percent} status="active" />
        </div>

    );
}

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Xem nháp
            </a>
        </Menu.Item>

        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Xóa lại từ đầu
            </a>
        </Menu.Item>

        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Chọn từ bỏ qua
            </a>
        </Menu.Item>

    </Menu>
);

function CardOptionDetail(props) {

    const { data } = props;

    const match = useRouteMatch();

    const slug = match.params.slug;


    return (
        <Card title={title(data)} bordered={true}>
            <Row>
                <Col span={4}>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>Tùy chọn  <DownOutlined /> </Button>

                    </Dropdown>
                </Col>

                <Col span={16} offset={4}>
                    <Space size="middle">
                        <Button style={{ color: 'red' }}>Thêm từ mới</Button>
                        <Button style={{ color: 'green' }}>Học từ</Button>
                        <Button type="primary" >Ôn từ vựng trắc nghiệm</Button>
                        <Link to={`/GhiChuTuVung/${slug}/OnTapDienTu`} > <Button type="primary"  >Ôn từ vựng điền từ</Button>  </Link>
                    </Space>
                </Col>


            </Row>
        </Card>
    );
}

export default CardOptionDetail;