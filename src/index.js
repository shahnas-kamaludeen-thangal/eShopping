import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Shop from "./Components/Shop";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Login from "./Components/Login";
import CheckOut from "./Components/ChekOut";
import OrderPlaced from "./Components/OrderPlaced";

// const MainAPp = () => {
//   // const { isAuthenticated } = useAuth0();

//   return (
//     <Provider store={appStore}>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<App />}></Route>
//           <Route path="/cart" element={<Cart />}></Route>
//           <Route path="/shop" element={<Shop />}></Route>
//           <Route path="/checkout" element={<CheckOut />}></Route>
//           <Route path="/orderPlaced" element={<OrderPlaced />}></Route>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </Provider>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //
  // <Auth0Provider
  //   domain=""
  //   clientId=""
  //   redirectUri={window.location.origin}
  // >
  //<MainAPp />
  // </Auth0Provider>
  <Provider store={appStore}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/eShopping" element={<App />}></Route>
        <Route path="/" element={<App />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/orderPlaced" element={<OrderPlaced />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);
