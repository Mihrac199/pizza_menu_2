import { useDispatch, useSelector } from "react-redux"
import { clearCart, getCart } from "./cartSlice"
import LinkButton from "../../ui/LinkButton"
import Button from "../../ui/Button"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"

export default function Cart() {

  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />

  return (

    <div className="py-4 px-4">

      <LinkButton
        to={"/menu"}
      >
        &larr; Back To Menu
      </LinkButton>

      <h2 className="mt-8 text-xl font-semibold">Your cart, <span className="uppercase">{userName}</span></h2>

      <ul className="mt-4 divide-y-2 divide-stone-200 border-b-2">
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
      </ul>

      <div className="mt-8 space-x-3">

        <Button
          type="primary"
          to="/order/new"
        >Order Pizzas</Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear Cart</Button>

      </div>

    </div>

  )

}