import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { colors } from "../../utililty/themeColor";
import type { Product } from "./ProductForm";
import { useCart } from "../../pages/CartContext";
import { ColumnContainer } from "../styled-components/ColumnContainer.styles";
import { TextView } from "../styled-components/BoxView.styles";
import { RowContainer } from "../styled-components/RowContainer.styles";
import { CartIcon, HeartIcon, MinusIcon, PlusIcon } from "./SVGIcons";

type BookCardProps = {
  data: Product;
};

const quantityButtonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  border: "none",
  background: "transparent",
  color: colors.neutral.shades[1],
  cursor: "pointer",
  padding: 0,
} as const;

const BookCard = ({ data }: BookCardProps) => {
  const { cartItems, addToCart, decrementCartItem } = useCart();

  const cartItem = cartItems.find((item) => item.id === data.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(data);
  };

  const handleDecrement = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    decrementCartItem(data.id);
  };

  const handleIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(data);
  };

  return (
    <ColumnContainer
      flex={1 / 8}
      padding={"4px 8px"}
      position={"relative"}
      boxShadow={"0px 0px 3px 0px"}
    >
      <Link
        to={`/products/${data.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={data.image}
          height="300px"
          width="250px"
          style={{ padding: "4px 8px", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", right: "28px", top: "20px" }}>
          <HeartIcon size={30} />
        </div>
        <TextView padding={"0px 8px"}>{data.title}</TextView>
        <TextView padding={"0px 8px"}>{data.category}</TextView>
      </Link>
      <RowContainer padding={"0px 8px"} alignItems="center">
        <TextView>{data.price}</TextView>
        {quantity > 0 ? (
          <RowContainer
            alignItems="center"
            justifyContent="center"
            background={colors.neutral.shades[8]}
            borderRadius="999px"
          >
            <button type="button" onClick={handleDecrement} style={quantityButtonStyle}>
              <MinusIcon size={16} />
            </button>
            <TextView
              padding={"4px 0"}
              backgroundColor={colors.neutral.shades[8]}
              color={colors.neutral.shades[1]}
              size={16}
              style={{ minWidth: "20px", justifyContent: "center" }}
            >
              {quantity}
            </TextView>
            <button type="button" onClick={handleIncrement} style={quantityButtonStyle}>
              <PlusIcon size={16} />
            </button>
          </RowContainer>
        ) : (
          <button
            type="button"
            onClick={handleAddToCart}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              background: colors.neutral.shades[8],
              borderRadius: "999px",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              color: colors.neutral.shades[1],
            }}
          >
            <CartIcon size={20} />
          </button>
        )}
      </RowContainer>
    </ColumnContainer>
  );
};

export default BookCard;
