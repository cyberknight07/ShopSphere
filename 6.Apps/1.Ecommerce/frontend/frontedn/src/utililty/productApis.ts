import { apiInterface } from "./apiInterface"

type ProductParams = {
    page?: number,
    limit?: number,
    search?: string,
    category?: string 
}

export const getAllProducts = async (params?: ProductParams) => {
    const response = await apiInterface.get('/products', {params});
    
    if(response.data === null){
        return "Something went wrong in GetAllProducts."
    }

    return response.data;
} 

export const getProductById = async (id: number) => {
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

