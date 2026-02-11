import './List.css'
import { useState } from "react"
import { useParams, Link } from 'react-router-dom'
import classDb from '../db/class'

import { animateScroll as scroll } from 'react-scroll';

const ClassList = () => {
    const [selectedMod, setSelectedMod] = useState(null)

    console.log(classDb[selectedMod]);

    const handleMod = (mod) => {
        scroll.scrollMore(800, {
            duration: 200,
            smooth: true,
        });
        setSelectedMod(classDb.indexOf(mod))
    }

    return (
        <div className='classList' id='inicio'>
            <h1>Módulos</h1>

            <div className="modSelection">
                {classDb.map((mod) => (
                    <div className="mod" onClick={() => handleMod(mod)}>
                        <p >{mod[0]}</p>
                        <span>Módulo {classDb.indexOf(mod)}</span>
                    </div>
                ))}
            </div>

            <h1>Aulas</h1>

            <h3><Link to={"https://drive.google.com/drive/folders/1rHe7dAMbn3WcSJBfowYSrsr872p0pZlD"} className='driveLink'> Acesse as aulas no Google Drive</Link></h3>


            {selectedMod && (
                <div id="list">
                    <div key={selectedMod} className="classItem">
                        <h1>{classDb[selectedMod][0]}</h1>
                        <div className="modClass">
                            {classDb[selectedMod].slice(1).map((lesson, i) => (
                                <Link className={`${lesson.href === "" ? "unavailable" : ""}`} key={i} to={`/class/${classDb.indexOf(classDb[selectedMod])}/${i + 1}`} rel="noopener noreferrer">
                                    {lesson.title}
                                    <span>Aula {i + 1}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Link to={"#inicio"} className='back' onClick={() => scroll.scrollMore(-(100 * 100), {
                duration: 200,
                smooth: true,
            })}>&gt;</Link>
        </div>
    )
}

export default ClassList