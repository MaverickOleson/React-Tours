import './styles/error.css';
import React from 'react'

const Error = () => {
    return (
        <div className='error'>
            <h1>Error Loading<br/>Page</h1>
            <button onClick={()=>window.location.reload(false)}><h1>Try again?</h1></button>
        </div>
    )
}

export default Error
