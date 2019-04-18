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
            <option className='select-option'value="dark">Dark</option>
            <option className='select-option'value="medium">Medium</option>
            <option className='select-option'value="light">Light</option>
          </select>
            <p className='form-lbl'>Origin:</p>
          <select className='origin'onChange={this.handleChange}className='select'>
            <option className='select-option'value="africa">African</option>
            <option className='select-option'value="southamerica">South & Central American</option>
            <option className='select-option'value="indonesian">Indonesian</option>
          </select>
          <p className='form-lbl'>Method:</p>
          <select className='method'onChange={this.handleChange}className='select'>
            <option className='select-option'value="frenchpress">French Press</option>
            <option className='select-option'value="chemex">Chemex</option>
            <option className='select-option'value="pourover">Pour Over</option>
            <option className='select-option'value="aeropress">Aeropress</option>
          </select>
          <p className='form-lbl'>Three Favorite Artists:</p>
            <input className='select-option'type='text' name='artistone'onChange={this.handleChange}placeholder="Bert Jansch"/>
            <input className='select-option'type='text' name='artisttwo'onChange={this.handleChange}placeholder="Alice Coltrane"/>
            <input className='select-option'type='text' name='artistthree'onChange={this.handleChange}placeholder="Ryuichi Sakamoto"/>
          <p className='form-lbl'>Genre:</p>
          <select className='genre'onChange={this.handleChange}className='select'>
            <option className='select-option'value="jazz">Jazz</option>
            <option className='select-option'value="rock">Rock & Roll</option>
            <option className='select-option'value="folk">Folk</option>
            <option className='select-option'value="blues">Blues</option>
            <option className='select-option'value="hiphop">Hip Hop</option>
            <option className='select-option'value="electronic">Electronic</option>
            <option className='select-option'value="experimental">Experimental</option>
            <option className='select-option'value="classical">Classical</option>
            <option className='select-option'value="ambient">Ambient</option>
            <option className='select-option'value="noise">Noise</option>
            <option className='select-option'value="Metal">Metal</option>
          </select>
          <button className='submit-btn'type='submit'>Submit</button>
        </form>
        </div>
    )
  }
}

export default Roasts