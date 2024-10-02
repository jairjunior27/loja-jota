"use client"

import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type props = {
    type?: string
    onEnter?: () => void
    placeholder?: string
    value?: string
    onChange?: (newVaue: string) => void
    icon?: IconDefinition
    password?: boolean 
}
export const Input = ({type,onEnter,placeholder,value,onChange,icon,password}:props) =>{
return(
    <div className="">
    <input type="text"
    placeholder={placeholder}
    />
    {icon && <FontAwesomeIcon icon={icon}/>}
    </div>
)
}