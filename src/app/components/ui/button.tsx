type props = {
    label: string
    size: 1 | 2 | 3
    handleButton?: () => void
}

export const Button = ({label,size,handleButton}:props) =>{
    return(
        <div className={`flex justify-center items-center cursor-pointer opacity-80 hover:opacity-100 text-gray-400 bg-gray-200 rounded-3xl font-bold ${size === 1 && 'h-12 text-lg'}`}
        onClick={handleButton}
        >
         {label}
        </div>
    )
}