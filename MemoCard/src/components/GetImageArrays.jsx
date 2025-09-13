import { useState } from "react";
import FetchApi from "./Fetch";

export default function PreparePictures() {
    // we get the images first
    const idArray = []
    for(let i = 10; i < 22; i++) {
        idArray.push(i)
    }
    

    // we use that array to create the current state
    const [ids, setIds] = useState(idArray)
    const [grabChoice, setGrabChoice] = useState(0)
    

    const catchId = (desiredId) => {
        setGrabChoice(desiredId)
    }

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
    
    

    return (
        <>  
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

            <p>Current chosen: {grabChoice}</p>
        </>
    )


}