import React from "react";
import MainSkeleton from "../components/main-skeleton";



function Skills() {

    const skills = [{
        header: "Positive Attitude",
        percentage: '95%'
    }, {
        header: "Team Work",
        percentage: '95%'
    },
    {
        header: "Time Management",
        percentage: '85%'
    },
    {
        header: "Problem-solving",
        percentage: '90%'
    },
    {
        header: "Fast learning abilities ",
        percentage: '90%'
    },
    {
        header: "Multi-tasking",
        percentage: '85%'
    }]

    return (
        <MainSkeleton
            isDark={false}
            header={"Strenghts"}
            subText={"Sorry Batman :P"}>
            <div className="flex flex-wrap flex-col  md:flex-row justify-between">
                {skills.map((item, index) =>
                    <div className={`flex flex-col w-full md:w-1/2  mb-5 lg:mb-0 key=${item.header}`} >
                        <div className="flex flex-row items-baseline">
                            {/* <span className="mr-2 text-primary mt-1 uppercase text-base lg:text-lg md:font-semibold">{`${item.percentage}`}</span> */}
                            <div className="flex flex-1 flex-col">
                                <span className="text-secondary-light text-md lg:text-base">{item.header}</span>
                            </div>
                        </div>
                        <div className="flex-1 flex h-0.5 md:h-1 md:mr-8 mt-2 bg-grey-bgLight md:mb-2">
                            <div className="h-full bg-primary" style={{ width: `${item.percentage}` }}>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MainSkeleton>
    );
}

export default Skills;
