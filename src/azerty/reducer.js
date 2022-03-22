import { ADD, CANCEL, CONFIRM, DELETE, EDIT, FILTER } from "./action-types";



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
            ],
        filter:false
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
                ...state,filter : !state.filter
            }
        case EDIT : 
        return {
            ...state,todos : [...state.todos.map(el => el.id==payload.id ?payload:el )]
    }
       default:
        return state
   }
}

export default reducer