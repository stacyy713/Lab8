import React from 'react';
import UserItem from "./UserItem";
import PropTypes from "prop-types";

function UserList (props) {
    return(
        <ul>
            {props.array.map((usr, index) => {
                    return <UserItem usr={usr} key={usr.email} index={index} />
                }
            )}
        </ul>
    )
};

UserList.propTypes = {
    array: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default UserList;
