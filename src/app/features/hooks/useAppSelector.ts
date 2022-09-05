import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../../store'

export const useCalculatorSelector: TypedUseSelectorHook<RootState> = useSelector
