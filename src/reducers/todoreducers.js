function todoreducers(state=[],action){
    if(action.type=="add_todo"){
        let todotext = action.payload.todotext;
        return[
            ...state,{id: state.length + 1, todoData: todotext , finished:false}
        ]
    }else if(action.type == 'delete_todo'){
        let todo = action.payload.todo;
        const updatelist = state.filter(t => t.id != todo.id);
        return updatelist;
    }else if(action.type=='edit_todo'){
        let todotext = action.payload.todotext;
        let todo = action.payload.todo;
        const updatelist = state.map(t =>{
            if(t.id == todo.id){
                todo.todoData = todotext;
            }
            return t;
        })
        return updatelist;
    }else{
        return state;
    }
}
export default todoreducers;
