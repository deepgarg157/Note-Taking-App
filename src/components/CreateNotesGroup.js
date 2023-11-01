import CreateNewNoteGroup from "../components/CreateNewNoteGroup"

const CreateNotesGroup = () => {
    return (
        <div className="create-note-group">

            <p>Pocket Notes</p>
            <div>
                <button className="note-button">+ Create Notes group</button>
            </div>

            <div>
                <CreateNewNoteGroup />
            </div>

        </div>
    )
}

export default CreateNotesGroup;