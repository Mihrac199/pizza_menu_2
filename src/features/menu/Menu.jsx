import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../services/apiRestaurant"
import MenuItem from "./MenuItem"

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default function Menu() {

  const menu = useLoaderData();

  return (

    <ul className="divide-y divide-stone-200 px-5">
      {menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>

  )

}