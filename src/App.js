import CreateNotesGroup from "./components/CreateNotesGroup"
import PocketNotes from "./components/PocketNotes"
import "./index.css"
import NotesContext from "./Context/NotesContext";
import { useState } from "react";
import NotesGroup from "./components/NotesGroup";


function App() {

  const [data, setData] = useState([])
  const [noteGroup, setNoteGroup] = useState('')
  console.log(data)
  
  return (
    <NotesContext.Provider value={[data, setData, noteGroup, setNoteGroup]}>
      <div className="App">
        <CreateNotesGroup />
        {!noteGroup ? <PocketNotes /> : <NotesGroup />}
      </div>
    </NotesContext.Provider>
  );
}

export default App;
