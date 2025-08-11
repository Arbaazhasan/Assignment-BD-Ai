import './App.css'
import Banner from './components/Banner/Banner'
import BannerCarousels from './components/BannerCarousels/BannerCarousels'
import ExploreCategoriesCarousels from './components/ExploreCategoriesCarousels/ExploreCategoriesCarousels'
import Header from './components/Header/Header'
import ProductListing from './components/ProductListing/ProductListing'

function App() {
  return (
    <div className='app' >
      <Header />
      <Banner />

      <ExploreCategoriesCarousels />

      <BannerCarousels />

      <ProductListing />


    </div>
  )
}

export default App
