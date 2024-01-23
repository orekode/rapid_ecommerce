import { ImagePlus, X } from "lucide-react"
import { Img, Scroll } from "."
import { ChangeEvent, useEffect, useRef, useState } from "react"

import { keyExists } from "@/utils/Search";


export const Image = ({ init='' , onUpload = (x: FileList) => {x}, size="md", onClear = undefined } : { onUpload?: any, init?: string | File | null, size?: string, onClear?: any }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    if(init instanceof File) {
        init = URL.createObjectURL(init);
    }

    const [ image , setImage ] = useState<string | null>(init);

    useEffect(() => {
      if(init instanceof File) {
          init = URL.createObjectURL(init);
      }

      setImage(init);
    }, [init]);

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


export const SlideImage = ({ onUpload, errors, init, prevCallback } : {onUpload: any, errors?: any, init?: string[], prevCallback?: any}) => {

    const [uploadImages, setUploadImages ] = useState<Array<File | FileList>>([]);

    const [previousImages, setPreviousImages] = useState<string[]>([]);

    const handleImageUpload = (index: number, image: File | FileList) => {
        let images: Array<File | FileList> = [];
    
        if (uploadImages) images = [...uploadImages];
    
        images[index] = image;
    
        setUploadImages(images);
      }
    
    const handleImageRemove = (index: number) => {
        let images = [...uploadImages];
    
        setUploadImages(images.filter((_, i) => index !== i));
    }

    const handleRemovePrevious = (index: number) => {
      const copy = [...previousImages.filter((_, i) => i !== index)];

      setPreviousImages(copy);
    }

    useEffect(() => onUpload(uploadImages), [uploadImages]);

    useEffect(() => {
      if(init)
      setPreviousImages(init);
    }, [init])

    useEffect(() => prevCallback && prevCallback(previousImages), [previousImages]);

    let size = 5 - previousImages.length;
    size = size >=0 ? size : 0;

    return (
        <Scroll.SideBtns>

          {previousImages.map( (item, index) => 
            <div key={index} className="h-[150px] w-[150px] relative border-2 border-gray-400 dark:border-neutral-800">
              <img src={item} alt="" className="img-cover" />
              <div onClick={() => handleRemovePrevious(index)} className="absolute top-1 right-1 h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white z-20">
                <X />
              </div>
            </div>
          )}
          {Array.from({ length: size }, (_, index) =>
            <div key={index} className="h-[150px] w-[150px] border-2 border-gray-400 dark:border-neutral-800">
              <Image
                onClear={() => handleImageRemove(index)}
                onUpload={(image: FileList) => handleImageUpload(index, image[0])}
                size="xs"
              />
              <div className="text-xs text-red-400">{keyExists(errors, `images.${index}`) ? errors[`images.${index}`] : ""}</div>
            </div>
          )}
        </Scroll.SideBtns>
    );
}