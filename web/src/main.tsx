import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ErrorPage, NewsletterSignup } from "./routes/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsletterSignup />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
