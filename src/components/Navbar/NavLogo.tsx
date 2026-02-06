

interface LogoType {
    image : string,
    href? : string,
}


const NavLogo = () => {

    const logo : LogoType = {
        image : "AUTOHYRE",
        href : "/home",
    }

    return (
        <span className="text-xl md:text-3xl uppercase font-bold  tracking-widest flex-shrink-0"><a href={logo.href}>{logo.image}</a></span>
    )

}

export default NavLogo