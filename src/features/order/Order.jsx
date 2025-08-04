import { useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiRestaurant"
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers"
import OrderItem from "./OrderItem"

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default function Order() {

  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (

    <div className="px-1 py-6 space-y-8">

      <div className="flex flex-wrap items-center justify- gap-2">

        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-4">

          {
            priority &&
            <span className="tracking-wide uppercase text-white text-xs font-semibold bg-red-500 px-4 py-2 rounded-full">Priority</span>
          }
          <span className="tracking-wide uppercase text-white text-xs font-semibold bg-green-500 px-4 py-2 rounded-full">{status} order</span>

        </div>

      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-4 py-2">

        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : "Order should have arrived"}
        </p>

        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>

      </div>

      <ul className="border-t border-b divide-y">
        {cart.map(item => <OrderItem item={item} key={item.id} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 px-4 py-2">

        <p className="text-xs font-medium text-stone-800">Price pizza: {formatCurrency(orderPrice)}</p>

        {
          priority &&
          <p className="text-xs font-medium text-stone-800">Price priority: {formatCurrency(priorityPrice)}</p>
        }

        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>

      </div>

    </div>

  )

}