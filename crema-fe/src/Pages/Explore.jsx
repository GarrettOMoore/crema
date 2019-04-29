import React, {Component} from 'react'
import ShowData from '../Pages/ShowData'

class Explore extends Component {
    constructor(props) {
    super(props)
    this.state = {
        country: null,
        2014: null,
        2015: null,
        2016: null,
        2017: null,
        2018: null,
    }
}

    handleClick(country){
       this.setState({
           country: country.country,
           2014: country['2014'],
           2015: country['2015'],
           2016: country['2016'],
           2017: country['2017'],
           2018: country['2018']
       })
    }

    handleBackBtn(){
        this.setState({
            country: null,
            2014: null,
            2015: null,
            2016: null,
            2017: null,
            2018: null,
        })
    }

    render() {
    let data;
    let name;
    if ( this.state['2014'] === null ) {
        name = null;
        data = this.props.data.map((country)=> {
            return (
            	<p onClick={()=> this.handleClick(country)} className='country-name'>{country.country}</p>
            )
        })
    } else {
        name = this.state.country
        data = (
            <>
            <ShowData 
            	className='data-vis'
            	one={this.state['2014']}
            	two={this.state['2015']}
            	three={this.state['2016']}
            	four={this.state['2017']}
            	five={this.state['2018']}
            />

            <p>1 === 1,000 60kg Bags</p>

            <p onClick={()=> this.handleBackBtn()} className='back-btn'>Back to Countries</p>
            </>
        )
    }

    return(
        <div className='main'>
            <h1 className='header'>Explore</h1>
            <h2 className='sub-header'>Coffee Production by Country: {name}</h2>
            {data}
        </div>
    )
    }
}

export default Explore