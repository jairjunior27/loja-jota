import Image from "next/image"
import Link from "next/link"

type props = {
    size: number
}

export const Logo = ({size}:props) =>{
    return(
        <Link href='/' className="mr-3">
           
            <Image
            src={'/logo.png'}
            alt="logo-jota"
            width={size}
            height={size}
            quality={100}
            />
        </Link>
    )
}