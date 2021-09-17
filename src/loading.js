import React from 'react';
import './styles/loading.css'
import './styles/octahedron.css';

export default function Loading() {
    return (
        <div className='loading'>
            <div className='octahedron'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1></h1>
        </div>
    )
}
