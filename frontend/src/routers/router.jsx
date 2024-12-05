import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";
import Signin from "../components/SignIn";
import PaperPurchaseHome from "../pages/PaperPurchaseHome";
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
            path: 'PaperPurchaseHome',
            element:
            <ProtectedRoute>
              <PaperPurchaseHome/>
            </ProtectedRoute>
          }
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
