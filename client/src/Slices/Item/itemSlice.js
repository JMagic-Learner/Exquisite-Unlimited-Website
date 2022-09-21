import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        productsinCart: [],
    },
    reducers: {
        addItemToCart: (state,object) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
       
          const newItem = {
            name:object.payload.name,
            category:"",
            description:"",
            price:object.payload.price,
            serial:object.payload.serial,
            quantity:object.payload.quantity,
            size:""
          }

          
         
          state.productsinCart.push(newItem)
         
          
            
        },
        removeItemFromCart: (state,string) => {
        
          let tmp = state.productsinCart.filter((item)=> item.serial != string.payload)
         
          state.productsinCart = tmp
        },
      }
    })

    export const { addItemToCart, removeItemFromCart} = itemSlice.actions
    export const cartArray = (state) => state.item.productsinCart
    export default itemSlice.reducer