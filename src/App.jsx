import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export let FavContext = createContext(null);

function App() {
  console.log(`Rendered`);

  let [favstate, setFavstate] = useState();
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    let count = JSON.parse(localStorage.getItem("favorite"))?.length;
    console.log(count);
    setFavstate(count);
  }, [favstate]);

  return (
    <>
      <FavContext.Provider
        value={{ favstate, setFavstate, updated, setUpdated }}
      >
        <Header />
        <Outlet />
        <Footer />
      </FavContext.Provider>
    </>
  );
}

export default App;
