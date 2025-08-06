import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

export default function UpdateItemQuantity({ pizzaId }) {

     const dispatch = useDispatch();

     return (

          <div className="space-x-0.5">

               <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
               <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button >

          </div >

     )

}