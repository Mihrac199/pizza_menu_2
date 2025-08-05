import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice"
import { formatCurrency } from "../../utils/helpers"

export default function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (

    <div className="p-4 sm:p-6 bg-stone-800 text-stone-200 text-sm md:text-base uppercase flex items-center justify-between">

      <p className="space-x-5 sm:space-x-7 text-stone-300 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>

    </div>

  )

}