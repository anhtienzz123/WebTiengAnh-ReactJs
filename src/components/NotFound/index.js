import React from 'react';


import { Result, Button } from 'antd';

function NotFound(props) {
    console.log('render not fount');
    return (
        <div className="not-found">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    );
}

export default NotFound;