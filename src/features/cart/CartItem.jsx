import DeleteItem from "./DeleteItem"
import { formatCurrency } from "../../utils/helpers"
import UpdateItemQuantity from "./UpdateItemQuantity"

export default function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice } = item;

  return (

    <li className="py-3">

      <p className="mb-1">
        {quantity}&times; {name}
      </p>

      <div className="flex justify-between items-center">

        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center space-x-4">

          <UpdateItemQuantity pizzaId={pizzaId} />

          <DeleteItem pizzaId={pizzaId} />

        </div>

      </div>

    </li>

  )

}