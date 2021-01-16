import React from 'react';
import PropTypes from 'prop-types';

import './VocabularyTable.scss';

import { Table, Tag, Space, Button } from 'antd';

VocabularyTable.propTypes = {

};


const columns = [
    {

        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',

    },
    {
        title: 'Tên từ vựng',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
        width: 20,
        render: text => <b>{text}</b>,
    },
    {
        title: 'Nghĩa',
        dataIndex: 'value',
        key: 'value',
        align: 'center',
        colSpan: 10,
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary" >Sửa</Button>
                <Button type="primary" danger>Xóa</Button>
            </Space>
        ),
    },
];






function VocabularyTable(props) {

    const { words } = props;
    console.log('words: ', words);

    const wordsTempt = words.map((item, index) => {

        return {
            ...item,
            stt: index + 1
        }
    })

    return (
        <div className="vocabulary-table">


            <Table showHeader={false} columns={columns} dataSource={wordsTempt} />
        </div>
    );
}

export default VocabularyTable;