import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { useAuth } from "./context/AuthProvider/useAuth.tsx";


function App() {
  const auth = useAuth()

  return (
    <>
      {auth.contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
