import type { Product } from "../components/ui-components/ProductForm";
import { useCart } from "./CartContext";

type CartIconProps = {
  product?: Product;
};

const CartIcon = ({ product }: CartIconProps) => {
  const { cartItems, toggleCart, addToCart } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const handleClick = () => {
    if (product) {
      addToCart(product);
      return;
    }

    toggleCart();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        padding: '4px 8px'
      }}
    >
      <span role="img" aria-label="cart" style={{ fontSize: "24px" }}>
        {"\u{1F6D2}"}
      </span>
      {!product && totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "0px",
            right: "-1px",
            background: "#ff4757",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
