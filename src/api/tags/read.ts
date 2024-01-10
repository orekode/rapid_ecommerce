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