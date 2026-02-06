import { HashLink } from "react-router-hash-link"



const HomeContent = () => {
    return (
        <div className="w-full flex flex-1 items-start mt-30 md:justify-center relative ">
            <div className="flex flex-col pl-5 items-center md:items-center space-y-4 md:space-y-5 left-5 ">
                <h1 className="text-2xl md:text-4xl font-bold tracking-widest ">COMFORT IN MOTION </h1>
                <p className="text-sm text-center md:text-xl tracking-widest">Luxury, performance, and innovation — all in one ride. </p>
                <button className="text-sm md:text-lg rounded-md 
                w-[32] md:w-52 bg-none text-black border-1 hover:bg-black hover:border-none hover:text-white p-2 md:p-5 font-bold">
                <HashLink to="/#vehicles">Explore Our Fleet</HashLink>
                </button>
            </div>

        </div>
        
    )

}

export default HomeContent