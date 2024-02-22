import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorElement from "../components/route/errorElement";
import HomePage from "../pages/homePage";
import LandingPage from "../pages/landingPage";
import DetailsPage from "../pages/detailsPage";
import CartPage from "../pages/cartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    // loader: async (props) => {
    //   console.log("RP loader props", props);
    //   return fetch("https://fakestoreapi.com/products/1").then((res) =>
    //     res.json()
    //   );
    // },
    // action: async (props) => {
    //   console.log("RP action props", props,await props?.request?.formData());
    //   return null
    // },
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "browse",
        element: <LandingPage/>,
      },
      {
        path: "cart",
        element: <CartPage/>,
      },
      {
        path: ":item_slug/:id",
        element:<DetailsPage/>
      }
    ],
  },
]);

export default router;
