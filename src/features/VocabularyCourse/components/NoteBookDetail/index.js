import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Progress, Tag } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import './NoteBookDetail.scss';

const { Meta } = Card;

class NoteBookDetail extends React.Component {
    render() {
        const { notebook } = this.props;

        const { vocabularyNoteBookName, slug, description, createdAt, numberWordLearned, numberWordNoted, percent, completed } = notebook;


        return (
            <div className="notebook-detail">

                <Card
                    style={{ width: '100%' }}
                    actions={[
                        <div><SettingOutlined key="setting" /> Ôn từ vựng  </div>,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://static.memrise.com/garden/img/placeholders/course-3.png" />
                        }
                        title={

                            <h2>  <Link to={`/GhiChuTuVung/${slug}`} >
                                {vocabularyNoteBookName}  </Link>    </h2>




                        }
                        description={
                            <div>
                                <p>Mô tả: {description}  </p>
                                <h3> Ngày tạo:  {createdAt} </h3>
                                <h3> Số từ đã ôn lại/ghi chú: {numberWordLearned}/{numberWordNoted} từ</h3>
                                <Progress percent={percent} strokeWidth={15} />
                                {
                                    completed ? <Tag color="success">Hoàn thành</Tag> : <Tag color="#f50">Chưa hoàn thành</Tag>
                                }
                            </div>
                        }

                    />


                </Card>

            </div>
        );
    }
}

export default NoteBookDetail;