import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity; 
      // const index = state.products.findIndex(
      //   (basketItem) => basketItem.id === action.products._id
      // );
      // let newBasket = [...state.products];
      // if (index >= 0) {
      //   console.log(index)
      //   console.log(action)
      //   newBasket.splice(index, 1);
      // } else {
      //   console.log("we have error");
      // }

       state.products.pop(action.payload);
      
    },
    clearProduct: (state) => {
      state.products= [];
      state.quantity= 0;
      state.total= 0;
     
      
       
     },
  },
});

export const { addProduct,removeProduct,clearProduct } = cartSlice.actions;
export default cartSlice.reducer;