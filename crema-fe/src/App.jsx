import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Explore from './Pages/Explore'
import Favorites from './Pages/Favorites'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Roasts from './Pages/Roasts'
import Logo from './Images/Free_Sample_By_Wix (2).jpeg'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      lockedResult: '',
      data: []
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  checkForLocalToken () {
    // Look in localStorage for the token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // No token.
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // Found token - Send it to be verified.
      axios.post('/auth/me/from/token', {token} )
        .then( res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              errorMessage: res.data.message
            })
          } else {
            // Put token in localStorage
            localStorage.setItem('mernToken', res.data.token)
            // Put token in State
            this.setState({
              token: res.data.token,
              user: res.data.user
            })
          }
        })
    }
  }

  componentDidMount() {
    this.checkForLocalToken();
    axios.get('/explore').then( res => {
      this.setState({
        data: res.data
      })
    })
  }

  liftTokenToState ({token, user}) {
    console.log("INSIDE LIFT TOKEN");
    console.log(token)
    console.log(user)
    this.setState({
      token: token,
      user: user
    })
  }



  logout () {
    // Remove the token from localStorage
    localStorage.removeItem('mernToken')
    // Remove user & token from state
    this.setState({
      token: '',
      user: null
    })
  }

  handleClick(e) {
    e.preventDefault()
    // axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }
    axios.get('./locked/test', config).then( res => {
      this.setState({
        lockedResult: res.data
      })
    })
  }
  render() {
    let user = Object.assign({}, this.state.user)
    let contents;
    if (user.name) {
      contents = (
      <>
      <Route exact path='/dashboard' render={()=><Dashboard user={user}logout={this.logout}/>}/>
      <Route path='/login' render={()=><Dashboard user={user}logout={this.logout}/>}/>
      </>
      )
    } else {
      contents = (
        <>
      <Route exact path ='/' render={()=><Login />}/>
      <Route exact path ='/dashboard' render={()=><Login />}/>
        </>
      )
    }
    return (
      <Router>
        <div className="App">
          <img className='logo'src={Logo} alt="logo" />
          <div className='nav-box'>
            <nav>
              <Link className='nav-text'to='/'>About</Link> | {' '}
              <Link className='nav-text'to='/explore'>Explore</Link> | {' '}
              <Link className='nav-text'to='/favorites'>Methods</Link> | {' '}
              <Link className='nav-text'to='/roasts'>Roasts</Link> | {' '}
              <Link className='nav-text'to='/dashboard'>Dashboard</Link> | {' '}
              <Link className='nav-text'to='/login'>Log In</Link> | {' '}
              <Link className='nav-text'to='/signup'>Sign Up</Link>
            </nav>
          </div>
            {contents}
            <Route exact path='/' render={()=><About/>} />
            {/* <Route exact path='/history' render={()=><History/>} /> */}
            <Route exact path='/explore' render={()=><Explore data={this.state.data}/>} />
            <Route exact path='/favorites' render={()=><Favorites/>} />
            <Route exact path='/roasts' render={()=><Roasts/>} />
            <Route exact path='/login' render={()=><Login liftToken={this.liftTokenToState}/>} />
            <Route exact path='/signup' render={()=><SignUp liftToken={this.liftTokenToState}/>} />
          </div>
      </Router>
    );
  }
}

export default App;