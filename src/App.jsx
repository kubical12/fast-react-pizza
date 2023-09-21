import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder,{action as createOrderAction} from "./features/order/CreateOrder"
import Order, {order as orderLoader} from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"
// we will pass the objects in browserRouter each objects as routes.
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",element:<Home/>,
        
    },
    {
      path: "/menu",element: <Menu/>,
      loader: menuLoader,
    },
    {
      path: "/cart", element: <Cart/>
    },
    {
      path: "/order/new", element:<CreateOrder/>,
      action: createOrderAction,
    },
    {
      path: "/order/:orderId" , element:<Order/>,
      loader:orderLoader , errorElement: <Error/>
    }
    ]
  },
    
  ])
function App() {
  return (
    //passing router object as prop to routerProvider
    <RouterProvider router={router}/>
  )
}

export default App

