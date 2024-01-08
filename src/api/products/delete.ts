
import axios from "@/api/config";
import { AxiosError } from "axios";

export const deleteProduct = async ({  id } : {  id: string | number }) => {

    try {

        const result = await axios.post(`/products/${id}`, {}, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            params: {
                "_method": "delete"
            }
        });

        console.log(result);


        return [result.status == 200 || result.status == 201, result];
    }
    catch(error) {
        console.log(error);

        if(error instanceof AxiosError)
            return [false, error.response?.data?.message]

        return [false, "Unabe to Create Category"]
    }
    
}