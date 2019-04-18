import React from 'react'
import LogoTwo from '../Images/blackontransparent.png'

const About = (props) => {
    return(
        <div className='main'>
        <h1>About</h1>
        <div className='text-box'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed sunt veritatis modi voluptates dolore excepturi laboriosam eum commodi. Exercitationem accusamus eum quis sequi reiciendis cupiditate sapiente enim deleniti fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat saepe, harum commodi quisquam ducimus pariatur in velit nobis, sit eaque voluptatibus dolor obcaecati, earum quam odit impedit distinctio rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt consequuntur sint repellendus. Dolore omnis quibusdam quasi minima? Quos aliquid quas voluptas et, repellat ducimus eveniet possimus iste neque vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis est laborum suscipit fuga dignissimos non ipsum doloremque nesciunt nisi nihil distinctio voluptatibus minus, rerum blanditiis unde hic quae dolor.</p>
        <img className='logo-two' alt='logo'src={LogoTwo}/>
        </div>
        <iframe title="spotify-player"src="https://open.spotify.com/embed/user/robertgarrettmoore/playlist/0Y1gWWwsTXNnso9CMlErOy" width="600" height="380" frameBorder="0" allowtransparency="true"></iframe>
        </div>
    )
}

export default About