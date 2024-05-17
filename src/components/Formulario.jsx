import React from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'
import ListaSuspensa from './ListaSuspensa'
import Botao from './Botao'




export default function Formulario() {

  const times = [
    'Dogs',
    'Cats',
    'Rabbits',
    'Pigs',
    'Patos',
  ]

  return (
    <section className='formulario'>
        <form>
            <h2>Preencha os dados para criar o card do pet</h2>
            <CampoTexto label="Nome" placeholder="Digite o nome do pet"/>
            <CampoTexto label="Cargo" placeholder="Digite o cargo do pet" />
            <CampoTexto label="Imagem" placeholder="Digite o caminho da imagem" />
            <ListaSuspensa label="Times" itens={times}/>
            <Botao>
                Criar Card
            </Botao>
        </form>
    </section>
  )
}
