import React from 'react';
import PropTypes from 'prop-types';
import NoteBookDetail from '../NoteBookDetail';

NoteBookList.propTypes = {

};

function NoteBookList(props) {

    const { noteBooks } = props;


    const showList = notebooks => {

        return notebooks.map((item, index) =>
            (<NoteBookDetail notebook={item} key={index} />)

        )
    }

    return (
        <div>
            {
                showList(noteBooks)
            }
        </div>
    );



}

export default NoteBookList;