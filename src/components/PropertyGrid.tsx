import { Input, Btn } from "@/components"
import { X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';


const PropertyGrid = ({ init=[], callback = (x: any) => { x } }: { callback?: any, init: { title: string, value: string }[] }) => {

    const [properties, setProperties] = useState<Array<Record<string, any>>>([]);
  
  
    const handleInsertProperty = (value: string, index: number, type = "title") => {
      const copyProp = [...properties];
      copyProp[index][type] = value;
      setProperties(copyProp);
    }
  
    const handleRemoveProperty = (index: number) => {
      const copyProp = [...properties];
      setProperties(copyProp.filter((_, i) => index !== i));
    }
  
    useEffect(() => {
      callback(properties);
    }, [properties])

    useEffect(() => {
      if(properties.length <= 0)
      setProperties(init.length > 0 ? init : [{}]);
    }, [init])
  
    return (
      <div className="px-12 max-[1000px]:px-3  py-3">
  
        <Btn.Sm onClick={() => setProperties([...properties, {}])} extraClass="rounded-md">Add Property</Btn.Sm>
  
        <div className={`grid-box-250 ${properties.length > 0 ? "mt-6" : ""} gap-x-6 gap-y-6`}>
  
          {properties.map((item, index) =>
            <div key={index} className="relative">
              <Input.Base value={item.title || ""} onChange={(event: ChangeEvent<HTMLInputElement>) => handleInsertProperty(event.target.value, index)} extraClass="w-full text-xs mb-1.5" placeholder={'Property Name'} />
              <Input.Base value={item.value || ""} onChange={(event: ChangeEvent<HTMLInputElement>) => handleInsertProperty(event.target.value, index, 'value')} extraClass="w-full text-sm" placeholder={'Property Value'} />
              <div onClick={() => handleRemoveProperty(index)} className="absolute right-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white">
                <X size={15} />
              </div>
            </div>
          )}
  
        </div>
      </div>
    );
  
}


export default PropertyGrid;