export const addTodo = (inputtext) => ({type:'add_todo' , payload:{todotext: inputtext}});
export const editTodo = (todo,todotext) => ({type:"edit_todo" , payload:{todo,todotext}});
export const deleteTodo = (todo) => ({type:"delete_todo", payload:{todo}});