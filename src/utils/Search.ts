import { Debounce } from "@/utils";


export const handleSearch = (value: any, setSearch: any ) => {

    Debounce({ 
        callback: () => setSearch(value) 
    });

}

export const keyExists = (Obj: object, key: string) => {
    
    if(!Obj) return false;

    let keys = Object.keys(Obj);

    return keys.includes(key);
}