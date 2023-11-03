import { Link } from "react-router-dom"
import NotesContext from "../Context/NotesContext"
import CreateNewNoteGroup from "../components/CreateNewNoteGroup"
import { useContext, useState } from "react"

const CreateNotesGroup = () => {

    const [data, , , setNoteGroup] = useContext(NotesContext)
    const [createNewGroup, setCreateNewGroup] = useState(false)

    const handleCreateNotesClick = () => {
        setCreateNewGroup(!createNewGroup)
    }

    const handleNoteGroup = (groupName) => {
        setNoteGroup(groupName)
    }


    return (
        <div className="create-note-group">

            <div >
                <p>Pocket Notes</p>
                <div style={{margin:'15px'}}>
                    <button className="note-button" onClick={handleCreateNotesClick}>+ Create Notes group</button>
                </div>
            </div>

            <div style={{ overflowY: 'scroll', height:'75vh',}}>
                {data?.map((item, index) =>
                    <div className="group-item" key={index} >
                        <h3 style={{ backgroundColor: `${item.bgColor}`, borderRadius: '50%', width: 'auto', padding: '10px', color: 'white' }}>{item.name[0].toUpperCase() + "" + item.name[item.name.length - 1].toUpperCase()}</h3>
                        <h3 style={{ width: '10vw', cursor: "pointer" }} onClick={() => handleNoteGroup(item.name)}>{item.name}</h3>
                    </div>)}
            </div>


            <div>
                {createNewGroup ? <CreateNewNoteGroup setCreateNewGroup={setCreateNewGroup} /> : ""}
            </div>

        </div>
    )
}

export default CreateNotesGroup;