import "./Seznam.css"
import data from "./Data";
import { useState } from "react";

const Seznam = () =>{
     
    const nothing = []
    const [listTask, setListTask] = useState(data)
    const[lendDisk,setLenddisk] = useState(nothing)
    
   
const UseHandler = (setID) =>{
    const filteredList = listTask.filter((oneList)=>{
        return oneList.id !== setID
    })
  const lendDiskdata = data.filter(n => !filteredList.includes(n))
   setLenddisk(lendDiskdata)
    setListTask(filteredList)
  }

  const allBackHandler = () =>{
    setListTask(data)
    setLenddisk(nothing)
  }
  
 const backHandler = (Lendid) =>{
  const back = lendDisk.filter((b)=>{
    return b.id !== Lendid
   })

   setListTask(data.filter(n => !back.includes(n)))
   setLenddisk(lendDisk.filter(n => back.includes(n)))
 }
 
 
   
    return(
        <div >
            <div className="all-list">
         {listTask.map((oneList)=>{
            const {id,name} = oneList
            
            return <div className="list" key={id} >
                <h5>{name}</h5>
                <button className="btn" type="button" onClick={()=>UseHandler(id,name)}>Půjčit</button>

                
                
            </div>
         })}
         </div>
         <p>Půjčené disky</p>
         <div className="all-list-back">
         {lendDisk.map((oneDisk) =>{
                const {name,id} = oneDisk
                return(
                    <div key={id} className = "list-back">                        
                    <h5>{name}</h5>
                        <button onClick={()=>backHandler(id)} className="btn" type="button">Vrátit</button>
                        
                    </div>
                )
            })}
            </div>
<button type="button" className="main-button" onClick={allBackHandler}>Vrátit Vše</button>

        </div>
        
    )
}
export default Seznam;