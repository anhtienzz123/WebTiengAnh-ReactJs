import React from 'react';
import PropTypes from 'prop-types';

import MainPage from './pages/MainPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';
import VocabularyNoteBookDetailPage from './pages/VocabularyNoteBookDetailPage';
import ReviewWordChoicePage from './pages/ReviewWordChoicePage';
import ReviewWordFillPage from './pages/ReviewWordFillPage';


VocabularyNoteBook.propTypes = {

};

function VocabularyNoteBook(props) {

    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={MainPage} />
                <Route path={`${match.url}/:slug/OnTapChonTu`} component={ReviewWordChoicePage} />
                <Route path={`${match.url}/:slug/OnTapDienTu`} component={ReviewWordFillPage} />
                <Route path={`${match.url}/:slug`} component={VocabularyNoteBookDetailPage} />


                <Route component={NotFound} />
            </Switch>
        </div >
    );
}

export default VocabularyNoteBook;