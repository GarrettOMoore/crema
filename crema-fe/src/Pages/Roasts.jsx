import React, {Component} from 'react'
import axios from 'axios'

class Roasts extends Component {
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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.stopPropagation()
        e.preventDefault()
        console.log("IN SUBMIT")
        axios.post('/profile', {
            roast: this.state.roast,
            origin: this.state.origin,
            method: this.state.method,
            artistone: this.state.artistone,
            artisttwo: this.state.artisttwo,
            artistthree: this.state.artistthree,
            genre: this.state.genre
        }).then( res => {
            this.setState({
                roast: '',
                origin: '',
                method: '',
                artistone: '',
                artisttwo: '',
                artistthree: '',
                genre: ''
            })
          if (res.data.type === 'error') {
            console.log('Error', res.data.message)
          } else {
              console.log('Success')
          }
        })
      }

    render() {
    return(
        <div className='main'>
        <h2 className='header'>Build Your Flavor + Music Profile:</h2>
        <form onSubmit={this.handleSubmit}>
            <p className='form-lbl'>Roast:</p>
          <select name='roast'onChange={this.handleChange}className='select'>
            <option value="dark">Dark</option>
            <option value="medium">Medium</option>
            <option value="light">Light</option>
          </select>
            <p className='form-lbl'>Origin:</p>
          <select name='origin'onChange={this.handleChange}className='select'>
            <option value="africa">African</option>
            <option value="southamerica">South & Central American</option>
            <option value="indonesian">Indonesian</option>
          </select>
          <p className='form-lbl'>Method:</p>
          <select name='method'onChange={this.handleChange}className='select'>
            <option value="frenchpress">French Press</option>
            <option value="chemex">Chemex</option>
            <option value="pourover">Pour Over</option>
            <option value="aeropress">Aeropress</option>
          </select>
          <p className='form-lbl'>Three Favorite Artists:</p>
            <input type='text' name='artistone'onChange={this.handleChange}placeholder="Bert Jansch"/>
            <input type='text' name='artisttwo'onChange={this.handleChange}placeholder="Alice Coltrane"/>
            <input type='text' name='artistthree'onChange={this.handleChange}placeholder="Ryuichi Sakamoto"/>
          <p className='form-lbl'>Genre:</p>
          <select name='genre'onChange={this.handleChange}className='select'>
            <option value="jazz">Jazz</option>
            <option value="rock">Rock & Roll</option>
            <option value="folk">Folk</option>
            <option value="blues">Blues</option>
            <option value="hiphop">Hip Hop</option>
            <option value="electronic">Electronic</option>
            <option value="experimental">Experimental</option>
            <option value="classical">Classical</option>
            <option value="ambient">Ambient</option>
            <option value="noise">Noise</option>
            <option value="Metal">Metal</option>
          </select>
          <button className='submit-btn'type='submit'>Submit</button>
        </form>
        </div>
    )
  }
}

export default Roasts