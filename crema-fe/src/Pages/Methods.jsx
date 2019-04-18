import React from 'react'
import FrenchPic from '../Images/fpicon.png'
import AeroPic from '../Images/apicon.png'
import ChemexPic from '../Images/chemicon.png'
import PourPic from '../Images/poicon.png'
import French from '../Components/French'
import Aero from '../Components/Aero'
import Chem from '../Components/Chem'
import Pour from '../Components/Pour'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Methods = (props) => {
    return(
        <Router>
        <div className='main'>
            <h1>Brew Methods</h1>
            <Link to='/frenchpress'><div className='icon-box'>
                <img alt='french-press'className='method-img'src={FrenchPic}/>
                <p className='method-name'>French Press </p>
            </div>
            </Link>
            <Link to='/aeropress'><div className='icon-box'>
                <img alt='aeropress'className='method-img'src={AeroPic}/>
                <p className='method-name'>Aeropress </p>
            </div>
            </Link>
            <Link to='/chemex'><div className='icon-box'>
                <img alt='chemex'className='method-img'src={ChemexPic}/>
                <p className='method-name'>Chemex </p>
            </div>
            </Link>
            <Link to='/pourover'><div className='icon-box'>
                <img alt='pourover'className='method-img'src={PourPic}/>
                <p className='method-name'>Pour-Over </p>
            </div>
            </Link>
        <Route exact path='/frenchpress' render={()=><French/>} />
        <Route exact path='/aeropress' render={()=><Aero />} />
        <Route exact path='/chemex' render={()=><Chem />} />
        <Route exact path='/pourover' render={()=><Pour/>} />
        </div>
        </Router>
    )
}

export default Methods