const Footer = () => {

    const today = new Date().toLocaleDateString("en-NG", {
   
    year: "numeric",

  });

    return (
        <div className="bg-black rounded-t-4xl  text-white grid grid-row-1  md:grid-row-2  gap-5 gap-30 p-5 md:p-10 lg:p-15">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
                <h1 className="mb-10 font-semibold">AUTOHIRE</h1>
                <p className="mb-5 text-sm md:text-md lg:text-lg ">Subscribe to newsletter</p>
                <div className="flex w-full lg:w-[80%] ">
                    <input className="bg-gray-300 text-sm md:text-lg text-black px-2 py-2 lg:py-4  w-full  rounded-l-lg focus:outline-none " type="email" />
                    <div className="flex p-2 bg-white rounded-r-lg  max-w-[40px]"><img src="src/public/icons/RightArrow.png" alt="" /></div>
                </div>
             
            </div>
            
            <div>
                <h1 className="mb-4 font-semibold">Top Cities</h1>
                <ul className="list-none text-sm space-y-3">
                    <li className="text-sm">New York</li>
                    <li>London</li>
                    <li>Berlin</li>
                    <li>Los Angeles</li>
                    <li>Paris</li>

                </ul>
            </div>
            <div>
                <h1 className="mb-5 font-semibold">Explore</h1>
                <ul className="list-none space-y-3">
                    <li>Intercity Rides</li>
                    <li>Limousine Service</li>
                    <li>Chauffeur Service</li>
                    <li>Private Car Service</li>
                    <li>Airport Transfer</li>
                </ul>
            </div>
            <div>
                <h1 className="mb-5 font-semibold">Intercity Rides</h1>
                <ul className="list-none text-sm space-y-3">
                    <li>East Hampton - New York</li>
                    <li>New York - Washington</li>
                    <li>New York - Philadelphia</li>
                    <li>Abu Dhabi - Dubai</li>
                    <li>London - Birmingham</li>
                </ul>
             
            </div>
            </div>
            <div className="flex flex-col-reverse gap-5 items-center  md:flex-row md:justify-around md:items-center">
                <div className="text-sm md:text-md">&copy; {today} AutoHire</div>
                <div>
                    <ul className="flex space-x-3  md:space-x-5">
                        <li className="text-sm md:text-md">Terms</li>
                        <li className="text-sm md:text-md">Privacy Policy</li>
                        <li className="text-sm md:text-md">Legal Notice</li>
                        <li className="text-sm md:text-md">Accessibility</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex  space-x-10  md:space-x-5">
                        <li className="w-[20px] md:w-[30px]"><img src="src/public/socials/youtube.png" alt="" /></li>
                        <li className="w-[20px] md:w-[30px]"><img src="src/public/socials/facebook.png" alt="" /></li>
                        <li className="w-[20px] md:w-[30px]"><img src="src/public/socials/twitter.png" alt="" /></li>
                        <li className="w-[20px] md:w-[30px]"><img src="src/public/socials/instagram.png" alt="" /></li>
                        <li className="w-[20px] md:w-[30px]"><img src="src/public/socials/linkedin.png" alt="" /></li>

                    </ul>
                </div>
            </div>

        </div>
    )

}


export default Footer