import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";
import Signin from "../components/SignIn";
import Dashboard from "../spso/Dashboard";
import Config from "../spso/Config";
import Printer from "../spso/Printer";
import PrintHistory from "../spso/PrintHistory";
import PaperPurchase from "../pages/PaperPurchase";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext"; 
import SigninAs from "../components/SignInAs";
import Navbar from "../components/NavBar";
import SidebarSPSO from "../components/SideBarSPSO";
import LichSuIn from "../pages/LichSuIn/LichSuIn";
import TongQuan from "../pages/TongQuan/TongQuan";
import ChonMayIn from "../pages/ChonMayIn/ChonMayIn";
import SidebarIn from "../components/SidebarIn";
import TuyChon from "../pages/TuyChon/TuyChon";
import {FileProvider} from "../pages/utils/FileHolder";
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
            path: 'PaperPurchase',
            element:
            <ProtectedRoute>
              <PaperPurchase/>
            </ProtectedRoute>
          },
          {
            path:'spso',
            element:
              <ProtectedRoute allowedRoles={['spso']}>
              <SidebarSPSO/>
              </ProtectedRoute>
            ,
            children:[
              {
                path: '',
                element:               
              <ProtectedRoute allowedRoles={['spso']}>
                <Dashboard/>
              </ProtectedRoute>
              },
              { 
                path: 'config',
                element: 
                <ProtectedRoute allowedRoles={['spso']}>
                  <Config/>
                </ProtectedRoute>

              },
              { 
                path: 'printer',
                element: 
                <ProtectedRoute allowedRoles={['spso']}>
                  <Printer/>
                </ProtectedRoute>
              },
              { 
                path: 'print-history',
                element: 
                <ProtectedRoute allowedRoles={['spso']}>
                  <PrintHistory/>
                </ProtectedRoute>
              },
            ]
          },
          {
            path: 'history',
            element:
            <ProtectedRoute>
              <LichSuIn/>
            </ProtectedRoute>
          },

          {
            path: 'select-printer',
            element:
            <ProtectedRoute>
              <FileProvider>
              <SidebarIn/>
              </FileProvider>
            </ProtectedRoute>,
            children:[
              {
                path: '',
                element:
                <ProtectedRoute>
                  <ChonMayIn/>
              </ProtectedRoute>,
              },
              {
                path: 'selection',
                element:
                <ProtectedRoute>
                  <TuyChon/>
                </ProtectedRoute>
              },
              {
                path: 'overview',
                element:
                <ProtectedRoute>
                  <TongQuan/>
                </ProtectedRoute>
              },
            ]
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
