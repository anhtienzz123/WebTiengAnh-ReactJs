import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

ReviewWordChoicePage.propTypes = {

};

function ReviewWordChoicePage(props) {

    const match = useRouteMatch();
    console.log(match);

    return (
        <div>
            <h1>Review Word Choice Page</h1>
        </div>
    );
}

export default ReviewWordChoicePage;