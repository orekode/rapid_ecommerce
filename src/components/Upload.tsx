import { ImagePlus } from "lucide-react"
import { Btn, Img } from "."
import { ChangeEvent, useRef, useState } from "react"




export const Image = ({ onUpload = (x: FileList) => {x} } : { onUpload?: any }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [ image , setImage ] = useState<string | null>('');

    const handleImage = (event: ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;

        if(!files) return false;

        const url = URL.createObjectURL(files[0]);
        setImage(url);
        onUpload(files);
    }

  return (
    <div className="relative overflow-hidden h-full w-full">
        <div onClick={() => inputRef.current ? inputRef.current.click() : ""} className="absolute bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-50 top-0 left-0 h-full w-full z-10 flex-center flex-col">
            <ImagePlus strokeWidth={0.75} size={120}/>
            <div className="my-0.5"></div>
            <span className="dark:text-gray-300 text-gray-500 font-bold">Click To Upload An Image</span>
            <input ref={inputRef} onChange={handleImage} type="file" accept="image/*" className="w-0 h-0 overflow-hidden" />
        </div>

        <div className="absolute top-0 left-0 h-full w-full z-0">
            {image && <Img.Cover src={image} />}
        </div>
    </div>
  )
}
