import { Outlet } from 'react-router-dom'
import HeaderSection from '../components/ui-components/HeaderSection'
import Footer from '../components/ui-components/Footer'
import {CartProvider} from '../pages/CartContext';
import CartSidebar from '../pages/CartSidebar';

const MainLayout = () => {
  return (
    <CartProvider>
      <CartSidebar />
      <HeaderSection/>
      <Outlet/>
      <Footer/>
    </CartProvider>
  )
}

export default MainLayout