import Reason from "./Reason";

interface ReasonsDataType {
    image : string,
    title : string,
    description : string
}
const ReasonsData : ReasonsDataType[] = [
    {
        image : "/CalendarIcon.png",
        title : "Easy Online Booking",
        description : "Book your ride in minutes using our simple and secure online reservation system—available anytime, anywhere."
    },
    {
        image : "/DriverIcon.png",
        title : "Professional Chauffeurs",
        description : "Our experienced, licensed chauffeurs are trained to provide safe, discreet, and courteous service on every trip."
    },
    {
        image : "/CarsIcon.png",
        title : "Wide Range of Vehicles",
        description : "Choose from a diverse fleet of luxury sedans, executive vans, and premium SUVs to match your travel needs."
    },
    {
        image : "/CreditCard.png",
        title : "Secure Online Payment",
        description : "Pay safely using trusted online payment methods with encrypted transactions for your peace of mind."
    }
]




const Reasons = () => {
    return (
        <div className="flex flex-col  p-5 gap-5">
            <div className="flex flex-col gap-5 text-center">
                <h1 className="text-lg sm:text-2xl font-bold">Why Choose Us</h1>
                <p className="text-gray-500">At AutoHyre we pride ourselves in delivering extensive services to fulfil all of your needs with first rate customer care</p>
            </div>
            <div className="flex md:h-[50vh] items-center">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {ReasonsData.map((reason , index) =>(
                    <Reason key={index} image={reason.image} title={reason.title} description={reason.description}/>
                ))}
            </div>

            </div>
           
        </div>
       
    )

}


export default Reasons