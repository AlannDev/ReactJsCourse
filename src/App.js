import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
