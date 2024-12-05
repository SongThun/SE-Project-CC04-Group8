import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
// import Board from "../dash/Home";
import SPSOPrinter from '../spso/Printer';
import SPSOPrintHistory from "../spso/PrintHistory";
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
        path: "/spso/printer",
        element: <SPSOPrinter />
      },
      {
        path: "/spso/print-history",
        element: <SPSOPrintHistory />
      },
    ],
  },
]);

export default router;
