import { HashLink } from "react-router-hash-link"

interface NavLinksProp {
    currentPath : string,
    isMenuOpen? : boolean,
    toggleMenu? : () => void
}

interface NavLinksType {
    name : string,
    href : string
}


const NavLinks : React.FC<NavLinksProp>  = ({currentPath , isMenuOpen , toggleMenu}) => { 

    const navLinks : NavLinksType[] = [
        {name : "Home" , href : "/#"},
        {name : "Services" , href : "/#blogs"},
        {name : "Vehicles" , href : "/#vehicles"},
        {name : "Contacts" , href : "/#contacts"}

    ]
 
    return(
            <div className={
                `transition-colors duration-300 
                ${isMenuOpen ? "fixed top-16 inset-0 z-50 bg-black flex px-5 justify-start pl-5" :
                "hidden lg:visible lg:flex justify-center" }`}
            >
            <ul className={
                `transition-opacity ease-in-out duration-900 
                ${isMenuOpen ? "w-full flex-col space-y-30 mt-10 text-xl" : " flex space-x-20"} `}
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
                <HashLink to={link.href} onClick={toggleMenu}>{link.name}</HashLink></li>

                })}
            </ul>
        </div>
    )
}

export default NavLinks