import React from 'react'
import './FlamesAnimation.css'
import imagen from '../image/image001.png'

export default function(){
    return (
        <div className="container">
            <div className="scene">
                 <div className="rocket">
                    <img src={imagen}></img>
                </div>
            </div>
        </div>
    )
}