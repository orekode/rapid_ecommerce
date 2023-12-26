
import { Img } from '.'

const Bg = ({ ...props }) => {
  return (
    <div className="h-full w-full absolute top-0 left-0 z-0">
        <Img.Cover {...props} />
    </div>
  )
}

export default Bg