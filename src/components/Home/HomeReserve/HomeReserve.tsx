import { useState } from 'react';
import Distance from './Distance';
import Hourly from './Hourly';
import FlatRate from './FlatRate';
import React from "react"

const HomeReserve = () => {

    const [activeTab , setActiveTab] = useState<string>("Distance")

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
    }



    return (
        <div className="w-full flex items-center md:justify-end pl-5 md:pr-10 flex-2 ">
            <div className="flex flex-col gap-2 md:gap-5  w-max h-max rounded-2xl bg-white p-3 md:p-7 " >
                <div className="flex space-x-5 lg:justify-between">
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors 
                        ${activeTab === "Distance" ? "bg-green-500 text-white " 
                        : "bg-gray-100"}`}
                        onClick={() => {setActiveTab("Distance")}}>Distance</button>
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                        ${activeTab === "Hourly" ? "bg-green-500 text-white " : "bg-gray-100"}`}
                        onClick={() => {setActiveTab("Hourly")}}>Hourly</button>
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors 
                        ${activeTab === "FlatRate" ? "bg-green-500 text-white " : "bg-gray-100"}`}
                        onClick={() => {setActiveTab("FlatRate")}}>Flat Rate</button>

                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {activeTab === "Distance" && <Distance/>}
                    {activeTab === "Hourly" && <Hourly/>}
                    {activeTab === "FlatRate" && <FlatRate/>}
                    <button
                     type="submit" 
                     className="w-full bg-black text-white p-1 md:p-3 rounded-md font-bold hover:bg-gray-800 transition-colors">Reserve Now</button>

                </form>
            </div>
                  
        </div>
    
    )
}


export default HomeReserve