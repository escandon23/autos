import { Menu , X } from "lucide-react"

interface toggleMenuProps {
    isMenuOpen : boolean,
    toggleMenu : () => void
}

const MenuButton : React.FC<toggleMenuProps> = ({isMenuOpen,toggleMenu}) => {

    return (
        <button onClick={toggleMenu} aria-expanded={isMenuOpen} className="lg:hidden">
            {isMenuOpen ? <X/> : <Menu/>}        
        </button>
        

    )
}


export default MenuButton