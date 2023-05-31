import { BrowserRouter as Router, Routes, Route } from "../node_modules/react-router-dom/dist/index"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import ProductsPage from "./pages/ProductsPage"
import About from './pages/About'
import Contact from "./pages/Contact"
import ScrollToTop
 from "./pages/ScrollToTop"
function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
      <Sidebar />
      <Footer />
    </Router>
  )
}

export default App