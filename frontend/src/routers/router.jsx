import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Board from "../dash/Home";
import PaperPurchaseHome from "../pages/PaperPurchaseHome";
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
        path: "/PaperPurchaseHome",
        element: <PaperPurchaseHome />,
      },

      // {
      //   path: "/dashboard",
      //   element: <Board />,
      // },
    ],
  },
]);

export default router;
