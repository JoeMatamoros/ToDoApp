const initialState = [{
    id:1,
    todo: 'Comprar manga',
    done: false
}];

//Luego se define el reducer que es un simple accion
const todoReducer = (state = initialState, action)=>{
    if(action?.type =='agregar'){
        return [...state, action.payload];
    }
    return state;
}
let todos= todoReducer();

const newTodo = {
    id:2,
    todo: 'Dorohedoro',
    done: false
}
const agregarTodoAction ={
    type:'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

 

console.log(todos);