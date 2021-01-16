import React from 'react';
import PropTypes from 'prop-types';

import MainPage from './pages/MainPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';


VocabularyCourse.propTypes = {

};

function VocabularyCourse(props) {

    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={MainPage} />

                <Route component={NotFound} />
            </Switch>
        </div >
    );
}

export default VocabularyCourse;