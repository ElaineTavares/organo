import React from 'react'
import './ListaSuspensa.css'

export default function ListaSuspensa(props) {
    console.log(props.itens)

  return (
    <div className='lista_suspensa'>
        <label>{props.label}</label>
        <select>
            {props.itens.map(item =>{
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
  )
}
