import { useAppDispatch } from "../app/features/hooks/useAppDispatch";
import { useAppSelector } from "../app/features/hooks/useAppSelector";
import { counterActions } from '../app/features/slices/counterSlice'
import { counterSelector } from '../app/features/selector'

import Button from "../components/Button";

export const CounterTemplate = () => {
  const dispatch = useAppDispatch()
  const counterState = useAppSelector(counterSelector)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <>
      <Button onClick={increment}>Increment</Button>
      {counterState}
      <Button onClick={decrement}>Decrement</Button>
    </>
  )
}