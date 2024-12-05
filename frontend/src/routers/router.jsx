import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";
import PrinterManage from '../spso/PrinterManage'
import PrintHistoryManage from "../spso/PrintHistoryManage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Board />,
      },
    ],
  },
]);

export default router;
