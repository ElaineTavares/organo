import React from 'react'
import './Banner.css'
import banner from '../assets/banner_pets.jpeg'

export default function Banner() {
  return (
    <header>
        <img src={banner} alt="cachorrinhos" />
        <div className="texto_header">
            <h1>Bichinhos fofinhos</h1>
            <h2>organizados em um só lugar!</h2>
        </div>
        
    </header>
  )
}
