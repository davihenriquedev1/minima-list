import { Item } from "@/types/Item"
import { ChangeEvent } from "react"

type Props = {
    item:Item,
    toggleDone:(id:number, checked:boolean)=>void,
    itemMoving: boolean
}

export const TodoItem = ({item, toggleDone, itemMoving}:Props) => {
    const handleToggleDone = (e:ChangeEvent<HTMLInputElement>)=> {
        toggleDone(item.id, e.target.checked);
    }
    
    return (
        <li className={`flex bg-[#20212c] p-2 rounded-lg pb-3 items-center w-[50%] transition-all duration-300 ${itemMoving? 'translate-y-4 scale-105': ''}`}>
            <input 
                title="done" 
                type="checkbox" 
                name="done" 
                id="done" 
                className="w-5 h-5 mr-2"
                checked={item.done}
                onChange={handleToggleDone}/>
            <label className={`text-[#ccc] ${item.done? 'line-through': 'flex-initial'}`}>{item.name} - {item.done.toString()}</label>
        </li>
    )
}