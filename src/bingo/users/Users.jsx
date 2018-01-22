import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    const userLinks = users.map(user => (
        <Link to={`/user/${user}`} className="user-board-link mb-2">
            {user}
        </Link>
    ));

    return (
        <div className="users">
            <h2 className="users-title pb-1 mb-3">Registered users</h2>
            {userLinks}
        </div>
    );
};

Users.propTypes = {
    users: PT.arrayOf(PT.string)
};

Users.defaultProps = {
    users: []
};

export default Users;
