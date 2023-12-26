
export const Cover = ({ ...props }) => {
  return (
    <img className="object-cover h-full w-full relative z-10" {...props} />
  )
}


export const Contain = ({ ...props }) => {
    return (
      <img className="object-contain h-full w-full relative z-10" {...props} />
    )
  }
