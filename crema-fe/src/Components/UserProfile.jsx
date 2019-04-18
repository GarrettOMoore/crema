import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        axios.get('/profile').then( res => {
          this.setState({
            roast: res.data.roast,
            origin: res.data.origin,
            method: res.data.method,
            artistone: res.data.artistone,
            artisttwo: res.data.artisttwo,
            artistthree: res.data.artistthree,
            genre: res.data.genre
          })
        })
      }

    render(){

    return(
        <>
        <img className='user-pic-main'src={this.props.user.image} width={'200px'}height={'200px'}alt='user' />
        <p>{this.props.user.name}</p>
        <p>{this.props.user.city}, {this.props.user.state}</p>
        <h4>Interests:</h4>
        <p>Roast: {this.state.roast} </p>
            <p>Origin: {this.state.origin} </p>
            <p>Method: {this.state.method} </p>
            <p>Favorite Artists:</p>
            <p>{this.state.artistone} </p>
            <p>{this.state.artisttwo} </p>
            <p>{this.state.artistthree} </p>
            <p>Genre: {this.state.genre} </p>
        <div className='main'>
            <Link className='profile-nav-text'to='/updateprofile'>Update Profile</Link>
            <Route path='/updateprofile' render={()=><UpdateProfile user={this.props.user} />} />
        </div>
        </>
    )
  }
}

export default UserProfile