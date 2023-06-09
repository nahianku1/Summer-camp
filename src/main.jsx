import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Reset from "./components/Reset/Reset.jsx";
import Register from "./components/Register/Register.jsx";
import Protectedroute from "./components/Protectedroute/Protectedroute.jsx";
import AuthProvider from "./AuthProvider.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route path="*" element={<NotFound />} />

      <Route path="/reset" element={<Reset />} />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthProvider>
);
