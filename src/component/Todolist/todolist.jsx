
import Todo from "../Todo/todo"
import './todolist.css';
import { useSelector } from "react-redux";
function Todolist({deleteTodo,editTodo}){
  const list = useSelector((state) => state.todo);
   
   function onEdit(todotext,todo){
     editTodo(todo,todotext);
   }
    
   function onDelete(todo){
    deleteTodo(todo);
   }
    return (
        <div className="todo_list">
            {list.length > 0 && list.map(todo => <Todo
                                                     key={todo.id} 
                                                     todoData={todo.todoData}
                                                     onDelete = {() =>onDelete(todo)}
                                                     onEdit = {(todotext) => onEdit(todotext,todo)}
                                                />)}
        </div>
    )
    
}
export default Todolist;