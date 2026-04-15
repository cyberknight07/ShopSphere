import React, { useEffect, useState } from "react";
import { ColumnContainer } from "../components/styled-components/ColumnContainer.styles";
import { RowContainer } from "../components/styled-components/RowContainer.styles";
import { TextView } from "../components/styled-components/BoxView.styles";
import BookCard from "../components/ui-components/BookCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getAllProducts } from "../utililty/productApis";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../components/ui-components/SVGIcons";
import { colors } from "../utililty/themeColor";

const CategoryPage = () => {
  const { cat: categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sort = searchParams.get("sort");
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  // const [pageNumber, setPageNumber] = useState<number>(1);
  const pageNumber = Number(page) || 1;

  
  useEffect(() => {
    const fetchProducts = async (category?: string) => {
      try {
        const response = await getAllProducts({
          page: pageNumber,
          limit: Number(limit),
          category: category,
          sort: sort || 'asc'
        });
        const tp = Math.ceil(response?.total / response?.limit); // TODO - Inncomplete - Fail when completely divisible.
        setTotalPages(tp);
        setProducts(response.data);
      } catch (error) {
        console.log("Book Section " + error);
      }
    };

    fetchProducts(categoryName);
  }, [categoryName, pageNumber]);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    if(pageNumber <= 1) {
      // Do nothing show toaster      
    } else{
      const newPage = pageNumber - 1;
      navigate(`?q=${query || ''}&page=${newPage}&limit=${limit || 10}&sort={sort || asc}`);
    }
  }
  const handleRightClick = (e: any) => {
    e.preventDefault();
    if(pageNumber >= totalPages) {
      // Do nothing show toaster      
    } else{
      const newPage = pageNumber + 1;
      navigate(`?q=${query || ''}&page=${newPage}&limit=${limit || 10}&sort=${sort || 'asc'}`);
    }
  }

  return (
    <ColumnContainer>
      <TextView padding={"8px 16px"} size={40} fontWeight={800}>
        {categoryName ? categoryName : query}
      </TextView>
      <RowContainer alignItems="flex-start" padding="8px">
        <ColumnContainer
          flex={0.15}
          padding={"8px"}
          position={"sticky"}
          top={"0px"}
        >
          <TextView size={25} fontWeight={700}>
            Brand
          </TextView>
          <TextView>Brand</TextView>
          <TextView>Brand</TextView>
          <TextView>Brand</TextView>
          <hr style={{ width: "100%" }} />
          <TextView size={25} fontWeight={700}>
            Rating
          </TextView>
          <TextView>4 Stars or more</TextView>
          <TextView>3 stars to 4 stars</TextView>
          <TextView>2 Stars to 3 stars</TextView>
          <TextView>Less than 2 stars</TextView>
        </ColumnContainer>
        <ColumnContainer flex={0.85}>
          <RowContainer flexWrap={"wrap"} padding="8px">
            {products?.flatMap((product) => {
              return <BookCard data={product} />;
            })}
          </RowContainer>
          <RowContainer padding="50px 0px 0px 0px " justifyContent = "center">
            <TextView  padding={'12px'} backgroundColor = {colors.neutral.shades[7]} cursor = 'pointer' opacity = {pageNumber === 1 ? 0.5 : 1} onClick = {(e) => handleLeftClick(e)} >
              <ArrowLeftIcon size={35}/>
            </TextView>
            <TextView  padding={'18px 24px'} backgroundColor = {colors.neutral.shades[7]}>
              {pageNumber || 1  }
            </TextView>
            <TextView className = 'right-icon' padding={'4px'} backgroundColor = {colors.neutral.shades[7]} cursor = 'pointer' opacity = {pageNumber === totalPages ? 0.5 : 1} onClick = {(e) => handleRightClick(e)}>
              <ArrowRightIcon  size={50} />
            </TextView>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </ColumnContainer>
  );
};

export default CategoryPage;
