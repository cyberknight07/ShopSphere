import { ColumnContainer } from '../components/styled-components/ColumnContainer.styles'
import HeroSection from '../components/ui-components/HeroSection.tsx';
import BooksSection from '../components/ui-components/BooksSection.tsx';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../utililty/productApis.ts';


const Homepage = () => {

  const [categories, setCategories] = useState([]);

  useEffect(  () => {
    const fetchCategories = async () => {
          const data = await getAllCategories();
          setCategories(data);
        }

    
    try {
        fetchCategories();
    } catch (error) {
      console.log("Error ", error );
    }
  }, []);


  return (
    <ColumnContainer>
      <HeroSection/>
      {categories.map((category) => {
        return <BooksSection category = {category}/>
      })}

    </ColumnContainer>
  )
}

export default Homepage;