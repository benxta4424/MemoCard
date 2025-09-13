import { useEffect, useState } from "react";

export default function Scoreboard({counter}) {
    return (

        <>
            <div className="scoreboardContainer">
                <div className="title">Have fun with MemoCard</div>
                <div className="score"> 
                    { counter < 12 && `${counter} / 12` }
                    { counter == 12 && `Congrats! You've won.`  }
                </div>
            </div>
        </>

    )
}