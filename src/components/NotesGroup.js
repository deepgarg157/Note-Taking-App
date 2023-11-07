import CreateNotesGroup from "./CreateNotesGroup";
import next from "../assets/next.png";
import { useContext, useEffect, useState } from "react";
import NotesContext from "../Context/NotesContext";
import back from "../assets/back.png"

const NotesGroup = () => {

    const [para, setPara] = useState('')
    const [data, setData, noteGroup, , , setSideBarCreateNote] = useContext(NotesContext)
    const [arr, setArr] = useState([])
    const [color, setColor] = useState()

    const handleBack = () => {
        setSideBarCreateNote(true)
    }

    const handleEnterPara = () => {

        let narr = data.find((item) => item.name === noteGroup)
        let date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let newformat = hours >= 12 ? 'PM' : 'AM';
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];

        if (!para) {
            alert("enter the text.....")
            return;
        }

        if (narr.data) {
            narr["data"] = [...narr?.data, { dateStamp: `${date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()}`, timestamp: `${date.getHours() + ":" + date.getMinutes() + " " + newformat}`, data: para }]
        }
        else {
            narr["data"] = [{ dateStamp: `${date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()}`, timestamp: `${date.getHours() + ":" + date.getMinutes() + " " + newformat}`, data: para }]
        }
        setData([...data])
        setArr(narr.data)
        setPara('')
    }

    useEffect(() => {
        let narr = data.find((item) => item.name === noteGroup)
        setArr(narr.data)
        setColor(narr.bgColor)
    }, [noteGroup])

    return (

        <div className="notes-group" >

            <img src={back} className="back" onClick={handleBack}></img>

            <h1 style={{ display: 'flex', backgroundColor: '#E8E8E8', padding: '20px', top: '-10px', width: '100%', marginTop: 0, height: '2.5vh' }}>
                <h4 style={{ margin: '2px', fontSize: '20px' }}>{noteGroup[0].toUpperCase() + "" + noteGroup[noteGroup.length - 1].toUpperCase()}</h4>
                <h3 style={{ textAlign: 'left', margin: '2px', fontSize: '20px', paddingLeft: '20px' }}>{noteGroup}</h3>
            </h1>

            <div style={{ height: '62vh', overflowY: 'scroll' }}>

                {arr?.map((item, index) => (
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div>
                            <p>{item.dateStamp}</p>
                            <p>{item.timestamp}</p>
                        </div>
                        <div style={{ width: '53%' }}>
                            <p>{item.data}</p>
                        </div>
                    </div>
                ))}

            </div>


            <div className="text-container">

                <textarea className="text-area" type="message" placeholder="Enter your text here..........." value={para} onChange={(e) => {
                    setPara(e.target.value)
                }}></textarea>

                <img src={next} className="enter" onClick={handleEnterPara}></img>

            </div>

        </div>
    )
}

export default NotesGroup;