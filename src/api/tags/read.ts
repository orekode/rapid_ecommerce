import axios  from "@/api/config";
import { useQuery } from "react-query";



export const useTags = ({ page=1 }) => {
    return useQuery(['tags', page], async () => {

        try {

            const response = await axios.get('/tags', {
                params: {
                    page,
                }
            });

            return response.data || response;
        }
        catch(error) {
            console.log(error);
            return []
        }

    })
}

export const useTag = ({ id } : { id: number | string | undefined }) => {

    if(id)
    return useQuery(['tag', 'read', id], async () => {

        try {

            const response = await axios.get(`/tags/${id}`);

            return response.data.data || response.data || response;
        }
        catch(error) {
            console.log(error);
            return {}
        }
    })

    return { data: {} };
} 