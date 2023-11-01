const CreateNewNoteGroup = () => {
    return (
        <div className="new-notes-group">
            <p>Create New Notes group</p>
            <div className="note-input">
                <label>Group Name
                    <input type="text" placeholder="Enter your group name...."></input>
                </label>
            </div>
            <div className="note-color">
                <h2>Choose colour</h2>
                <h1 className="purple"></h1>
                <h1 className="pink"></h1>
                <h1 className="light-blue"></h1>
                <h1 className="brown"></h1>
                <h1 className="blue"></h1>
                <h1 className="dark-purple"></h1>
            </div>

            <div >
                <button className="notes-button">Create</button>
            </div>

        </div>
    )
}

export default CreateNewNoteGroup;