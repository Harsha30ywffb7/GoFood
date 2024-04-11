import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import Support from "./Components/Support";
import RestarauntMenu from "./Components/RestarauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Instamart = lazy(() => import("./Components/Instamart"));
const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      userName: "Chinna",
    };

    setUserName(data.userName);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <userContext.Provider value={{ username: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestarauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
root.render(<RouterProvider router={AppRouter} />);
