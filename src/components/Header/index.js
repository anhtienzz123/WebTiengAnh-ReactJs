import { AppstoreOutlined, SearchOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        const { username } = this.props;


        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="vocabulary-search" icon={<SearchOutlined />}>
                    <Link to="/TraTu">Tra từ</Link>
                </Menu.Item>

                <Menu.Item key="vocabulary-notebook" icon={<AppstoreOutlined />}>
                    <Link to="/GhiChuTuVung">Ghi chú từ vựng</Link>
                </Menu.Item>

                <Menu.Item key="vocabulary-course" icon={<AppstoreOutlined />}>
                    <Link to="/KhoaHocTuVung">Khóa học từ vựng</Link>
                </Menu.Item>

                <Menu.Item key="vocabulary-course" icon={<AppstoreOutlined />}>
                    <Link to="/Admin">Admin</Link>
                </Menu.Item>

                {
                    username != null ? <Menu.Item key="login" icon={<UserSwitchOutlined />}>
                        <Link to="/DangNhap">{`Tài khoản: ${username}`}</Link>
                    </Menu.Item> : <Menu.Item key="login" icon={<UserSwitchOutlined />}>
                            <Link to="/DangNhap">Đăng nhập</Link>
                        </Menu.Item>
                }




            </Menu>
        );
    }
}
export default Header;