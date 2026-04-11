import React from "react";
import { ColumnContainer } from "../styled-components/ColumnContainer.styles";
import { TextView } from "../styled-components/BoxView.styles";
import { RowContainer } from "../styled-components/RowContainer.styles";
import { CartIcon, HeartIcon } from "./SVGIcons";
import { colors } from "../../utililty/themeColor";

const BookCard = () => {
  const data = {
    id: 152,
    title: "Penguin Atomic Habits Non-Fiction",
    description:
      "Buy the Penguin Atomic Habits Non-Fiction from Penguin. Non-Fiction engineered for quality and value. Ideal for books needs.",
    price: 16.04,
    category: "Books",
    rating: 1.9,
    stock: 88,
    brand: "Penguin",
    image: "",
    createdAt: "2025-08-31T05:00:05.452Z",
  };

  return (
    <ColumnContainer flex = {1/8} padding = {"4px 8px"} position = {'relative'} boxShadow = {'1px 1px 5px 1px'}>
      <img
        src={data.image}
        height="300px"
        width="250px"
        style={{ padding: "4px 8px", objectFit: 'cover'}}
      />
      <div style={{position:'absolute', right: '28px', top: '20px'}}><HeartIcon size={30}/></div>
      <TextView padding = {'0px 8px'}>{data.title}</TextView>
      <TextView padding = {'0px 8px'}>{data.category}</TextView>
      <RowContainer padding = {'0px 8px'}>
        <TextView>{data.price}</TextView>
        <TextView backgroundColor = {colors.neutral.shades[8]}><CartIcon/></TextView>
      </RowContainer>
    </ColumnContainer>
  );
};

export default BookCard;
