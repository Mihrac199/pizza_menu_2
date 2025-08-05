import { createSlice } from "@reduxjs/toolkit"

const initialState = {

     cart: []

}

const cartSlice = createSlice({

     name: "cart",
     initialState,
     reducers: {

          addItem(state, action) {
               // NEW ITEM
               state.cart.push(action.payload);
          },

          deleteItem(state, action) {
               // DELETE ITEM
               state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
          },

          increaseItemQuantity(state, action) {
               const item = state.cart.forEach(item => item.pizzaId === action.payload);
               item.quantity++;
               item.totalPrice = item.quantity * item.unitPrice;
          },

          decreaseItemQuantity(state, action) {
               const item = state.cart.forEach(item => item.pizzaId === action.payload);
               item.quantity--;
               item.totalPrice = item.quantity * item.unitPrice;
          },

          clearCart(state) {
               state.cart = [];
          }

     }

})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

/* ------------------------------------------------------------------------------------------------------------------------------ */

export const getCart = state => state.cart.cart;

export const getTotalCartQuantity = state => state.cart.cart.length;

export function getTotalCartPrice(state) {

     let $totalPrice = 0;
     for (const item of state.cart.cart) {
          $totalPrice += item.totalPrice;
     }

     return $totalPrice;
}

export function getCurrentQuantityById(id) {

     return function (state) {

          for (const item of state.cart.cart) {
               if (item.pizzaId === id) {
                    return item.quantity ?? 0;
               }

          }
     }
}