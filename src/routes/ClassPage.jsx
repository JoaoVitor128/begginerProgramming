
import { useParams } from 'react-router-dom'
import classDb from '../db/class'
import './ClassPage.css'

const ClassPage = () => {
  const { mod, id } = useParams()

  const handleClass = (type) => {
    switch (type) {
      case "PREV":
        if (id == 1) {
          if (mod > 0) {
            window.open(`/class/${parseInt(mod) - 1}/${classDb[parseInt(mod) - 1].length - 1}`)
          }
        } else {
          window.open(`/class/${mod}/${parseInt(id) - 1}`)
        }
    break
       

      case "NEXT":
        if(id == classDb[mod].length - 1){
          if(mod != classDb.length - 1){
            window.open(`/class/${parseInt(mod) + 1}/1`, "_self")
          }
        }else{
          window.open(`/class/${mod}/${parseInt(id) + 1}`)
        }
      break
        
    }
  }

  return (
    <div className='classPage'>
      {classDb[mod][parseInt(id)].href ? <iframe src={classDb[mod][parseInt(id)].href} frameborder="0" className='video'></iframe> : <div className='noVideo'>Vídeo ainda não disponível</div>}
      {
        <div className="info">
          <h2> Módulo {parseInt(mod) + 1} - {classDb[mod][0]}</h2>
          <div className="changeClass">
            <h1 className='prev' onClick={() => handleClass("PREV")}>&lt;</h1>
            <h1>Aula {parseInt(id)} - {classDb[mod][id].title}</h1>
            <h1 className='next' onClick={() => handleClass("NEXT")}>&gt;</h1>
          </div>
        </div>
      }

    </div>
  )
}

export default ClassPage