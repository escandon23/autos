import { useState } from "react"
import FleetHeader from "./FleetHeader"
import FilteredFleet from "./FilteredFleet"
import Reserve from "../Reserve/Reserve"


const FleetSection = () => {

    const [activeTab , setActiveTab] = useState<string>("All")

    return (
        <div className="p-5 flex flex-col">

        <FleetHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        <FilteredFleet activeTab={activeTab} />
        <div className="block md:hidden">
            <Reserve/>

        </div>

        

        </div>
    )
}

export default FleetSection