import { useSelector } from "react-redux"
import CreateUser from "../features/user/CreateUser"
import Button from "./Button"

export default function Home() {

  const userName = useSelector(state => state.user.userName);

  return (

    <div className="my-16 px-4 sm:my-16 text-center">

      <h1 className="mb-8 text-xl md:text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName === "" ?
        <CreateUser />
        :
        <Button to="/menu" type="primary">Continue Menu, {userName}</Button>
      }

    </div>

  )

}