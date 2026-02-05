const PromoItem = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:relative mt-10">
            <div className="flex flex-col lg:grid-rows-3 gap-5">
                <h1 className="font-bold text-4xl md:text-6xl md:tracking-widest mb-10 lg:mb-20">Mercedes V Class</h1>
                <img className="lg:absolute lg:w-[50%] lg:h-full lg:transforem lg:scale-y-130 lg:right-0 lg:top-0" src="src/public/cars/mercedes-v-class.png" alt="" />
                <div className="grid grid-cols-2 gap-10 lg:gap-0">
                    <ul className="list-none space-y-3">
                        <li className="text-sm md:text-lg"> Seating for up to 8 passengers</li>
                        <li className="text-sm md:text-lg">Advanced sound system</li>
                        <li  className="text-sm md:text-lg">LED ambient lighting</li>
                        <li  className="text-sm md:text-lg">Smooth & powerful performance</li>
                    </ul>
                    <ul className="list-none space-y-3">             
                        <li  className="text-sm md:text-lg">Large luggage  capacity</li>
                        <li  className="text-sm md:text-lg">Tinted windows</li>
                        <li  className="text-sm md:text-lg">Premium leather interior</li>
                        <li  className="text-sm md:text-lg">Chill air conditioning</li>
                    </ul>
                    
                </div>
                <div>
                    <button className="bg-black text-white rounded-md p-5">Reserve Now</button>
                </div>
                

            </div>
            
           


        </div>

       
    )
}

export default PromoItem