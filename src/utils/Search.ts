import { Debounce } from "@/utils";


export const handleSearch = (value: any, setSearch: any ) => {

    Debounce({ 
        callback: () => setSearch(value) 
    });

}