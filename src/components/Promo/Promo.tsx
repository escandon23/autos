import Reserve from "../Reserve/Reserve"
import PromoItem from "./PromoItem"
const Promo = () => {
    return (
        <div className="p-5 md:p-10 ">
            <div className="text-center flex flex-col gap-5 ">
                <h1 className="text-2xl md:text-4xl font-bold">Only today $75/day</h1>
                <p className="text-gray-500 text-center">Take advantage of our hot offers , saving a significant amount when renting a limousine</p>
            </div>
          
            <PromoItem/>
            <div className="block md:hidden mt-10">
                <Reserve/>
            </div>

        </div>
    )
}

export default Promo