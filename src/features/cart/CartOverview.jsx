import { Link } from "react-router-dom"

export default function CartOverview() {

  return (

    <div className="p-4 sm:p-6 bg-stone-800 text-stone-200 text-sm md:text-base uppercase flex items-center justify-between">

      <p className="space-x-5 sm:space-x-7 text-stone-300 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>

    </div>

  )

}