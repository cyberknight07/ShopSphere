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
  console.log(categoryName);

  const query = searchParams.get("q");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder");

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const rating = searchParams.get("rating");
  const [products, setProducts] = useState([]);
  const [brands, setbrands] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const pageNumber = Number(page) || 1;


  useEffect(() => {
    const fetchProducts = async (category?: string) => {
      console.log("Inside ", category);
      try {
        const response = await getAllProducts({
          page: pageNumber,
          limit: Number(limit) || 10,
          category: category,
          search: query || undefined,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
          rating: rating ? Number(rating) : undefined,
          sortBy: (sortBy as any) || "createdAt",
          sortOrder: (sortOrder as any) || "DESC",
        });

        const tp = Math.ceil(response?.total / response?.limit); // TODO - Inncomplete - Fail when completely divisible.
        setTotalPages(tp);

        // brands



        setProducts(response.data);
      } catch (error) {
        console.log("Book Section " + error);
      }
    };

    fetchProducts(categoryName);
  }, [
    categoryName,
    pageNumber,
    limit,
    sortBy,
    sortOrder,
    query,
    minPrice,
    maxPrice,
    rating,
  ]);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    if (pageNumber <= 1) {
      // Do nothing show toaster
    } else {
      const newPage = pageNumber - 1;
      navigate(
        `?q=${query || ""}&page=${newPage}&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
      );
    }
  };
  const handleRightClick = (e: any) => {
    e.preventDefault();
    if (pageNumber >= totalPages) {
      // Do nothing show toaster
    } else {
      const newPage = pageNumber + 1;
      navigate(
        `?q=${query || ""}&page=${newPage}&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
      );
    }
  };

  const handleRatingFilter = (value: number) => {
    navigate(
      `?q=${query || ""}&page=1&limit=${limit || 10}&rating=${value}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
    );
  };
  const handleBrandFilter = (value: string) => {
    navigate(
      `?q=${value}&page=1&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
    );
  };
  

  return (
    <ColumnContainer>
      <TextView padding={"8px 16px"} size={40} fontWeight={800}>
        {(categoryName ? categoryName : query) || (categoryName && query ?` ${categoryName} -> ${query}`: '')} // incomplete
      </TextView>
      <RowContainer alignItems="flex-start" padding="8px">
        <ColumnContainer
          flex={0.15}
          padding={"8px"}
          position={"sticky"}
          top={"0px"}
        >
          <TextView size={25} fontWeight={700} >
            Brand
          </TextView>
          {
            products.map(({brand}) => {
              return (<TextView cursor="pointer" onClick={() => handleBrandFilter(brand)}>
            {brand}
          </TextView>)
            })
          }
          <hr style={{ width: "100%" }} />
          <TextView size={25} fontWeight={700}>
            Rating
          </TextView>
          <TextView cursor="pointer" onClick={() => handleRatingFilter(4)}>
            ⭐ 4 Stars & above
          </TextView>

          <TextView cursor="pointer" onClick={() => handleRatingFilter(3)}>
            ⭐ 3 Stars & above
          </TextView>

          <TextView cursor="pointer" onClick={() => handleRatingFilter(2)}>
            ⭐ 2 Stars & above
          </TextView>

          <TextView cursor="pointer" onClick={() => handleRatingFilter(1)}>
            ⭐ 1 Star & above
          </TextView>
        </ColumnContainer>
        <ColumnContainer flex={0.85}>
          <RowContainer justifyContent="flex-end" padding="10px">
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [sb, so] = e.target.value.split("-");

                navigate(
                  `?q=${query || ""}&page=1&limit=${limit || 10}&sortBy=${sb}&sortOrder=${so}`,
                );
              }}
            >
              <option value="createdAt-DESC">Newest</option>
              <option value="price-ASC">Price Low → High</option>
              <option value="price-DESC">Price High → Low</option>
              <option value="rating-DESC">Top Rated</option>
            </select>
          </RowContainer>
          <RowContainer flexWrap={"wrap"} padding="8px">
            {products?.flatMap((product) => {
              console.log(product);
              return <BookCard data={product} />;
            })}
          </RowContainer>
          <RowContainer padding="50px 0px 0px 0px " justifyContent="center">
            <TextView
              padding={"12px"}
              backgroundColor={colors.neutral.shades[7]}
              cursor="pointer"
              opacity={pageNumber === 1 ? 0.5 : 1}
              onClick={(e) => handleLeftClick(e)}
            >
              <ArrowLeftIcon size={35} />
            </TextView>
            <TextView
              padding={"18px 24px"}
              backgroundColor={colors.neutral.shades[7]}
            >
              {pageNumber || 1}
            </TextView>
            <TextView
              className="right-icon"
              padding={"4px"}
              backgroundColor={colors.neutral.shades[7]}
              cursor="pointer"
              opacity={pageNumber === totalPages ? 0.5 : 1}
              onClick={(e) => handleRightClick(e)}
            >
              <ArrowRightIcon size={50} />
            </TextView>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </ColumnContainer>
  );
};

export default CategoryPage;
