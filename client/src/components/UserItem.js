import React from 'react';
import PropTypes from 'prop-types';

function UserItem(usr, index) {
    return (
        <li>
            <span>
            <strong>{index + 1}</strong>
                &nbsp;
                {usr.firstName + ' ' + usr.lastName + ', ' + usr.group + ': ' + usr.role}
        </span>
        </li>);
}

UserItem.propTypes = {
    usr: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default UserItem;
