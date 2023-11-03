import { Link } from "react-router-dom"
import NotesContext from "../Context/NotesContext"
import CreateNewNoteGroup from "../components/CreateNewNoteGroup"
import { useContext, useState } from "react"

const CreateNotesGroup = () => {

    const [data,,,setNoteGroup] = useContext(NotesContext)
    const [createNewGroup, setCreateNewGroup] = useState(false)

    const handleCreateNotesClick = () => {
        setCreateNewGroup(!createNewGroup)
    }

    const handleNoteGroup = (groupName)=>{
       setNoteGroup(groupName)
    }

    return (
        <div className="create-note-group">

            <p>Pocket Notes</p>
            <div>
                <button className="note-button" onClick={handleCreateNotesClick}>+ Create Notes group</button>
            </div>

            <div className="scroll-item">
                {data?.map((item, index) =>
                    <div className="group-item" key={index} >
                        <h3 style={{ backgroundColor: `${item.bgColor}`, borderRadius: '50%', width: 'auto', padding: '10px' }}>{item.name[0].toUpperCase() + "" + item.name[item.name.length - 1].toUpperCase()}</h3>
                        <h3 style={{ width: '15vw', cursor:"pointer"}} onClick={()=>handleNoteGroup(item.name)}>{item.name}</h3>
                    </div>)}
            </div>


            <div>
                {createNewGroup ? <CreateNewNoteGroup setCreateNewGroup={setCreateNewGroup} /> : ""}

            </div>

        </div>
    )
}

export default CreateNotesGroup;