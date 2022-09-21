import { configureStore } from '@reduxjs/toolkit'
import quantityReducer from '../Slices/Quantity/quantitySlice.js'
import itemReducer from '../Slices/Item/itemSlice.js'
import totalAmountReducer from '../Slices/TotalAmount/totalAmountSlice.js'
export default configureStore({
  reducer: {
    quantity: quantityReducer,
    item: itemReducer,
    totalAmount: totalAmountReducer
  }
})
