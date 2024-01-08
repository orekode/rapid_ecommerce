import { useEffect, useState } from "react";
import { CategorySelect } from ".."
import { X } from "lucide-react";

const CategoryMultiSelect = ({ init=[], onSelect = (x: any) => {x}, error="", placeholder="" } : { init?: Record<string, any>[], onSelect: any, error?: string, placeholder?: string }) => {

    const [ categories, setCategories ] = useState<Record<string, any>[]>([]);

    const handleCategory = (record: Record<string, any>) => {
        let copy_categories: Record<string, any>[] = [];
    
        if (categories) copy_categories = [...categories];
    
        copy_categories.filter(item => item.value == record.value).length == 0 ?
        copy_categories.push(record) :
          "";
    
        setCategories(copy_categories);
    
    }
    
    const removeCategory = (value: any) => {
        let copy_categories = [...categories]
    
        copy_categories = copy_categories.filter(item => item.value !== value);
    
        setCategories(copy_categories);
    }

    useEffect(() => {
        if(categories.length <= 0) setCategories(init);
    }, [init]);
    useEffect(() => onSelect(categories), [categories]);

    return (
        <div className="w-full form-control flex-col flex gap-1.5 px-12 max-[1000px]:px-3 ">
            <label className="text-sm">Category <span className="text-red-400">*</span></label>
            <CategorySelect onSelect={handleCategory} placeholder={placeholder} />
            <div className="text-xs text-red-400">{error}</div>
            <div className={`flex flex-wrap gap-3 ${categories && categories.length > 0 ? "mt-3" : ""}`}>
            {categories && categories.map((item: Record<string, any>, index: number) =>
                <div key={index} className="px-3 py-1.5 rounded-md border text-xs flex items-center gap-3">
                <div className="">{item.label}</div>
                <div onClick={() => removeCategory(item.value)} className="  h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white">
                    <X size={15} />
                </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default CategoryMultiSelect