import { useState } from "react"
import FleetHeader from "./FleetHeader"
import FilteredFleet from "./FilteredFleet"


const FleetSection = () => {

    const [activeTab , setActiveTab] = useState<string>("All")

    return (
        <div>

        <FleetHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        <FilteredFleet activeTab={activeTab} />

        

        </div>
    )
}

export default FleetSection