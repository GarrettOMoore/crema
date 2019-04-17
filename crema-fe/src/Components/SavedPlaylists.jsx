import React from 'react'

const SavedPlaylists = (props) => {
    return(
        <div className='main'>
            <h1>Saved Playlists</h1>
            <iframe title="spotify-player-about"src="https://open.spotify.com/embed/user/robertgarrettmoore/playlist/0Y1gWWwsTXNnso9CMlErOy" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
            <iframe title="spotify-player-ethio"src="https://open.spotify.com/embed/user/robertgarrettmoore/playlist/1vg9t5e0a7rEQuLEs6nprO" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default SavedPlaylists