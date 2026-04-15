import type { Product } from "../components/ui-components/ProductForm";
import { apiInterface } from "./apiInterface"

type ProductParams = {
    page?: number,
    limit?: number,
    search?: string,
    category?: string ,
    sort?: string | number
}

export const getAllProducts = async (params?: ProductParams) => {
    const response = await apiInterface.get('/products', {params});
    
    if(response.data === null){
        return "Something went wrong in GetAllProducts."
    }

    return response.data;
} 

export const getProductById = async (id: number | string) => {
    const response = await apiInterface.get(`/products/${id}`);

    if(response.data === null){
        return "Something went wrong in GetProductById."
    }

    return response.data;
}

export const getAllCategories = async () => {
    const response = await apiInterface.get('/categories');

    if(response.data === null) {
        return 'Something went wrong in GetAllCategories'
    }
    return response.data;
}

export const postProduct = async (data: Product) => {
    const response = await apiInterface.post('/products', data);

    if(response.data === null){
        return 'Something went wrong in postProduct'
    }

    return response.data;
}

export const updateProduct = async (data: Product, id: string | number) => {
    const response = await apiInterface.patch(`/products/${id}`, data);

    if(response.data === null){
        return 'Something went wrong in postProduct'
    }

    return response.data;
}


/////////////////////////////////////////////////////////////////////////////////
//API FUNCTIONS

export const fetchProducts = async (category?: string) => {
      try {
        const response = await getAllProducts({
          limit: 12,
          category: category,
        });

        return response.data;
        
      } catch (error) {
        console.log("Book Section " + error);
        return ("Book Section " + error);
      }
    };


export const postProductFunc = async (data: Product) => {
   try {
    const res = await postProduct(data);
    
    return res.data;

  } catch (err) {
    
    return err;
  }
};

export const updateProductFunc = async (data: Product, id: string| number) => {
   try {
    const res = await updateProduct(data, id);
     
    return res.data;

  } catch (err) {
    
    return err;
  }
};