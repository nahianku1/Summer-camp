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
import Register from "./components/Register/Register.jsx";
import Protectedroute from "./components/Protectedroute/Protectedroute.jsx";
import AuthProvider from "./AuthProvider.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AddClass from "./components/AddClass/AddClass.jsx";
import MyClasses from "./components/MyClasses/MyClasses.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ManageUsers from "./components/ManageUsers/ManageUsers.jsx";
import ManageClasses from "./components/ManageClasses/ManageClasses.jsx";
import DefineUser from "./components/DefineUser/DefineUser.jsx";
import ApprovedClasses from "./components/ApprovedClasses/ApprovedClasses.jsx";
import SelectedClass from "./components/SelectedClass/SelectedClass.jsx";
import PaymentSuccess from "./components/Payment/Payment.jsx";
import Payment from "./components/Payment/Payment.jsx";
import EnrolledClasses from "./components/EnrolledClasses/EnrolledClasses.jsx";
import PayHistory from "./components/PayHistory/PayHistory.jsx";
import Instructor from "./components/Instructor/Instructor.jsx";
let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/classes" element={<ApprovedClasses/>} />
        <Route path="/instructors" element={<Instructor/>} />
        
        
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <Protectedroute>
            <Dashboard />
          </Protectedroute>
        }
      >
        <Route index element={<DefineUser />} />
        <Route path="addclass" element={<AddClass />} />
        <Route path="myclasses" element={<MyClasses />} />
        <Route path="manageclasses" element={<ManageClasses />} />
        <Route path="manageusers" element={<ManageUsers />} />
        <Route path="selectedclasses" element={<SelectedClass/>} />
        <Route path="enrolledclasses" element={<EnrolledClasses/>} />
        <Route path="payhistory" element={<PayHistory/>} />
        <Route path="payment" element={<Payment/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
      
    </>
  )
);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </AuthProvider>
);
