
import axios from "@/api/config";
import { AxiosError } from "axios";

export const createProduct = async ({ formData } : { formData: Record<string, any>, }) => {

    try {

        const result = await axios.post('/products', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
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