import axios from "@/api/config";
import { AxiosError } from "axios";



export const createTag = async ({ data } : { data: Record<string, any>}) => {
    try {
        const response = await axios.post('/tags', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return [response.status == 200 || response.status == 201, response];
        
    }
    catch(error) {
        console.log(error);

        if(error instanceof AxiosError)
            return [false, error.response?.data?.errors]

        return [false, "Unabe to Create Product"]
    }
}