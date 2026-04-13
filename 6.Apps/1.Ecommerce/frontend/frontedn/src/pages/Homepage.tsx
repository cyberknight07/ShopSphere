import { ColumnContainer } from '../components/styled-components/ColumnContainer.styles'
import HeroSection from '../components/ui-components/HeroSection.tsx';
import BooksSection from '../components/ui-components/BooksSection.tsx';


const Homepage = () => {
  return (
    <ColumnContainer>
      <HeroSection/>
      <BooksSection/>

    </ColumnContainer>
  )
}

export default Homepage;