import { createSlice } from "@reduxjs/toolkit"

const initialState = {

     cart: []

}

const cartSlice = createSlice({

     name: "cart",
     initialState,
     reducers: {

          addItem(state, action) {
               state.cart.push(action.payload);
          },

          deleteItem(state, action) {
               state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
          },

          increaseItemQuantity(state, action) {
               let item;
               for (const x of state.cart) {
                    if (x.pizzaId === action.payload) {
                         item = x;
                    }
               }

               item.quantity++;
               item.totalPrice = item.quantity * item.unitPrice;

          },

          decreaseItemQuantity(state, action) {
               let item;
               for (const x of state.cart) {
                    if (x.pizzaId === action.payload) {
                         item = x;
                    }
               }

               item.quantity--;
               item.totalPrice = item.quantity * item.unitPrice;

               if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
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

export const getTotalCartQuantity = state => {

     let $totalQuantity = 0;
     for (const item of state.cart.cart) {
          $totalQuantity += item.quantity;
     }

     return $totalQuantity;

}

export const getTotalCartPrice = state => {

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