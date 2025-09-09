import { Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Home } from "./pages/Home"
import { Publish } from "./pages/Publish"
import { Read } from "./pages/Read"
import { ToastContainer, Slide } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/signin" Component={Signin}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/profile"></Route>
        <Route path="/publish" Component={Publish}></Route>
        <Route path="/read/:blogId" Component={Read}></Route>
        <Route path="/stories"></Route>
      </Routes>
      <ToastContainer 
       position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"            // "light" | "dark" | "colored"
        transition={Slide}         // Slide | Zoom | Flip | Bounce
        limit={3}  
      />
    </>
  )
}

export default App
