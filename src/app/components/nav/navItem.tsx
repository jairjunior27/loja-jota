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
        <Link href={href}>
            {icon && <FontAwesomeIcon icon={icon} className="size-6"/>} 
            {label}
        </Link>
    )
}