import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, Divider } from 'antd';

TabResult.propTypes = {

    tabData: PropTypes.object
};

TabResult.defaultProps = {
    tabData: {}
};

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function TabResult(props) {
    return (
        <div className="tab-result">
            <Divider orientation="left">Default Size</Divider>
            <List
                header={<div>Danh từ</div>}

                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />


        </div >
    );
}

export default TabResult;