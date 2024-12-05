import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";
<<<<<<< HEAD
=======
import Signin from "../components/SignIn";

import PaperPurchase from "../pages/PaperPurchase";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext"; 
import SigninAs from "../components/SignInAs";
import Navbar from "../components/NavBar";
const AuthenticatedLayout = ({children}) => {
  const{userInfo} = useAuth();
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
} 
>>>>>>> 45495ff735264c0ebc287f7e523243bb8dc78f3e
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/signin-as",
        element: <SigninAs />,
      },
      {
        path: '/:username/',
        element: <AuthenticatedLayout/>,
        children:[
          {
            path: '',
            element:
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          },
          {
            path: 'PaperPurchase',
            element:
            <ProtectedRoute>
              <PaperPurchase/>
            </ProtectedRoute>
          },
          // {
          //   path:'management',
          //   element: (
          //     <ProtectedRoute allowedRoles={['spso']}>
          //       <EmployeeDashboard/>
          //     </ProtectedRoute>
          //   )
          // },
        ]
      }

      // {
      //   path: "/dashboard",
      //   element: <Board />,
      // },
    ],
  },
]);

export default router;
