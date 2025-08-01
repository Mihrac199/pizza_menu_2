import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchOrder() {

     const [query, setQuery] = useState("");
     const navigate = useNavigate();

     function handleSubmit(e) {
          e.preventDefault();
          if (!query) return;

          navigate(`/order/${query}`);
          setQuery("");
     }

     return (

          <form onSubmit={handleSubmit}>
               <input
                    className="
                    text-center
                    rounded-lg 
                    px-4 py-2 
                    text-sm 
                    placeholder:text-stone-500 
                    w-32 
                    focus:w-36 
                    sm:w-64 
                    sm:focus:w-72 
                    transition-all duration-500 
                    focus:outline-none 
                    focus:ring 
                    focus:ring-yellow-500 
                    focus:bg-yellow-100"
                    placeholder="Search Order"
                    value={query}
                    onChange={e => setQuery(e.target.value)} />
          </form>

     )

}