import React from 'react'

import classDb from '../db/class'
import './ClassPage.css'
import { useParams } from 'react-router-dom'

const ClassPage = () => {
  const { mod, id } = useParams()

  return (
    <div className='classPage'>
     {classDb[mod][id].href? <iframe src={classDb[mod][id].href} frameborder="0" className='video'></iframe> : <div className='noVideo'>Vídeo ainda não disponível</div>}
      {
        <div className="info">
            <h1> Módulo {parseInt(mod) + 1} - {classDb[mod][0].modTitle}</h1>
            <h2>Aula {parseInt(id)} - {classDb[mod][id].title}</h2>
        </div>
      }

    </div>
  )
}

export default ClassPage