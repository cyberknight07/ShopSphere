import { useState } from "react";
import { ColumnContainer } from "../styled-components/ColumnContainer.styles";
import { TextView } from "../styled-components/BoxView.styles";

export type Product = {
  id?: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  brand: string;
  image: string;
  createdAt?: string;
};

type Props = {
  initialData?: Product;
  onSubmit: (data: Product) => void;
  isEdit?: boolean;
};

const defaultForm: Product = {
  title: "",
  description: "",
  price: 0,
  category: "",
  rating: 0,
  stock: 0,
  brand: "",
  image: "",
};

const ProductForm = ({ initialData, onSubmit, isEdit }: Props) => {
  const [form, setForm] = useState<Product>(initialData || defaultForm);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        ["price", "rating", "stock"].includes(name)
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <ColumnContainer
      padding="40px"
      alignItems="center"
      style={{ background: "#f5f6fa", minHeight: "100vh" }}
    >
      <ColumnContainer
        padding="30px"
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        {/* Title */}
        <TextView size={28} fontWeight={600} justifyContent="center" padding="0 0 20px 0">
          {isEdit ? "Update Product" : "Create Product"}
        </TextView>

        {/* Title Field */}
        <ColumnContainer margin="0 0 15px 0">
          <TextView size={14} fontWeight={500}>Title</TextView>
          <input name="title" value={form.title} onChange={handleChange} />
        </ColumnContainer>

        {/* Description */}
        <ColumnContainer margin="0 0 15px 0">
          <TextView size={14} fontWeight={500}>Description</TextView>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </ColumnContainer>

        {/* Grid Fields */}
        <ColumnContainer
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          <ColumnContainer>
            <TextView size={14} fontWeight={500}>Price</TextView>
            <input type="number" name="price" value={form.price} onChange={handleChange} />
          </ColumnContainer>

          <ColumnContainer>
            <TextView size={14} fontWeight={500}>Category</TextView>
            <input name="category" value={form.category} onChange={handleChange} />
          </ColumnContainer>

          <ColumnContainer>
            <TextView size={14} fontWeight={500}>Rating</TextView>
            <input type="number" name="rating" value={form.rating} onChange={handleChange} />
          </ColumnContainer>

          <ColumnContainer>
            <TextView size={14} fontWeight={500}>Stock</TextView>
            <input type="number" name="stock" value={form.stock} onChange={handleChange} />
          </ColumnContainer>
        </ColumnContainer>

        {/* Brand */}
        <ColumnContainer margin="15px 0">
          <TextView size={14} fontWeight={500}>Brand</TextView>
          <input name="brand" value={form.brand} onChange={handleChange} />
        </ColumnContainer>

        {/* Image */}
        <ColumnContainer margin="0 0 20px 0">
          <TextView size={14} fontWeight={500}>Image URL</TextView>
          <input name="image" type="file" value={form.image} onChange={handleChange} />
        </ColumnContainer>

        {/* Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          style={{
            padding: "12px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {isEdit ? "Update Product" : "Create Product"}
        </button>
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default ProductForm;