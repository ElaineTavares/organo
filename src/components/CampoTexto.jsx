import React from 'react'
import './CampoTexto.css'

export default function CampoTexto(props) {
    // console.log(props.label)
  return (
    <div className='campo_texto'>
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder} />
    </div>
  )
}
