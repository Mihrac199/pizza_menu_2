import { formatCurrency } from "../../utils/helpers"

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {

  const { quantity, name, totalPrice } = item;

  return (

    <li className="p-4">

      <div className="flex items-center justify-between text-xs">

        <p>
          <span>{quantity}&times;</span> {name}
        </p>

        <p className="font-bold">{formatCurrency(totalPrice)}</p>

      </div>

    </li>

  )

}