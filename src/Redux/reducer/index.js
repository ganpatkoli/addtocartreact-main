import { products } from "../products"

const initialState = products

export  const  Reducer=((state = initialState, action , )=>{
if(action.type === 'INCREMENT'){
    return state +1 
}
if(action.type === 'DECREMENT'){
    return state -1 
}




})