import "./Addition.css"
import {useEffect, useState } from "react"
import data from "./Data"


const Addition = ()=>{
    const [add, setAdd] = useState("")
    const [save, setSave] = useState([])

const sentDisk =(event)=>{
    
    event.preventDefault()

    if(add)
    {
        
        const oneName = {name:add}
        
        setSave((save)=>{
            return [...save, oneName]
            
        })
    }
    else{
        alert("Políčko není vyplněné")
    }
   
    
    setAdd("")
}

    useEffect(()=>{
            console.log(...data,...save)
            return ()=>{
                console.log("cistení")
            }
    })



return(
    <div className="all-form">
        <form onSubmit={sentDisk}>
            <input onChange={(event)=>{setAdd(event.target.value)}} value={add} className="inputdisk" type="text" placeholder="Produkce"/>
            <input type="submit" value="Přidat jméno"/>
        </form>

        {save.map((oneName, index)=>{
            const{name} = oneName
            return(<p key={index}>{name}</p>)
        })}
    </div>
)
}

export default Addition