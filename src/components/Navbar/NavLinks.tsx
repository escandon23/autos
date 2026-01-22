import { Link } from "react-router"

interface NavLinksProp {
    currentPath : string,
    isMenuOpen? : boolean,
}

interface NavLinksType {
    name : string,
    href : string
}


const NavLinks : React.FC<NavLinksProp>  = ({currentPath , isMenuOpen}) => {

    const navLinks : NavLinksType[] = [
        {name : "Home" , href : "/"},
        {name : "Vehicles" , href : "/vehicles"},
        {name : "Blogs" , href : "/blogs"},
        {name : "Contacts" , href : "/contacts"}

    ]
 
    return(
            <div className={
                `transition-colors duration-300 
                ${isMenuOpen ? "fixed top-16 inset-0 z-50 bg-black flex px-5 justify-start pl-5" :
                "invisible lg:visible lg:flex justify-center" }`}
            >
            <ul className={
                `transition-opacity ease-in-out duration-900 
                ${isMenuOpen ? "w-full opacity-100 flex-col space-y-30 mt-10 text-xl" :
                "lg:opacity-100 opacity-0 flex space-x-20"} `}
            >
            {navLinks.map((link , index) => {
                const activeLink = link.href === currentPath     
                return  <li 
                    key={index} 
                    className={
                        `hover:border-b-4 pb-2 
                        ${activeLink && isMenuOpen ? "font-bold text-gray-400" : 
                        isMenuOpen ? "text-white " :
                        activeLink ? "font-bold text-gray-400" : ""
                        }`}
                    >
                <Link to={link.href}>{link.name}</Link></li>

                })}
            </ul>
        </div>
    )
}

export default NavLinks