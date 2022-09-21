import { createSlice } from '@reduxjs/toolkit'

export const totalAmountSlice = createSlice({
    name: 'totalAmount',
    initialState: {
        total: 0,
    },
    reducers: {
        addtoTotal: (state,object) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
         
          state.total += object.payload.price * object.payload.quantity
        },
        subtractfromTotal: (state,object) => {
       
          

          state.total -= object.payload
        },
      }
    })

    export const { addtoTotal, subtractfromTotal } = totalAmountSlice.actions
    export const totalAmount = (state) => state.totalAmount.total
    export default totalAmountSlice.reducer