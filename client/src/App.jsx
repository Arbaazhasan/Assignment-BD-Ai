import './App.css'
import Banner from './components/Banner/Banner'
import BannerCarousels from './components/BannerCarousels/BannerCarousels'
import ExploreCategoriesCarousels from './components/ExploreCategoriesCarousels/ExploreCategoriesCarousels'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
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


    </div>
  )
}

export default App
