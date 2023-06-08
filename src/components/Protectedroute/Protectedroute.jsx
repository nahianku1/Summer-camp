import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { RotatingLines } from "react-loader-spinner";

function Protectedroute({ children }) {
  let { user, loading } = useContext(AuthContext);
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
  return <Navigate to="/signin" replace></Navigate>;
}

export default Protectedroute;
