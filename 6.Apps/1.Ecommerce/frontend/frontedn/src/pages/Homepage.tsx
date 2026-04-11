import { ColumnContainer } from '../components/styled-components/ColumnContainer.styles'
import HeroSection from '../components/ui-components/HeroSection.tsx';
import BooksSection from '../components/ui-components/BooksSection.tsx';
import HeaderSection from '../components/ui-components/HeaderSection.tsx';


const Homepage = () => {
  return (
    <ColumnContainer>
      <HeaderSection/>
      <HeroSection/>
      <BooksSection/>

    </ColumnContainer>
  )
}

export default Homepage;