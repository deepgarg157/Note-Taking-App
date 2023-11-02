import { useContext, useState } from "react";
import NotesContext from "../Context/NotesContext";

const CreateNewNoteGroup = ({setCreateNewGroup}) => {

    const [inputText, setInputText] = useState('')
    const [color, setColor] = useState('purple')
    const [data,setData]= useContext(NotesContext)

    const handleClick=()=>{
        setData([...data,{"name":inputText, 'bgColor' : color}])
        setCreateNewGroup(false)
    }

    const handleColor =(e)=>{
        setColor(e.target.className)
    }


    
    return (
        <div className="new-notes-group">
            <p>Create New Notes group</p>
            <div className="note-input">
                <label>Group Name
                    <input type="text" placeholder="Enter your group name...." onChange={(e)=> setInputText(e.target.value)}></input>
                </label>
            </div>
            <div className="note-color">
                <h2>Choose colour</h2>
                <h1 className="purple" onClick={handleColor}></h1>
                <h1 className="pink" onClick={handleColor}></h1>
                <h1 className="lightblue" onClick={handleColor}></h1>
                <h1 className="brown" onClick={handleColor}></h1>
                <h1 className="blue" onClick={handleColor}></h1>
                <h1 className="darkmagenta" onClick={handleColor}></h1>
            </div>

            <div >
                <button className="notes-button" onClick={handleClick}>Create</button>
            </div>

        </div>
    )
}

export default CreateNewNoteGroup;