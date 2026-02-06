import HomeContent from "./HomeContent"
import HomeReserve from "./HomeReserve/HomeReserve"
const Home = () => {

    return (
        <>
            <div className="
            relative flex flex-col  bg-[url('/HomePageCar.jpg')] bg-contain bg-cover  
            bg-center bg-no-repeat h-screen gap-10">
                <HomeContent/>
                <div className="hidden md:block md:flex-3">
                    <HomeReserve/>
                </div>
             </div>
        </>
    )

}


export default Home