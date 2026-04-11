import { TextView } from '../styled-components/BoxView.styles'
import { colors } from '../../utililty/themeColor'
import { RowContainer } from '../styled-components/RowContainer.styles'
import { ArrowRightIcon } from './SVGIcons'
import BookCard from './BookCard'

const BooksSection = () => {
  return (
    <section className='books-section' style={{display: "flex", justifyContent: "center", backgroundColor: colors.secondary.shades[9], height: '80vh'}}>
        <section style={{width: "85vw", display: 'flex', flexDirection: 'column', justifyContent: 'center',  gap: "10px"}}>
            <TextView color = {colors.neutral.shades[0]} fontWeight = {800} size = {32}>Top Books</TextView>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <TextView color = {colors.neutral.shades[4]} fontWeight = {400} size = {20}>Curated volumes from legendary authors and rising stars, selected for the discerning reader.</TextView>
              <TextView color = {colors.primary.base} fontWeight = {600} textAlign={'center'}>View Atrium Library <ArrowRightIcon/></TextView>
            </div>
            <RowContainer overflowX = 'auto'>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </RowContainer>
        </section>
      </section>
  )
}

export default BooksSection;