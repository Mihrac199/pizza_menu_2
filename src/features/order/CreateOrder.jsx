import { useState } from "react"
import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { useSelector } from "react-redux"
import { createOrder } from "../../services/apiRestaurant"
import Button from "../../ui/Button"
import EmptyCart from "../cart/EmptyCart"
import { formatCurrency, isValidPhone } from "../../utils/helpers"
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice"
import store from "../../store"

export async function action({ request }) {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true"
  }

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please Give Us Your Correct Phone Number. We Might Need it To Contact You."
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);

}

export default function CreateOrder() {

  const [withPriority, setWithPriority] = useState(false);
  const userName = useSelector(state => state.user.userName);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />

  return (

    <div className="py-5 px-5">

      <h2 className="mt-2 mb-8 text-lg font-bold">Ready to order? Let's go!</h2>

      <Form method="POST">

        <div className="mb-5">

          <label>First Name</label>

          <input
            className="input"
            defaultValue={userName}
            type="text"
            name="customer"
            required />

        </div>

        <div className="mb-5">

          <label>Phone number</label>

          <div>
            <input
              className="input"
              type="tel"
              name="phone"
              required />
            {formErrors?.phone &&
              <p className="mt-3 text-xs bg-red-200 text-red-800 bg px-4 py-2 rounded-full">{formErrors.phone}</p>
            }
          </div>


        </div>

        <div className="mb-5">

          <label>Address</label>

          <div>
            <input
              className="input"
              type="text"
              name="address"
              required />
          </div>

        </div>

        <div className="mb-5">

          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring  focus:bg-yellow-100 focus:ring-yellow-100 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />

          <label htmlFor="priority"> Want to yo give your order priority?</label>

        </div>

        <div>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button
            type="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order..." : `Order Now ${formatCurrency(totalPrice)}`}
          </Button>

        </div>

      </Form>

    </div>

  )

}