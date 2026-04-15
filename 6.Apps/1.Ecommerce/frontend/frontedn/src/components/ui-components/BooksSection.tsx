import { TextView } from "../styled-components/BoxView.styles";
import { colors } from "../../utililty/themeColor";
import { RowContainer } from "../styled-components/RowContainer.styles";
import { ArrowRightIcon } from "./SVGIcons";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../utililty/productApis";
import { useNavigate } from "react-router-dom";

type BooksSectionProps = {
  category?: string;
};

const BooksSection = (props: BooksSectionProps) => {
  const { category } = props;
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (category?: string) => {
      try {
        const response = await getAllProducts({
          limit: 12,
          category: category,
        });

        setProducts(response.data);
      } catch (error) {
        console.log("Book Section " + error);
      }
    };

    fetchProducts(category);
  }, [category]);

  return (
    <section
      className="books-section"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors.secondary.shades[9],
        height: "80vh",
      }}
    >
      <section
        style={{
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <TextView color={colors.neutral.shades[0]} fontWeight={800} size={32}>
          Top {category === "Books" ? category : category + " Products"}
        </TextView>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextView
            color={colors.neutral.shades[4]}
            fontWeight={400}
            size={20}
            flex={0.8}
          >
            Curated volumes from legendary authors and rising stars, selected
            for the discerning reader.
          </TextView>
          <TextView
            color={colors.primary.base}
            fontWeight={600}
            flex={0.3}
            textAlign={"center"}
            cursor = 'pointer'
            onClick = {() => {navigate(`/categories/${category}/products?page=1&limit=10`)}}
          >
            View Atrium Library <ArrowRightIcon />
          </TextView>
        </div>
        <RowContainer overflowX="scroll" padding={"4px"}>
          {products?.map((product) => {
            return <BookCard data={product} />;
          })}
          ;
        </RowContainer>
      </section>
    </section>
  );
};

export default BooksSection;
