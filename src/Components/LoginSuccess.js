import React from 'react'
import './Success.css'

export default function LoginSuccess(props) {
    return (
        <div className="success"  >
            <div className="success-body animate__animated animate__fadeInDownBig animate__delay-0.2s" style={{display:props.show}}>
            <span>Вы в системе</span><i className="fas fa-check-circle"></i>
            
            </div>
           
        </div>
    )
}
