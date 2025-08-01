import Button from "../../ui/Button"
import { formatCurrency } from "../../utils/helpers"

export default function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice } = item;

  return (

    <li className="py-3">

      <p className="mb-1">
        {quantity}&times; {name}
      </p>

      <div className="flex justify-between items-center">

        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>

      </div>

    </li>

  )

}