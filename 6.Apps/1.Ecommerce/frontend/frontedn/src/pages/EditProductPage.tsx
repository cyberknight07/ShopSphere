import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProductFunc } from "../utililty/productApis";
import type { Product } from "../components/ui-components/ProductForm";
import ProductForm from "../components/ui-components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async (id: number | string) => {
      const res = await getProductById(id);
      setProduct(res.data);
    };

    fetchProduct(Number(id));
  }, [id]);

   const handleUpdate = async (data: Product) => {
      try {
        const res = await updateProductFunc(data, Number(data.id));
  
        console.log("Created Product:", res);

        navigate("/my-products");
  
      } catch (err) {
        console.error("Create failed:", err);
        alert("Failed to create product");
      }
    };
  

  if (!product) return <p>Loading...</p>;

  return (
    <ProductForm
      initialData={product}
      isEdit = {true}
      onSubmit={(data) => {
        handleUpdate(data)
      }}
    />
  );
};

export default EditProduct;