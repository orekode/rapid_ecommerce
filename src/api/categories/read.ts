
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

export const useSubCategories = ({ id, search="" } : { id: string | number, search?: string }) => {
    return useQuery(['categories', 'sub-categories', id, search ], async() => {
        try {
            let result: Record<string, any> = {};
            let params: Record<string, any> = {
                identifier: id,
            }

            if(search.replaceAll(" ", "") !== "") {
                params["name[in]"] = search;
            }

            result = await axios.get('/sub_categories', {params});

            return result.data || result;
        }
        catch(error) {
            console.log(error);
            return [];
        }

    });
}

export const useCategory = ({ id } : { id: number | string }) => {


    return useQuery(['category', 'read', id ], async () => {
        try {

            let result: Record<string, any> = {};

            result = await axios.get('/categories/' + id);

            return result.data || result;

        }
        catch(error) {
            console.log(error);
            return [];
        }
    })
}

