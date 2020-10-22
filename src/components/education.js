import React from "react";
import MainSkeleton from "../components/main-skeleton";



function Edcuation() {


    const education = [{
        date: "2010 - 2013",
        name: "St. John College Of Engineering & Management",
        degree: 'BE in IT',
        place: 'Mumbai, India',

    }, {
        date: "2007 - 2010",
        name: "KVMIT",
        degree: 'Diploma in IT',
        place: 'Mumbai, India',

    }]


    return (
        <MainSkeleton
            isDark={true}
            header={"Education"}
            subText={"Smart cookie"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, index) => (
                    <div className="flex">
                        <div className="flex flex-col items-center mr-2">
                            <div className="w-2 h-2 rounded-full bg-primary "></div>
                            <div className="h-full bg-gray-400 mt-1" style={{ width: 0.5 }}></div>
                        </div>
                        <div className="flex flex-col ld:flex-row">
                            <div className="flex flex-col">
                                <span className="-mt-1 text-xs text-secondary-dark">{item.date}</span>
                                <span className="text-sm lg:text-md text-secondary-light uppercase font-extrabold my-1">{item.name}</span>
                                <span className=" text-md text-secondary-light ">{item.degree}</span>
                                <span className=" text-xs text-secondary-dark font-light mt-2">{item.place}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainSkeleton>
    );
}

export default Edcuation;
