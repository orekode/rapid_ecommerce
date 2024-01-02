
import axios from "@/api/config";
import { AxiosError } from "axios";

export const updateCategory = async ({ image, name, parent, id } : { image: File, name: string, parent: string, id: string | number }) => {

    try {

        const formData = new FormData();

        
        formData.append('name', name);

        if(typeof image == "object")
            formData.append('image', image);

        if(parent)
            formData.append('parent_id', parent);

        const result = await axios.post(`/categories/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            params: {
                "_method": "put"
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