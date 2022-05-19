import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from "react-router-dom"
import CartProvider from "./context/cartContext"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNnphPunGgfVrMD40MkWRarjQ61bfHyCQ",
  authDomain: "ecomerce-app-dc396.firebaseapp.com",
  projectId: "ecomerce-app-dc396",
  storageBucket: "ecomerce-app-dc396.appspot.com",
  messagingSenderId: "65576057958",
  appId: "1:65576057958:web:95138c62759ce69e6941a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
