import CreateNotesGroup from "./components/CreateNotesGroup"
import PocketNotes from "./components/PocketNotes"
import "./index.css"
import NotesContext from "./Context/NotesContext";
import { useEffect, useState } from "react";
import NotesGroup from "./components/NotesGroup";


function App() {
  let initialArray = []
  if (localStorage.getItem('data')) {
    initialArray = JSON.parse(localStorage.getItem('data'))
  }
  const [data, setData] = useState(initialArray)

  const [noteGroup, setNoteGroup] = useState('')

  const [sideBarCreateNote, setSideBarCreateNote] = useState(true)

  console.log(sideBarCreateNote)

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])

  return (
    <NotesContext.Provider value={[data, setData, noteGroup, setNoteGroup, sideBarCreateNote, setSideBarCreateNote]} >
      <div className="App">


        <div className="responsive-mobile">
          {sideBarCreateNote ?<CreateNotesGroup /> : ""}
        </div>

        <div className="responsive-pc">
          <CreateNotesGroup />
        </div>
    
        
      
        {!noteGroup ? <PocketNotes /> : <NotesGroup />}
       

      </div>
    </NotesContext.Provider>
  );
}

export default App;
