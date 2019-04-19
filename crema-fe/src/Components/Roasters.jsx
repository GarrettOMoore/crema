import React, {Component} from 'react'
import axios from 'axios'

class Roasters extends Component {
    constructor(props){
        super(props)
        this.state={
            roasters: {}
        }
    }

    componentDidMount(){
    let currentLocation = this.props.location;
        axios.post('/businesses', {
          location: currentLocation,
       }).then((res)=> {
         this.setState({
           roasters: res.data.businesses
         })

      }).catch((err)=> {
       })
    }
    
    render() {
        let allRoasters = Array.from(this.state.roasters)
        let businesses = allRoasters.map((business)=> {
            return (
                <>
                <img alt='business'className='business-pic'src={business.image_url}width={'100px'}height={'100px'}></img>
                <p>{business.name}</p>
                <p className='business-info'>{business.location.address1}</p>
                <p className='business-info'>Phone: {business.phone}</p>
                <p className='business-info'>{business.location.city},{business.location.state}</p>
                <p className='business-info'>Rating: {business.rating}</p>
                </>
            )
        })
    

    return(
        <div className='sub-main'>
            <h1 className='header'>Roasters in: {this.props.location}</h1>
           {businesses}
        </div>
        )
    }
}

export default Roasters