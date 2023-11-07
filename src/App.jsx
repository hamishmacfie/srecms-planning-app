import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import CalendarPage from "./pages/CalendarPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        index: true,
        element: <CalendarPage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
