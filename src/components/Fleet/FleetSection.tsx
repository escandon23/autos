import { useState } from "react"
import FleetHeader from "./FleetHeader"
import FilteredFleet from "./FilteredFleet"


const FleetSection = () => {

    const [activeTab , setActiveTab] = useState<string>("All")

    return (
        <div className="p-5">

        <FleetHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        <FilteredFleet activeTab={activeTab} />

        

        </div>
    )
}

export default FleetSection