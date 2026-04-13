import React from 'react'
import { ColumnContainer } from '../components/styled-components/ColumnContainer.styles'
import { RowContainer } from '../components/styled-components/RowContainer.styles'
import { TextView } from '../components/styled-components/BoxView.styles'
import BookCard from '../components/ui-components/BookCard'
import { useParams, useSearchParams } from 'react-router-dom'

const CategoryPage = () => {

  const {cat:categoryName} = useParams();
  const [searchParams] = useSearchParams(); 

  const query = searchParams.get('q');

  return (
    <ColumnContainer>
      <TextView padding = {'8px 16px'} size={40} fontWeight = {800}>{categoryName ? categoryName : query}</TextView>
      <RowContainer alignItems = 'flex-start' padding = '8px'>
        <ColumnContainer flex = {0.15} padding = {'8px'}>
          <TextView size={25} fontWeight = {700}>Brand</TextView>
          <TextView>Brand</TextView>
          <TextView>Brand</TextView>
          <TextView>Brand</TextView>
          <hr style={{width: '100%'}}/>
          <TextView  size={25} fontWeight = {700}>Rating</TextView>
          <TextView>4 Stars or more</TextView>
          <TextView>3 stars to 4 stars</TextView>
          <TextView>2 Stars to 3 stars</TextView>
          <TextView>Less than 2 stars</TextView>
        </ColumnContainer>
        <ColumnContainer flex = {0.85}>
          <RowContainer flexWrap = {'wrap'} padding = '8px'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </ColumnContainer>
  )
}

export default CategoryPage