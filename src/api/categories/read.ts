
import axios from "@/api/config";
import { useQuery } from 'react-query';


export const useCategories = ({search = "", page = 1} : { search?: string, page?: number }) => {


    return useQuery(['categories', 'read', page, search ], async () => {
        try {

            let result: Record<string, any> = {};
            let params: Record<string, any> = {
                page,
            }

            if(search.replaceAll(" ", "") !== "") {
                params["name[in]"] = search;
            }

            result = await axios.get('/categories', {params});

            return result.data || result;
            

        }
        catch(error) {
            console.log(error);
            return [];
        }
    })
}


