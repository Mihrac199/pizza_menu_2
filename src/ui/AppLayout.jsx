import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import Loader from "./Loader"
import CartOverview from "../features/cart/CartOverview"

export default function AppLayout() {

     const navigation = useNavigation();
     const isLoading = navigation.state === "loading";

     return (

          <div className="grid grid-rows-[auto_1fr_auto] h-screen">

               {isLoading && <Loader />}

               <Header />

               <div className="overflow-scroll">
                    <main className="mx-auto max-w-xl">

                         <Outlet />

                    </main>
               </div>

               <CartOverview />

          </div>
     )

}