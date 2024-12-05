import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";

import PaperPurchase from "../pages/PaperPurchase";
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
        path: "/PaperPurchase",
        element: <PaperPurchase />,
      },

      // {
      //   path: "/dashboard",
      //   element: <Board />,
      // },
    ],
  },
]);

export default router;
