import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import './header.scss';

HeaderNoteBookDetail.propTypes = {

};

const { Paragraph } = Typography;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
      </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
        <Button
            style={{
                border: 'none',
                padding: 0,
            }}
        >
            <EllipsisOutlined
                style={{
                    fontSize: 20,
                    verticalAlign: 'top',
                }}
            />
        </Button>
    </Dropdown>
);

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Trang chủ',
    },
    {
        path: 'first',
        breadcrumbName: 'Ghi chú từ vựng',
    },
    {
        path: 'second',
        breadcrumbName: 'Chi tiết',
    },
];

const IconLink = ({ src, text }) => (
    <a className="example-link">
        <img className="example-link-icon" src={src} alt={text} />
        {text}
    </a>
);

const content = (content) => (
    <>
        <Paragraph>
            {
                content
            }
        </Paragraph>

        <div>
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                text="Quick Start"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                text=" Product Info"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                text="Product Doc"
            />
        </div>
    </>
);

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

function HeaderNoteBookDetail(props) {

    const { data } = props;


    return (
        <div id="components-page-header-demo-content">
            <PageHeader
                title={data.vocabularyCourseName}
                className="site-page-header"

                tags={<Tag color="blue">{data.createdAt}</Tag>}

                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                breadcrumb={{ routes }}
            >
                <Content
                    extraContent={
                        <img
                            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                            alt="content"
                            width="100%"
                        />
                    }
                >
                    {content(data.description)}
                </Content>
            </PageHeader>
        </div>
    );
}

export default HeaderNoteBookDetail;