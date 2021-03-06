import React from 'react'
import UserProfile from '../Components/UserProfile'
import SavedPlaylists from '../Components/SavedPlaylists'
import UpdateProfile from '../Components/UpdateProfile'
import Roasters from '../Components/Roasters'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Roasts from './Roasts'


const Dashboard = (props) => {
    let user = Object.assign({}, props.user)
    return(
        <Router>
          <div className='main'>
            <div className='username-box'>
              <img src={props.user.image} width={'120px'} height={'120px'} alt="profile-pic"className='user-pic-small' />
              <p className='username'>Hello, {props.user.name}! </p>
              <p className='logout'>Not you?  <a href='/login'onClick={props.logout}>Log out!</a></p>
            </div>
            <div className='profile-nav-box'>
              <nav>
                <Link className='profile-nav-text'to='/dashboard/savedplaylists'>Saved Playlists</Link> | {' '}
                <Link className='profile-nav-text' to='/dashboard/tasteprofile'>Taste Profile</Link> | {' '}
                <Link className='profile-nav-text'to='/dashboard/roasters'>Discover Local Roasters</Link> | {' '}
                <Link className='profile-nav-text'to='/dashboard/userprofile'>Profile</Link> | {' '}
              </nav>
              </div>
              <Route exact path='/dashboard/savedplaylists' render={()=><SavedPlaylists/>} />
              <Route exact path='/dashboard/tasteprofile' render={(props)=><Roasts user={user} {...props}/>} />
              <Route exact path='/dashboard/roasters' render={()=><Roasters location={props.user.city}/>} />
              <Route exact path='/dashboard/userprofile' render={()=><UserProfile user={props.user} />} />
              <Route exact path='/dashboard/updateprofile' render={()=><UpdateProfile user={props.user} />} />
          </div>
      </Router>
    )
}

export default Dashboard