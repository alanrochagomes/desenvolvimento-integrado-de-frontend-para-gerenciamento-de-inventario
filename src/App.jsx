import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    element: 
      (
      <>
        <div>
          <Header />
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/teste',
        element: <>Teste</>
      }
    ]
  }
])

export default function App() {
  return (
    <>
        <RouterProvider router={router} />
         <ToastContainer />
    </>
  );
}
