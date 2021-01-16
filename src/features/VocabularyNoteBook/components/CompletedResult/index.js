import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Result } from 'antd';
import { Link, Redirect, useRouteMatch } from 'react-router-dom';

CompletedResult.propTypes = {

};

function CompletedResult(props) {

    const match = useRouteMatch();

    const slug = match.params.slug;

    return (
        <div>

            <Result
                status="success"
                title="Bạn đã hoàn thành hết từ"
                // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Link to={`/GhiChuTuVung/${slug}`}> <Button type="primary" key="console">
                        Trở về
                </Button></Link>

                ]}
            />
        </div>
    );
}

export default CompletedResult;