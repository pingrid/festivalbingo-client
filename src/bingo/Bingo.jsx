import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';
import UsersContainer from './users/UsersContainer';

const Bingo = ({ history }) => {
    return (
        <div className="bingo">
            <h1 className="center-text fancy-title text-sunglow bingo-title mt-7 mb-7">
                FESTIVALBINGO
            </h1>

            <UsersContainer />
            <button className="bingo-button" onClick={() => history.push('/register')}>
                Register
            </button>
        </div>
    );
};

Bingo.propTypes = {
    history: PT.object.isRequired
};

export default withRouter(Bingo);
