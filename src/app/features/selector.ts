import { RootState } from '../store'

export const counterSelector = (state: RootState) => state.counter
export const calculatorSelector = (state: RootState) => state.calculator