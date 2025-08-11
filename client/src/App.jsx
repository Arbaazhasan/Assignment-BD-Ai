
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import './App.css'
import Banner from './components/Banner/Banner'
import BannerCarousels from './components/BannerCarousels/BannerCarousels'
import CustomerReview from './components/CustomerReview/CustomerReview'
import ExploreCategoriesCarousels from './components/ExploreCategoriesCarousels/ExploreCategoriesCarousels'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PlanExpireyBanner from './components/PlanExpireyBanner/PlanExpireyBanner'
import ProductListing from './components/ProductListing/ProductListing'
import Home from './Pages/Home/Home';
import ProductView from './Pages/ProductView/ProductView';


function App() {
  return (
    <div className='app' >
      <Router>
        <Header />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productview' element={<ProductView />} />
        </Routes>

      </Router>





    </div >
  )
}

export default App
