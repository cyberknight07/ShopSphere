import { useNavigate } from "react-router-dom";
import ProductForm, { type Product } from "../components/ui-components/ProductForm";
import { postProductFunc } from "../utililty/productApis";

const AddProduct = () => {

    const navigate = useNavigate();

 const handleCreate = async (data: Product) => {
    try {
      const res = await postProductFunc(data);

      console.log("Created Product:", res);

      // ✅ redirect after success
      navigate("/my-product");

    } catch (err) {
      console.error("Create failed:", err);
      alert("Failed to create product");
    }
  };

  return (
    <ProductForm
      onSubmit={(data) => {
        handleCreate(data)
      }}
      isEdit = {false}
    />
  );
};

export default AddProduct;