import { createBrowserRouter } from "react-router-dom"
import App from "./pages/App";
import CharacterDetail from "./pages/CharacterDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: (
            <App/>
            )
        },
        {
          path: ':id',
          element: (
            <CharacterDetail/>
          )
        }
      ]
    }
  ]);
