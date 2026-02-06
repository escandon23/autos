import type React from "react"


interface ReasonType {
    image : string,
    title : string,
    description : string
}



const Reason : React.FC<ReasonType> = ({image , title , description}) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-5">
                   <div> <img src={image} alt={title} />  </div>              
                    <div><h3 className=" text-lg md:text-2xl font-bold">{title}</h3>   </div>             
                    <div className="text-center"><p className="text-sm lg:text-lg text-gray-500 ">{description}</p></div>
                
            </div>

        </div>


    )

}

export default Reason