import { Outlet } from 'react-router-dom'
import HeaderSection from '../components/ui-components/HeaderSection'
import Footer from '../components/ui-components/Footer'

const MainLayout = () => {
  return (
    <div>
      <HeaderSection/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout