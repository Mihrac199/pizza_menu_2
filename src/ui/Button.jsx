import { Link } from "react-router-dom"

export default function Button({ children, disabled, to }) {

     const className = "bg-yellow-500 font-semibold text-stone-800 px-3 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 focus:outline-none focus:ring focus:bg-yellow-400 focus:ring-yellow-400 focus:ring-offset-1";

     if (to) {
          return <Link
               className={className}
               to={to}>{children}</Link>
     }

     return (

          <button
               className={className}
               disabled={disabled}
          >
               {children}
          </button>

     )

}