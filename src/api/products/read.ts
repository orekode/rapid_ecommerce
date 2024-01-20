
import axios from "@/api/config";
import { useQuery } from "react-query";


export const useProducts = ({ page=1 }) => {
    return useQuery(['products', page], async () => {

        try {

            const response = await axios.get('/products', {
                params: {
                    page
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


export const useProduct = ({ id }: { id: number | string }) => {
    return useQuery(['product', 'read', id], async () => {
        try {

            const response = await axios.get(`/products/${id}`);
    
            return response.data.data || response.data || response;
        }
        catch(error) {
            console.log(error);
            return []
        }
    });
}