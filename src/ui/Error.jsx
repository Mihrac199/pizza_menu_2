import { useRouteError } from "react-router-dom"
import LinkButton from "./LinkButton"

export default function Error() {

  const error = useRouteError();

  return (

    <div className="flex items-center justify-center h-screen">

      <div className="space-y-5">

        <h1 className="text-4xl font-semibold">Something went wrong</h1>

        <p className="text-lg font-bold text-stone-500">{error.data || error.message}</p>

        <LinkButton to="-1">&larr; Go Back</LinkButton>

      </div>

    </div>

  )

}