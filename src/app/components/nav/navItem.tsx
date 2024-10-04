import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


type props = {
    href: string
    icon?: IconDefinition
    label?: string
}

export const NavItem = ({href,icon,label}:props) =>{
    return(
        <Link href={href} className="flex items-center mx-2 opacity-70 hover:opacity-100 mb-4">
            {icon && <FontAwesomeIcon icon={icon} className="size-6 mr-3"/>} 
            {label}
        </Link>
    )
}