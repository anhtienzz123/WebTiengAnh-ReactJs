import React from 'react';
import PropTypes from 'prop-types';

import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined, AliwangwangOutlined, RedditOutlined } from '@ant-design/icons';
import TabResult from '../TabResult';
import TabTreeResult from '../TabTreeResult';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { boolean } from 'yup';

const { TabPane } = Tabs;

SearchResult.propTypes = {
    vocabulary: PropTypes.object,
};

SearchResult.defaultProps = {
    vocabulary: {}
};

const callback = key => {
    console.log(key);
}


function SearchResult(props) {

    const { vocabulary } = props;
    const { tenTuVung, phatAm, thongDung, chuyenNganh, cacTuLienQuan } = vocabulary;


    return (
        <div className="search-result">
            <Title level={3}>   <Text mark code={true}>  <Text underline>{`${tenTuVung}:`}</Text> {phatAm}</Text> </Title>

            <Tabs onChange={callback} defaultActiveKey="1" type="card">
                <TabPane
                    tab={
                        <span>
                            <AliwangwangOutlined />
                             Thông dụng
                          </span>
                    }
                    key="1"
                >

                    <TabTreeResult data={thongDung} />
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                               Chuyên ngành
                            </span>
                    }
                    key="2"
                >
                    <TabTreeResult data={chuyenNganh} />
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <RedditOutlined />
                              Từ đồng nghĩa và trái nghĩa
                            </span>
                    }
                    key="3"
                >
                    {/* <TabTreeResult data={cacTuLienQuan} /> */}
                </TabPane>
            </Tabs>
        </div>
    );
}

export default SearchResult;