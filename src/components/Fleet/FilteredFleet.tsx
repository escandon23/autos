import type React from "react"
import { useEffect, useState } from "react"
import FleetData from "./FleetData"
import FleetItem from "./FleetItem"

interface FilteredFleetProps {
  activeTab: string
}

const CARD_WIDTH = 340
const GAP = 24 // same as your gap-6 in Tailwind (6 * 4 = 24px)

const FilteredFleet: React.FC<FilteredFleetProps> = ({ activeTab }) => {
  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  const items =
    activeTab === "All"
      ? FleetData
      : FleetData.filter(item => item.category === activeTab)

  // reset index when tab changes
  useEffect(() => {
    setIndex(0)
  }, [activeTab])

  // update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3)
      else if (window.innerWidth >= 640) setCardsPerView(2)
      else setCardsPerView(1)
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  // max index to prevent overscroll
  const maxIndex = Math.max(items.length - cardsPerView, 0)

  return (
    <div className="relative mx-auto mt-8">
      {/* VIEWPORT */}
      <div
        className="
          overflow-hidden mx-auto
          w-[340px] sm:w-[700px] lg:w-[1040px]
        "
      >
        {/* TRACK */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {items.map(item => (
            <div
              key={item.id}
              className="min-w-[340px] max-w-[340px] flex-shrink-0"
            >
              <FleetItem
                image={item.image}
                name={item.name}
                luggage={item.luggage}
                passengers={item.passengers}
              />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT */}
      <button
        onClick={() => setIndex(i => Math.max(i - 1, 0))}
        disabled={index === 0}
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          bg-white shadow-md rounded-full
          p-2 disabled:opacity-40
        "
        aria-label="Previous"
      >
        ‹
      </button>

      {/* RIGHT */}
      <button
        onClick={() => setIndex(i => Math.min(i + 1, maxIndex))}
        disabled={index === maxIndex}
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          bg-white shadow-md rounded-full
          p-2 disabled:opacity-40
        "
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}

export default FilteredFleet
