import { useEffect, useState, type MouseEvent } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import type { Product } from "../components/ui-components/ProductForm";
import BookCard from "../components/ui-components/BookCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../components/ui-components/SVGIcons";
import { TextView } from "../components/styled-components/BoxView.styles";
import { ColumnContainer } from "../components/styled-components/ColumnContainer.styles";
import { RowContainer } from "../components/styled-components/RowContainer.styles";
import { getAllProducts } from "../utililty/productApis";
import { colors } from "../utililty/themeColor";

const CategoryPage = () => {
  const { cat: categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const rating = searchParams.get("rating");

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const pageNumber = Number(page) || 1;
  const startItem = pageNumber===1 ? 1 : (pageNumber-1)*(Number(limit) || 10);
  const endItem = Math.min(totalCount, (pageNumber*(Number(limit)|| 10)));

  useEffect(() => {
    const fetchProducts = async (category?: string) => {
      try {
        const response = await getAllProducts({
          page: pageNumber,
          limit: Number(limit) || 10,
          category,
          search: query || undefined,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
          rating: rating ? Number(rating) : undefined,
          sortBy:
            (sortBy as "price" | "rating" | "createdAt" | "brand") ||
            "createdAt",
          sortOrder: (sortOrder as "ASC" | "DESC") || "DESC",
        });

        if (!response || typeof response === "string") {
          return;
        }

        const tp = Math.ceil(response.total / response.limit);
        setTotalCount(response.total);
        setTotalPages(tp || 1);
        setProducts(response.data as Product[]);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
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

  const handleLeftClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (pageNumber <= 1) {
      return;
    }

    const newPage = pageNumber - 1;
    navigate(
      `?q=${query || ""}&page=${newPage}&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
    );
  };

  const handlePageClick = (page: number) => {
    navigate(
      `?q=${query || ""}&page=${page}&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
    );
  };

  const handleRightClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (pageNumber >= totalPages) {
      return;
    }

    const newPage = pageNumber + 1;
    navigate(
      `?q=${query || ""}&page=${newPage}&limit=${limit || 10}&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "DESC"}`,
    );
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

  const getPageNumbers = () => {
    const maxVisible = 5;

    // ✅ FIX: show all pages if total is small
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    let start = Math.max(1, pageNumber - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <ColumnContainer>
      <TextView padding={"8px 16px"} size={40} fontWeight={800}>
        {(categoryName ? categoryName : query) ||
          (categoryName && query ? ` ${categoryName} -> ${query}` : "")}
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
          {products.map(({ id, brand }) => (
            <TextView
              key={`${brand}-${id ?? brand}`}
              cursor="pointer"
              onClick={() => handleBrandFilter(brand)}
            >
              {brand}
            </TextView>
          ))}
          <hr style={{ width: "100%" }} />
          <TextView size={25} fontWeight={700}>
            Rating
          </TextView>
          <TextView cursor="pointer" onClick={() => handleRatingFilter(4)}>
            4 Stars & above
          </TextView>
          <TextView cursor="pointer" onClick={() => handleRatingFilter(3)}>
            3 Stars & above
          </TextView>
          <TextView cursor="pointer" onClick={() => handleRatingFilter(2)}>
            2 Stars & above
          </TextView>
          <TextView cursor="pointer" onClick={() => handleRatingFilter(1)}>
            1 Star & above
          </TextView>
        </ColumnContainer>
        <ColumnContainer flex={0.85}>
          <RowContainer justifyContent="space-between" padding="10px">
            <TextView fontWeight = {800}>
              Showing {startItem} - {endItem} of {totalCount} products
            </TextView>
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
              <option value="price-ASC">Price Low to High</option>
              <option value="price-DESC">Price High to Low</option>
              <option value="rating-DESC">Top Rated</option>
            </select>
          </RowContainer>
          <RowContainer flexWrap={"wrap"} padding="8px">
            {products.map((product) => (
              <BookCard key={product.id ?? product.title} data={product} />
            ))}
          </RowContainer>
          <RowContainer padding="50px 0px 0px 0px" justifyContent="center">
            {/* Left Arrow */}
            <TextView
              padding={"12px"}
              backgroundColor={colors.neutral.shades[7]}
              cursor="pointer"
              opacity={pageNumber === 1 ? 0.5 : 1}
              onClick={handleLeftClick}
            >
              <ArrowLeftIcon size={35} />
            </TextView>

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
              <TextView
                key={page}
                padding={"18px 24px"}
                backgroundColor={
                  page === pageNumber
                    ? colors.primary.base
                    : colors.neutral.shades[7]
                }
                color={page === pageNumber ? "#fff" : "#000"}
                cursor="pointer"
                onClick={() => handlePageClick(page)}
              >
                {page}
              </TextView>
            ))}

            {/* Right Arrow */}
            <TextView
              padding={"4px"}
              backgroundColor={colors.neutral.shades[7]}
              cursor="pointer"
              opacity={pageNumber === totalPages ? 0.5 : 1}
              onClick={handleRightClick}
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
