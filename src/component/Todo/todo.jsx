import { useState } from "react";
import './todo.css';
function Todo({todoData,onDelete,onEdit}){
    const [isediting, setisediting] = useState(false);
    const [edittext,setedittext] = useState(todoData);
    return(
        <div className="inputs-wrap">
            {/* <input type="checkbox" /> */}
            {(isediting) ? <input type="text" value={edittext} onChange={e => setedittext(e.target.value)}/> : <span className="tododata">{todoData}</span>}
                <button className="edit_button" onClick={()=>{
                    setisediting(!isediting);
                    onEdit(edittext);
                }}>{(!isediting) ? "Edit" : "save"}</button>
                <button className="delete_button" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;