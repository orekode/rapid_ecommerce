


import { Debounce } from '@/utils';
import { ChangeEvent, useRef } from 'react'
import { Btn, Input } from '.';
import { Search } from 'lucide-react';

export const Lg = ({ callback } : { callback: any }) => {

    const inputRef = useRef<HTMLInputElement>();

    const handleSearch = (event: ChangeEvent<HTMLInputElement> ) => {

        Debounce({ 
            callback: () => callback(event.target.value) 
        });
    }


    const refetch = () => {

        if(!inputRef.current) return false;

        Debounce({ 
            callback: () => callback(inputRef.current?.value) 
        });
    }


    return (
        <div className="search-box flex h-[50px] my-3 gap-1.5">
            <Input.Base ref={inputRef} onChange={ handleSearch }/>
            <Btn.Icon onClick={ () => refetch() } extraClass="bg-blue-600 text-white  rounded-lg">
                <Search  />
            </Btn.Icon>
        </div>
    )
}
