import PreviewBgImage from "../assets/imageRemovebgPpreview1.png"
import look from "../assets/Vector.png"
import { useState } from "react"
import CreateNewNoteGroup from "../components/CreateNewNoteGroup"

const PocketNotes = () => {

    return (
        <div className="pocket-notes">
            <div className="notes">
                <img src={PreviewBgImage}></img>
            </div>
            <div className="notes-h1">
                <h1>Pocket Notes</h1>
            </div>
            <div className="notes-p">
                <p>Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className="footer">
                <img src={look}></img>
                <p>end-to-end encrypted</p>
            </div>

        </div>
    )
}

export default PocketNotes;