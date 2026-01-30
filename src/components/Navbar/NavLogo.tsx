

interface LogoType {
    image : string,
    href? : string,
}


const NavLogo = () => {

    const logo : LogoType = {
        image : "AUTOHIRE",
        href : "/home",
    }

    return (
        <span className="font-bold text-2xl uppercase flex-shrink-0"><a href={logo.href}>{logo.image}</a></span>
    )

}

export default NavLogo