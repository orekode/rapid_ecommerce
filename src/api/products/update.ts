
import axios from "@/api/config";
import { AxiosError } from "axios";

export const updateProduct = async ({ formData, id } : { formData: Record<string, any>, id: number | string }) => {

    try {

        const result = await axios.post(`/products/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            params: {
                "_method" : "put"
            }
        });

        console.log(result);


        return [result.status == 200 || result.status == 201, result];
    }
    catch(error) {
        console.log(error);

        if(error instanceof AxiosError)
            return [false, error.response?.data?.errors]

        return [false, "Unabe to Create Product"]
    }
    
}