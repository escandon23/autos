import type React from "react"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation , Pagination} from "swiper/modules"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation"

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
      <button className="hidden sm:block fleet-prev absolute left-0 z-10 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
        <ArrowBackIosNewIcon fontSize="small" />
      </button>
      <div className="w-full">
        <Swiper
            modules={[Navigation , Pagination]}
            spaceBetween={0}
             pagination={{ clickable: true }}
            navigation={{
            prevEl: ".fleet-prev",
            nextEl: ".fleet-next",
          }}
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
      <button className="hidden md:block fleet-next absolute right-0 z-10 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  )
}

export default FilteredFleet
