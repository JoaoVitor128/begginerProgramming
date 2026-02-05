import './List.css'
import { useParams, Link } from 'react-router-dom'
import classDb from '../db/class'

const ClassList = () => {

    return (
        <div className='classList'>
            <h1>Aulas</h1>
            <h2>Aprenda <span>Java Script</span> gratuitamente agora mesmo</h2>

            <h3><Link to={"https://drive.google.com/drive/folders/1rHe7dAMbn3WcSJBfowYSrsr872p0pZlD"} className='driveLink'> Acesse as aulas no Google Drive</Link></h3>

            <div className="list">
                {classDb.map((mod) => (
                    <div key={mod.id} className="classItem">
                        <h1>{mod[0]}</h1>
                        <div className="modClass">
                            {mod.slice(1).map((lesson, i) => (
                                <Link className={`${lesson.href === "" ? "unavailable" : ""}`} key={i} to={`/class/${classDb.indexOf(mod)}/${i}`} rel="noopener noreferrer">
                                    <span>Aula {i + 1}</span>
                                    {lesson.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClassList