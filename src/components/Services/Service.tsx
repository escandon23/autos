import React from "react";

interface PropsType {
    title : string,
    description : string,
    image : string
}

const Service : React.FC<PropsType> = ({ title, description, image }) => {
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div 
                    className="w-full min-h-[250px] transition-transform transition-duration-150 
                    hover:scale-105 lg:h-full bg-cover bg-center bg-no-repeat rounded-2xl"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                    <div className="flex flex-col gap-4 items-start justify-center">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="text-lg text-gray-500 ">{description}</p>
                        <button className="bg-black text-white hover:bg-gray-800 transition-colors 
                        rounded-md font-bold py-3 px-8">Read More </button>

                    </div>
                </div>

        </div>

    )
}

export default Service