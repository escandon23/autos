import HomeContent from "./HomeContent"
import HomeReserve from "./HomeReserve/HomeReserve"
const Home = () => {

    return (
        <>
            <div className="
            relative flex flex-col  bg-[url('public/HomePageCar.jpg')] bg-contain bg-cover  
            bg-center bg-no-repeat h-screen">
                <HomeContent/>
                <HomeReserve/>

            </div>
        </>
    )

}


export default Home