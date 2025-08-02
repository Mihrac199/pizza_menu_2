import { formatCurrency } from "../../utils/helpers"
import Button from "../../ui/Button"

export default function MenuItem({ pizza }) {

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (

    <li className="flex gap-4 py-4">

      <img
        className={`h-32 ${soldOut ? `blur-sm` : ``}`}
        src={imageUrl}
        alt={name} />

      <div className="flex flex-col grow pt-1">

        <p className="font-extrabold">{name}</p>
        <p className="capitalize text-sm italic text-stone-500">{ingredients.join(', ')}</p>

        <div className="mt-auto flex justify-between items-center">

          {!soldOut ?
            <p className="text-sm">{formatCurrency(unitPrice)}</p> :
            <p className="text-sm font-semibold uppercase text-stone-400">Sold out</p>
          }

          <Button type="small">Add To Cart</Button>

        </div>

      </div>

    </li>

  )

}