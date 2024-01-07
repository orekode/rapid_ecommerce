import { ImagePlus, X } from "lucide-react"
import { Img } from "."
import { ChangeEvent, useRef, useState } from "react"




export const Image = ({ init='' , onUpload = (x: FileList) => {x}, size="md", onClear = undefined } : { onUpload?: any, init?: string | File | null, size?: string, onClear?: any }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    if(init instanceof File) {
        init = URL.createObjectURL(init);
    }

    const [ image , setImage ] = useState<string | null>(init);

    const handleImage = (event: ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;

        if(!files) return false;

        const url = URL.createObjectURL(files[0]);
        setImage(url);
        onUpload(files);
    }

    const handleClear = () => {
        setImage("");
        onClear();
    }


  if(size=="md")

  return (
    <div className="relative overflow-hidden h-full w-full">
        <div onClick={() => inputRef.current ? inputRef.current.click() : ""} className="absolute bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-50 top-0 left-0 h-full w-full z-10 flex-center flex-col">
            <ImagePlus strokeWidth={0.75} size={120}/>
            <div className="my-0.5"></div>
            <span className="dark:text-gray-300 text-gray-500 font-bold text-center">Click To Upload An Image</span>
            <input ref={inputRef} onChange={handleImage} type="file" accept="image/*" className="w-0 h-0 overflow-hidden" />
        </div>

        <div className="absolute top-0 left-0 h-full w-full z-0">
            {(image && image.replaceAll(" ", "") !== '') && <Img.Cover src={image} />}
        </div>
    </div>
  )
  else return (
    <div className="relative overflow-hidden h-full w-full">
        <div onClick={() => inputRef.current ? inputRef.current.click() : ""} className="absolute bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-50 top-0 left-0 h-full w-full z-10 flex-center flex-col">
            <ImagePlus strokeWidth={0.75} size={90}/>
            <div className="my-0.5"></div>
            <span className="dark:text-gray-300 text-gray-500 font-bold text-xs text-center">Click To Upload An Image</span>
            <input ref={inputRef} onChange={handleImage} type="file" accept="image/*" className="w-0 h-0 overflow-hidden" />
        </div>
        {onClear && 
            <div onClick={handleClear} className="absolute top-1 right-1 h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white z-20">
                <X />
            </div>
        }

        <div className="absolute top-0 left-0 h-full w-full z-0">
            {(image && image.replaceAll(" ", "") !== '') && <Img.Cover src={image} />}
        </div>
    </div>
  )
}
