import React from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class TabTreeResult extends React.Component {



    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    showData(data) {

        const { loaiTus } = data;
        let result = null;
        if (loaiTus) {
            result = loaiTus.map((loaiTu, index) => {

                return {
                    title: loaiTu.tenLoaiTu,
                    key: index + '',

                    children: loaiTu.nghias.map((nghia, index1) => {
                        return {
                            title: nghia.tenNghia,
                            key: index + '' + index1,
                            children: this.convertObjectToArray(nghia.viDus)
                        }
                    })

                };

            });
        }

        return result;


    }

    convertObjectToArray(object) {
        const result = [];
        for (const x in object) {
            result.push({ title: `${x} (${object[x]})`, key: x + object[x] });
        }

        return result;
    }

    render() {
        const { data } = this.props;

        const result = data ? this.showData(data) : [];


        return (
            <Tree

                switcherIcon={<DownOutlined />}

                defaultExpandAll
                onSelect={this.onSelect}
                treeData={
                    result
                }
            />
        );
    }
}

export default TabTreeResult;