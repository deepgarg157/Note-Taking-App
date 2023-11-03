import CreateNotesGroup from "./components/CreateNotesGroup"
import PocketNotes from "./components/PocketNotes"
import "./index.css"
import NotesContext from "./Context/NotesContext";
import { useEffect, useState } from "react";
import NotesGroup from "./components/NotesGroup";


function App() {
  let initialArray=[]
  if(localStorage.getItem('data')){
    initialArray=JSON.parse(localStorage.getItem('data'))
  }
  const [data, setData] = useState(initialArray)
  
  const [noteGroup, setNoteGroup] = useState('')
  console.log(data)
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data));
  },[data])
  
  return (
    <NotesContext.Provider value={[data, setData, noteGroup, setNoteGroup]} >
      <div className="App">
        <CreateNotesGroup />
        {!noteGroup ? <PocketNotes /> : <NotesGroup />}
      </div>
    </NotesContext.Provider>
  );
}

export default App;
