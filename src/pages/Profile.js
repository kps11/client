import React from 'react';
import { useSelector } from 'react-redux';
import "../style/body.css"


function Profile(props) {
    const userDetails = useSelector( state =>  state.auth.userDetails)
    return (
        <div className='profileContainer'>
            <div className='profileItem'>User Name: {userDetails.name}</div>
            <div className='profileItem'>Email: {userDetails.email}</div>
            <div className='profileItem'>Role: {userDetails.role}</div>
            <div className='profileItem'>Gender: {userDetails.gender}</div>
        </div>
    );
}

export default Profile;