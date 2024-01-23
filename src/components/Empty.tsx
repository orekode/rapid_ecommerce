import { Img } from '.'

const Empty = ({ load=false, image = "/images/no_result.png" , title="No Results Found", size="300" } : { load?: boolean, image?: string, title?: string, size?: string | number}) => {

    if(load)
    return (
        <div className={`min-h-[${size}px] p-12 flex-col flex-center`}>
            <div className={`h-[${size}px] w-[${size}px] overflow-hidden pear-1`}>
                <Img.Cover src={image} />
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
        </div>
    )
}

export default Empty