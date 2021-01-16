import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import NotFound from 'components/NotFound';
import MainPage from './pages/MainPage';


Login.propTypes = {

};

function Login(props) {

    const match = useRouteMatch();



    return (
        <div>
            <Switch>

                <Route exact path={match.url} component={MainPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Login;