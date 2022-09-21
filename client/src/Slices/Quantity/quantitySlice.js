import { createSlice } from '@reduxjs/toolkit'

export const quantitySlice = createSlice({
    name: 'quantity',
    initialState: {
        value: 0,
    },
    reducers: {
        addItem: state => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          console.log(state)
          state.value += 1
        },
        removeItem: state => {
          state.value -= 1
        },
        addItemByAmount: (state, action) => {
          state.value += action.payload
        }
      }
    })

    export const { addItem, removeItem, addItemByAmount } = quantitySlice.actions
    export const quantityCount = (state) => state.quantity.value
    export default quantitySlice.reducer