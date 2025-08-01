import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Menu, { loader as menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder"
import Order, { loader as orderLoader } from "./features/order/Order"

import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import Error from "./ui/Error"

const router = createBrowserRouter([

  {

    element: <AppLayout />,
    errorElement: <Error />,

    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        loader: menuLoader,
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        loader: orderLoader,
        element: <Order />,
        errorElement: <Error />,
      }

    ]

  }

])

export default function App() {
  return <RouterProvider router={router} />
}