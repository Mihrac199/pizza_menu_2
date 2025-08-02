import { Link } from "react-router-dom"

export default function Button({ children, disabled, to, type }) {

     const base = "text-xs bg-yellow-500 font-semibold text-stone-800 rounded-lg hover:bg-yellow-400 transition-all duration-300 focus:outline-none focus:ring focus:bg-yellow-400 focus:ring-yellow-400 focus:ring-offset-1";

     const styles = {
          primary: base + " px-4 py-3",
          small: base + " px-4 py-2",
          secondary: "text-xs font-semibold border-2 border-yellow-200 text-stone-400 px-1.5 py-1.5 hover:bg-yellow-500 hover:text-stone-800 rounded-lg transition-all duration-300 focus:outline-none focus:ring focus:bg-yellow-400 focus:ring-yellow-400 focus:ring-offset-1 focus:text-stone-800",
     }

     if (to) {
          return <Link
               className={styles[type]}
               to={to}>{children}</Link>
     }

     return (

          <button
               className={styles[type]}
               disabled={disabled}
          >
               {children}
          </button>

     )

}