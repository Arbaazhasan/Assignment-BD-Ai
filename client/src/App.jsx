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

function App() {
  return (
    <div className='app' >
      <Header />
      <Banner />

      <ExploreCategoriesCarousels />

      <BannerCarousels />

      <ProductListing />

      <FeaturesSection />

      <PlanExpireyBanner />

      <CustomerReview />

      <Footer />


    </div>
  )
}

export default App
