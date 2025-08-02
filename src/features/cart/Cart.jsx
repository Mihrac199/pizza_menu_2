import LinkButton from "../../ui/LinkButton"
import Button from "../../ui/Button"
import CartItem from "./CartItem"

const fakeCart = [

  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },

  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },

  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },

]

export default function Cart() {

  const cart = fakeCart;

  return (

    <div className="py-4 px-4">

      <LinkButton
        to={"/menu"}
      >
        &larr; Back To Menu
      </LinkButton>

      <h2 className="mt-8 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-4 divide-y-2 divide-stone-200 border-b-2">
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
      </ul>

      <div className="mt-8 space-x-3">

        <Button
          type="primary"
          to="/order/new"
        >Order Pizzas</Button>

        <Button type="secondary">Clear Cart</Button>

      </div>

    </div>

  )

}