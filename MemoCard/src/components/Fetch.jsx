import { useEffect, useState } from "react"

export default function FetchApi(props) {
    const [name, setName] = useState("")

    useEffect (() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + props.id).then(resp => resp.json()).then(data => setName(data.sprites.front_shiny))
   }, [props.id])

   return(
    <>
        <img key={props.id} src={name} alt="" />
    </>
   )
}
