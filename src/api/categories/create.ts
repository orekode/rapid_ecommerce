
import axios from "@/api/config";
import { AxiosError } from "axios";

export const createCategory = async ({ image, name, parent } : { image: File, name: string, parent: string }) => {

    try {

        const formData = new FormData();

        formData.append('image', image);
        formData.append('name', name);
        if(parent)
        formData.append('parent_id', parent);

        const result = await axios.post('/categories', formData, {
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
            return [false, error.response?.data?.message]

        return [false, "Unabe to Create Category"]
    }
    
}