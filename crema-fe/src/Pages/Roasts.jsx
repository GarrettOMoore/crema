import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import axios from 'axios'

class Roasts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.user._id,
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
            id: this.state.id,
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
            console.log("IN PROMISE")
            this.props.history.push('/')
        })
      }

    render() {
    return(
        <div className='main'>
        <h2 className='sub-header'>Build Your Flavor + Music Profile:</h2>
        <form onSubmit={this.handleSubmit}>
            <p className='form-lbl'>Roast:</p>
          <select name='roast'onChange={this.handleChange}className='select'>
            <option className='select-option'value="Dark">Dark</option>
            <option className='select-option'value="Medium">Medium</option>
            <option className='select-option'value="Light">Light</option>
          </select>
            <p className='form-lbl'>Origin:</p>
          <select onChange={this.handleChange}className='select' name='origin'>
            <option className='select-option'value="Africa">African</option>
            <option className='select-option'value="South America">South & Central American</option>
            <option className='select-option'value="Indonesian">Indonesian</option>
          </select>
          <p className='form-lbl'>Method:</p>
          <select onChange={this.handleChange}className='select' name='method'>
            <option className='select-option'value="French Press">French Press</option>
            <option className='select-option'value="Chemex">Chemex</option>
            <option className='select-option'value="Pourover">Pour Over</option>
            <option className='select-option'value="Aeropress">Aeropress</option>
          </select>
          <p className='form-lbl'>Three Favorite Artists:</p>
            <input className='select-option'type='text' name='artistone'onChange={this.handleChange}placeholder="ex. Bert Jansch"/>
            <input className='select-option'type='text' name='artisttwo'onChange={this.handleChange}placeholder="ex. Alice Coltrane"/>
            <input className='select-option'type='text' name='artistthree'onChange={this.handleChange}placeholder="ex. Ryuichi Sakamoto"/>
          <p className='form-lbl'>Genre:</p>
          <select onChange={this.handleChange}className='select'name='genre'>
            <option className='select-option'value="Jazz">Jazz</option>
            <option className='select-option'value="Rock">Rock & Roll</option>
            <option className='select-option'value="Folk">Folk</option>
            <option className='select-option'value="Blues">Blues</option>
            <option className='select-option'value="Hip Hop">Hip Hop</option>
            <option className='select-option'value="Electronic">Electronic</option>
            <option className='select-option'value="Experimental">Experimental</option>
            <option className='select-option'value="Classical">Classical</option>
            <option className='select-option'value="Ambient">Ambient</option>
            <option className='select-option'value="Noise">Noise</option>
            <option className='select-option'value="Metal">Metal</option>
          </select>
          <button className='submit-btn'type='submit'>Submit</button>
        </form>
        </div>
    )
  }
}

export default Roasts