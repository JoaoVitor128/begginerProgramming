import './List.css'
import {useState} from "react"
import { useParams, Link } from 'react-router-dom'
import classDb from '../db/class'

const ClassList = () => {
    const [selectedMod, setSelectedMod] = useState(0)

    console.log(classDb[selectedMod]);
    

    return (
        <div className='classList'>
            <h1>Aulas</h1>
            <h2>Aprenda <span>Java Script</span> gratuitamente agora mesmo</h2>

            <h3><Link to={"https://drive.google.com/drive/folders/1rHe7dAMbn3WcSJBfowYSrsr872p0pZlD"} className='driveLink'> Acesse as aulas no Google Drive</Link></h3>

            <div className="modSelection list">
                {classDb.map((mod)=>(
                    <button onClick={()=> setSelectedMod(classDb.indexOf(mod))}>Módulo {classDb.indexOf(mod)} - {mod[0]}</button>
                ))}
            </div>

            <div className="list">
                    <div key={selectedMod} className="classItem">
                        <h1>{classDb[selectedMod][0]}</h1>
                        <div className="modClass">
                            {classDb[selectedMod].slice(1).map((lesson, i) => (
                                <Link className={`${lesson.href === "" ? "unavailable" : ""}`} key={i} to={`/class/${classDb.indexOf(classDb[selectedMod])}/${i + 1}`} rel="noopener noreferrer">
                                    <span>Aula {i + 1}</span>
                                    {lesson.title}
                                </Link>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ClassList