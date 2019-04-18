import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import UpdateProfile from './UpdateProfile'

const UserProfile = (props) => {
    return(
        <>
        <img className='user-pic-main'src={props.user.image} width={'200px'}height={'200px'}alt='user' />
        <p>{props.user.name}</p>
        <p>{props.user.city}, {props.user.state}</p>
        <h4>Saved Flavor Preferences</h4>
        <h4>Favorite Local Roasteries</h4>
        <div className='main'>
            <Link className='profile-nav-text'to='/updateprofile'>Update Profile</Link>
            <Route path='/updateprofile' render={()=><UpdateProfile user={props.user} />} />
        </div>
        </>
    )
}

export default UserProfile