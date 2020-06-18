import React from "react";
import MainSkeleton from "../components/main-skeleton";
import Fade from 'react-reveal/Fade';

function Expertise() {

    const expertise = [{
        header: "React Native",
        percentage: '85%'
    }, {
        header: "Java",
        percentage: '90%'
    },
    {
        header: "Kotlin",
        percentage: '70%'
    },
    {
        header: "Swift",
        percentage: '70%'
    },
    {
        header: "Flutter",
        percentage: '60%'
    },
    {
        header: "React.js",
        percentage: '60%'
    },
    {
        header: "Node.Js",
        percentage: '50%'
    },
    {
        header: "Vue.Js",
        percentage: '60%'
    },
    {
        header: "HTML",
        percentage: '75%'
    }, {
        header: "CSS",
        percentage: '75%'
    },]

    return (
        <MainSkeleton
            isDark={false}
            header={"Skills"}
            subText={"Batman might be jealous"}>

            <div className="flex flex-wrap flex-col  md:flex-row justify-between">
                {expertise.map((item, index) =>
                    <div className="flex flex-col w-full md:w-1/2  mb-5 lg:mb-0" key={item.header} >
                        <div className="flex flex-row items-baseline">
                            <span className="text-primary text-sm font-bold mr-2">{item.percentage}</span>
                            <div className="flex flex-1 flex-col">
                                <span className="text-secondary-light text-md lg:text-base">{item.header}</span>
                            </div>
                        </div>
                        <div className=" flex bg-grey-bgLight h-1 md:h-1 md:mr-8 mt-2 md:mb-2">
                            <div className="bg-primary" style={{ width: `${item.percentage}` }} />
                        </div>

                    </div>
                )}
            </div>
        </MainSkeleton>
    );
}

export default Expertise;
