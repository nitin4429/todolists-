import { useState } from "react";
import './AddTodo.css';
function Addtodo({addTodo}){
    const [inputtext , setinputtext] = useState('');
    return(
        <div className="add_todo">
            <input type="text"
            onChange={e => setinputtext(e.target.value)}/>
            <button className="create_Button" onClick={() =>{
               addTodo(inputtext);
                 setinputtext('');
                 }}>Create Todo</button>
        </div>
    )
}
export default Addtodo;