import { useAppDispatch } from "../app/features/hooks/useAppDispatch";
import { counterActions } from '../app/features/slices/counterSlice'
import Button from "../components/Button";

export const CounterTemplate = () => {
  const dispatch = useAppDispatch()

  const decrement = () => {
    dispatch()
  }

  return (
    <Button>Counter</Button>
  )
}