
const Button = ({ disabled, onClick,title }: { disabled?: boolean, onClick?: () => void ,title:string}) => {
  return (
    <button onClick={onClick} className={`rounded-md w-full text-white h-12 flex items-center justify-center ${disabled ? " bg-gray-500" : "bg-blue-950"}`} >{title}</button>
  )
}

export default Button