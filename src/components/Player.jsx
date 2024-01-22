import { useState } from "react"
 

export default function Player({name,symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName]= useState(name);
    // let btnCaption = 'edit'
    
   
    function handleEditClick(){
     
            setIsEditing(isEditing=> !isEditing)

    }
    function handleChange(event){
       console.log('here is the event,', event);
setPlayerName(event.target.value)
    }
    return (

        <li className={isActive? 'active': 'undefined'}>
  <span className="player">
    {!isEditing &&
<span className="player-name">{playerName}</span>}
{isEditing && <input type="text" required value={playerName} onChange={handleChange}/>}
{!isEditing && <span className="player-symbol">{symbol}</span>}
  <button onClick={handleEditClick}>
    {isEditing? 'save': 'edit'}</button>
  </span>
</li>
    )
}