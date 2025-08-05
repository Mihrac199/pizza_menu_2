import LinkButton from "../../ui/LinkButton"

export default function EmptyCart() {

  return (

    <div className="flex justify-center items-center mt-5 p-3">

      <div>

        <LinkButton
          to={"/menu"}
        >
          &larr; Back To Menu
        </LinkButton>

        <p className="text-stone-800 font-medium mt-3">Your cart is still empty. Start adding some pizzas...</p>

      </div>

    </div>

  )

}