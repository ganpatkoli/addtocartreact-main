export const reducer = (state, action) => {
  if (action.type === "REMOVEITEM") {
    return {
      ...state,
      item: state.item.filter((cvalue) => cvalue.id !== action.payload),
    };
  }

  if (action.type === "INCREMENT") {
const updated = state.item.map((x)=>{
    if(x.id===action.payload){
        return {...x , quantity: x.quantity+1}
        }
        return x
    })
    return {...state, Item: updated}
}


  return state;
};
