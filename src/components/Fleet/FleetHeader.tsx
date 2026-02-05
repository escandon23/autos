import React from "react"


interface FleetHeaderProps {
    activeTab : string ,
    setActiveTab : (tab : string) => void
}

const FleetHeader : React.FC<FleetHeaderProps> = ({activeTab , setActiveTab}) => {

    const categories : string[] = ["All" , "Luxury" , "Business" , "Crossover"]

 

    return (
        <div className="flex flex-col items-center gap-5 p-5">
            <div className="flex gap-5 items-center">
                <h1 className="text-4xl font-bold">Our Fleet</h1>
                <p className="text-lg">Explore our premium selection of luxury sedans, 
                    executive vans, and high-end SUVs designed to deliver comfort, safety, 
                    and style for every journey.
                </p>
            </div>
            
            <div className="flex gap-10">   
                {categories.map((cat , index)  => (
                    <button onClick={() => setActiveTab(cat)} 
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors 
                        ${activeTab === cat ? "bg-green-500 text-white " 
                        : "bg-gray-100"}`} key={index}>{cat}</button>
                ))}

            </div>
           
        </div>

       
    )

}

export default FleetHeader
