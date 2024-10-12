import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

const router = createBrowserRouter ([
  {path:"/" , element: <Root/>,children:[
    {index:true,element: <Home/>},
    {path:"create" ,element: <Create/>}
  ]}
]); 
;
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
