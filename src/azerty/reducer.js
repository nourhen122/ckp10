import { ADD, CANCEL, CONFIRM, DELETE, FILTER } from "./action-types";



const init = {
  todos: [
    {
        id : Math.random(),
        description : "wake up",
        isDone : true
        },
        {
        id : Math.random(),
        description : "have coffee",
        isDone : true
            },
        {
        id : Math.random(),
        description : "homework",
        isDone : false
                }
            ]
        }

const reducer = (state=init,{type,payload}) => {
   switch (type) {
       case ADD:
           return {
               ...state,todos:[...state.todos,payload]
           }
        case DELETE : 
        return {
            ...state,todos : [...state.todos.filter(el=>el.id!==payload)]
        }
        case CONFIRM :
            return {
                ...state,todos : [...state.todos.map(el=>el.id==payload ? {...el,isDone:!el.isDone}:el)]
            }
        case FILTER :
            return{
                ...state,todos : [...state.todos.filter(el =>el.isDone !==false)]
            }
        case CANCEL: 
        return{
            ...state,todos : [...state.todos.map(el=>el)]
        }
       default:
        return state
   }
}

export default reducer