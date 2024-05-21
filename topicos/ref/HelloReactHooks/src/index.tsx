import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./pages/app/App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Simple from "./components/Simple"
import SimpleWithParam from "./components/SimpleWithParam"
import NewPage from "./pages/simple/NewPage"
import HooksPage from "./pages/hooks/Hooks"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/simple/1",
    element: <Simple />,
  },
  {
    path: "/simple/2",
    element: <SimpleWithParam name={"Quero Café"} />,
  },
  {
    path: "/new",
    element: <NewPage />,
  },
  {
    path: "/hooks",
    element: <HooksPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
