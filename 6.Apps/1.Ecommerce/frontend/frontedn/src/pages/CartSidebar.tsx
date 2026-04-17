import { useCart } from "./CartContext";

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      {isCartOpen && (
        <div
          onClick={toggleCart}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: isCartOpen ? '0px' : "-10000px",
          width: "100%",
          maxWidth: "400px",
          height: "97vh",
          backgroundColor: "white",
          boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
          transition: "right 0.3s ease-in-out",
          zIndex: 1000,
          display: "flex",
          
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
          }}
        >
          <h2>Your Cart</h2>
          <button
            onClick={toggleCart}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "18px",
            }}
          >
            x
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", marginTop: "20px" }}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id ?? item.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    color: "red",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: "20px",
            marginTop: "auto",
          }}
        >
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
