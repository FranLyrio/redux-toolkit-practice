import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './features/slices/counterSlice'
import { calculatorReducer } from './features/slices/calculatorSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    counter: counterReducer
  }
})
// centraliza todas as stores existentes

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch