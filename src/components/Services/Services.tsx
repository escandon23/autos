import Service from "./Service"

const servicesData = [
    {
        title: "Airport transfers",
        description: "With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.",
        image: "src/public/AirportCar.jpg"
    },
  
    {
        title: "Wedding events",
        description: "Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.",
        image: "src/public/WeddingCar.jpg"
    },
    {
        title: "Business Meeting",
        description: "Focus on your meeting with your partners, forget about the road and the car, which will distract your thoughts.",
        image: "src/public/BusinessCar.jpg"
    },
      {
        title: "Intercity trips",
        description: "Your stressfree solution for traveling between cities with chauffeurs all over the world.",
        image: "src/public/InterCityCar.jpg"
    }
]




const Services = () => {

    
    return(
        <div>
            <div className="flex flex-col items-center gap-2 pt-5">
                <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
                <p className="text-sm md:text-xl text-gray-500 text-center">We invite you to try our services , and we personally guarantee that you will be completely satisfied</p>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 p-5 md:p-10">
                 {servicesData.map((data , index ) => (
                <Service key={index}  title={data.title} image={data.image} description={data.description} />
            ))}
            </div>
           

        </div>
    )
}

export default Services