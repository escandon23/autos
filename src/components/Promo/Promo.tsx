import PromoItem from "./PromoItem"
const Promo = () => {
    return (
        <div className="p-5 md:p-10">
            <div className="text-center flex flex-col gap-5 ">
                <h1 className="text-4xl font-bold">Only today $75/day</h1>
                <p className="text-gray-500">Take advantage of our hot offers , saving a significant amount when renting a limousine</p>
            </div>
          
            <PromoItem/>

        </div>
    )
}

export default Promo