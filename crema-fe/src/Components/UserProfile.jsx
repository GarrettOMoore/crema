import React, {Component} from 'react'
import {BrowserRouter as Route, Link} from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
import axios from 'axios'

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roast: '',
            origin: '',
            method: '',
            artistone: '',
            artisttwo: '',
            artistthree: '',
            genre: ''
        }
    }

    componentDidMount() {
        let user = Object.assign({},this.props.user)
        axios.get(`/profile/${user._id}`).then( res => {
        let data = res.data.map((interest)=>{
            this.setState({
            roast: interest.roast,
            origin: interest.origin,
            method: interest.method,
            artistone: interest.artistone,
            artisttwo: interest.artisttwo,
            artistthree: interest.artistthree,
            genre: interest.genre
        })
          })
        })
      }

    render(){

    return(
        <>
        <img className='user-pic-main'src={this.props.user.image} width={'200px'}height={'200px'}alt='user' />
        <p className='profile-text'>{this.props.user.name}</p>
        <p className='profile-text'>{this.props.user.city}, {this.props.user.state}</p>
        <p className='header'>Your Taste Profile:</p>
        <p className='data-header'>Roast: </p>
        <p className='data'>{this.state.roast}</p>
            <p className='data-header'>Origin: </p>
            <p className='data'>{this.state.origin}</p>
            <p className='data-header'>Method: </p>
            <p className='data'>{this.state.method}</p>
            <p className='data-header'>Favorite Artists:</p>
            <p className='data'>{this.state.artistone} </p>
            <p className='data'>{this.state.artisttwo} </p>
            <p className='data'>{this.state.artistthree} </p>
            <p className='data-header'>Genre: </p>
            <p className='data'>{this.state.genre}</p> 
        <div className='main'>
            <Link className='profile-nav-text'to='/dashboard/updateprofile'>Update Profile</Link>
            <Route path='/updateprofile' render={()=><UpdateProfile user={this.props.user} />} />
        </div>
        </>
    )
  }
}

export default UserProfile