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
import About from "./components/About/About.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Reset from "./components/Reset/Reset.jsx";
import Register from "./components/Register/Register.jsx";
import Protectedroute from "./components/Protectedroute/Protectedroute.jsx";
import AuthProvider from "./AuthProvider.jsx";
import ResetEmail from "./components/ResetEmail/ResetEmail.jsx";
import ChefRecipes from "./components/ChefRecipes/ChefRecipes.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Blog from "./components/Blog/Blog.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import FavoriteRecipes from "./components/FavoriteRecipes/FavoriteRecipes.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/chef-details/:id"
          element={
            <Protectedroute>
              <ChefRecipes />
            </Protectedroute>
          }
        />
        <Route path="favorite" element={<FavoriteRecipes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      <Route path="/resetemail" element={<ResetEmail />} />
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
