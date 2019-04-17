import React from 'react'

const UpdateProfile = (props) => {
    return(
      <>
         <div className='main'>
        <h1>Update Profile:</h1>
        <h2>{props.user.name}</h2>
        <p>Update User Photo:</p>
             <form
                id='photo-upload'
                encType='multipart/form-data'
                method='POST'
                action='/UpdateProfile'>
                <input
                  type='hidden'
                  name='userId'
                  value={props.user ? props.user._id : ''}
                />
                <input type='file' name='myFile' />
                <input type='submit' className='btn btn-primary' />
              </form> 
        <div className='profile-form'>
            <form action='/UpdateProfile'>
              <input type='text' name='city' placeholder='City' />
              <input type='text' name='state' placeholder='State' />
              <input
                type='text'
                name='zip'
                placeholder='Zip Code'
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
          </div>
      </>
    )
}

export default UpdateProfile