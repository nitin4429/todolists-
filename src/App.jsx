
import { useDispatch } from 'react-redux';
import './App.css'
import Addtodo from './component/Addtodo/AddTodo'
import Todolist from './component/Todolist/todolist'
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo,editTodo } from './Actions/actionstodo';
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo,editTodo} , dispatch)
  return (
       <>
        <Addtodo addTodo = {actions.addTodo}/>
        <Todolist deleteTodo = {actions.deleteTodo} editTodo = {actions.editTodo}/>
        </>
  )
}

export default App
