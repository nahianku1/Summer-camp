import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { RotatingLines } from "react-loader-spinner";

function Protectedroute({ children }) {
  let { user, loading } = useContext(AuthContext);
  let location=useLocation()
  console.log(location);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </div>
    );
  if (user) return children;
  return <Navigate to="/signin" replace state={location.pathname}></Navigate>;
}

export default Protectedroute;
