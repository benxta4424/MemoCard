import FetchApi from "./Fetch";

export default function PreparePictures() {
    const imageArr = []

    for(let i = 10; i < 22; i++) {
            imageArr.push(<FetchApi id={i} />)
    }


    return (
        <>  
            <div className="picturesBox">
                {imageArr.map((picture) => 
                    <div className="actualPicture"> {picture} </div>
                    )}
            </div>
        </>
    )


}