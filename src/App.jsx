import './App.css'
import Home from './componunts/Home';
import Cart from './componunts/Cart';
import { createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
     },{
      path:"/cart",
      element:<Cart/>
     }
])
  return (
    <div>
         <RouterProvider router={router}  />
    </div>
  )
}

export default App

