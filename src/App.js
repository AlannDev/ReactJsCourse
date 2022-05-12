import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from "react-router-dom"
import CartProvider from "./context/cartContext"

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <Main/>
        <Footer/>
        <ToastContainer/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
