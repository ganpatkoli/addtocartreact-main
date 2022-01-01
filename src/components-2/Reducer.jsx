export const reducer = (state, action) => {
  // console.log(state);/
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,

      items: state.items.filter((x) => {
        return x.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  if (action.type === "INCREMENT") {
    let updatedCart = state.items.map((x) => {
      if (x.id === action.payload) {
        return { ...x, quantity: x.quantity + 1 };
      }
      return x;
    });
    return { ...state, items: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let updatedCart = state.items
      .map((x) => {
        if (x.id === action.payload) {
          return { ...x, quantity: x.quantity - 1 };
        }
        return x;
      })
      .filter((y) => y.quantity !== 0);

    return { ...state, items: updatedCart };
  }

  // reduce(callback(accumletor, currentValue,[, index [ ,array ] ] [initialvalue])

  // reduce is use to execute the reducer method on each of element  of the arrey, provide result in single value

  // accumeletor data ko ek jagah per stor keta je

  if (action.type === "GET_TOTAL") {
    let { totalItems, totalAmmount } = state.items.reduce(
      (accum, curval) => {
        let { quantity, price } = curval;
        let updatedTotalAmmount = price * quantity;
        accum.totalAmmount += updatedTotalAmmount;
        accum.totalItems += quantity;
        return accum;
      },

      {
        totalItems: 0,
        totalAmmount: 0,
      }
    );
    return { ...state, totalItems, totalAmmount };
  }


  return state;
};
