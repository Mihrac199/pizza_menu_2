import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"

export default function Header() {

     return (

          <header className="flex items-center justify-between px-4 py-5 sm:px-5 sm:py-6 border-b border-stone-200 bg-yellow-500 uppercase">

               <Link
                    to="/"
                    className="tracking-widest"
               >Fast React Pizza Co.
               </Link>

               <SearchOrder />

               <UserName />

          </header>

     )

}