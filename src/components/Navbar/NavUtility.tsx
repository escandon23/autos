import MenuButton from "./Utility/MenuButton"
import LanguageSelector from "./Utility/LanguageSwitcher"

interface NavUtilityProps {
    isMenuOpen : boolean,
    toggleMenu : () => void
}

const NavUtility : React.FC<NavUtilityProps> = ({isMenuOpen,toggleMenu}  ) => {



    return(
        <>
            <div className="flex gap-15 px-10">
                <LanguageSelector/>
                <MenuButton isMenuOpen = {isMenuOpen} toggleMenu = {toggleMenu}/>
            </div>
        </>
       

    )
   
}


export default NavUtility