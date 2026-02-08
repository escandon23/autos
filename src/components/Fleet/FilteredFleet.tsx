import type React from "react"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"


import "swiper/css"
import "swiper/css/pagination";

import FleetData from "./FleetData"
import FleetItem from "./FleetItem"

interface FilteredFleetProps {
  activeTab: string
}

const FilteredFleet: React.FC<FilteredFleetProps> = ({ activeTab }) => {
  const [filteredItems, setFilteredItems] = useState(FleetData)

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredItems(FleetData)
    } else {
      setFilteredItems(
        FleetData.filter(item => item.category === activeTab)
      )
    }
  }, [activeTab])

  return (
    <div className="relative mt-8 flex items-center  ">
    
      <div className="w-full">
        <Swiper
            modules={[Pagination]}
              pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full h-[50vh] md:h-[40vh] lg:h-[50vh] "
          >
            {filteredItems.map(item => (
              <SwiperSlide key={item.id} className="flex justify-between  ">
                  <FleetItem
                    image={item.image}
                    name={item.name}
                    luggage={item.luggage}
                    passengers={item.passengers}
                  />
              </SwiperSlide>
            ))}
          </Swiper>


      </div>
    
    </div>
  )
}

export default FilteredFleet
