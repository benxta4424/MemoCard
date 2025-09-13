import { useState } from "react";
import FetchApi from "./Fetch";
import Scoreboard from "./Scoreboard";

export default function PreparePictures() {
    // we get the images first
    const idArray = []
    for(let i = 10; i < 22; i++) {
        idArray.push(i)
    }
    

    // we use that array to create the current state
    const [ids, setIds] = useState(idArray)
    const [grabChoice, setGrabChoice] = useState(0)
    

    
    const shuffle = () => {
        const new_arr = [...ids]
        for(let j = new_arr.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j+1))
            
            const aux = new_arr[j]
            new_arr[j] = new_arr[k]
            new_arr[k] = aux
        }
        setIds(new_arr)
    } 
    
    
    // updating ids logic
    const [saveId, setSaveId] = useState([])
    const [countIds, setCountIds] = useState(0)
    
    const catchId = (desiredId) => {
        if(saveId.includes(desiredId)) {
            setCountIds(0)
            setSaveId([])
        }
        else {
            setCountIds(prev => prev + 1)
            setSaveId(prev => [...prev, desiredId])
        }
    }
 

    return (
        <>  
            <div className="scoreboard">
                <Scoreboard counter={countIds} />
            </div>

            <div className="picturesBox">
                {ids.map((id) => 
                    <div 
                        className="actualPicture" 
                        key={id}
                        onClickCapture={() => catchId(id)}
                        onClick={shuffle}
                        
                        > <FetchApi id={id} /> </div>
                )}

            </div>

        </>
    )


}