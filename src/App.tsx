import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import DashboardLayout from "./layout/DashboardLayout";
import SideBar from "pages/SideBar";
import Content1 from "pages/Content1";
import Content2 from "pages/Content2";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Content1 />,
          errorElement: <Error />,
        },
        {
          path: "page-1",
          element: <Content1 />,
        },
        {
          path: "page-2",
          element: <Content2 />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
