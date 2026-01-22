import { useState , useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavLogo from "./NavLogo"
import NavLinks from "./NavLinks"
import NavUtility from "./NavUtility"
import Content from "../content"

const Navbar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState<boolean>(false)
    const [isScrolled , setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {setIsScrolled(window.scrollY > 10)}
        window.addEventListener("scroll" , handleScroll)
        return () => window.removeEventListener("scroll" , handleScroll)
    
    } , [])

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isMenuOpen);
    }, [isMenuOpen]);


    const toggleMenu = () : void => {setIsMenuOpen(!isMenuOpen)}


    const location = useLocation()
    const currentPath = location.pathname

    return(
        <>
        <div className={
            `transition-all duration-300 ease-in-out shadow-none flex items-center justify-between w-screen h-16 py-5 px-5 
            ${isMenuOpen || isScrolled ? "bg-black sticky top-0 z-50" : ""}
             ${isMenuOpen ? "text-white" : isScrolled ? "shadow-lg text-white" : ""}`}>
            <NavLogo/>
            <NavLinks currentPath = {currentPath} />
            <NavUtility isMenuOpen = {isMenuOpen} toggleMenu = {toggleMenu}/>
        </div>

        <div>
        <div className="lg:hidden">
                <NavLinks currentPath = {currentPath} isMenuOpen={isMenuOpen} />
        </div>

               <Content/>

        </div>

         </>

    )

}

export default Navbar