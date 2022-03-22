import { ADD, CANCEL, CONFIRM, DELETE, EDIT, FILTER } from "./action-types"




export const add = (newTask) => {
    return {
        type: ADD,
        payload: newTask 
    }
}
export const filter = () => {
    return {
        type: FILTER,
        
    }
}
export const conf = (id) => {
    return {
        type: CONFIRM,
        payload : id
    }
}
export const  edit = (tab) => {
    return {
        type: EDIT ,
        payload : tab
    }
}
export const del = (id) => {
    return {
        type: DELETE,
        payload : id
    }
}
// export const can = () => {
//     return {
//         type: CANCEL,
        
//     }
// }
