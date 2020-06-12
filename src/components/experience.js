import React from "react";
import MainSkeleton from "../components/main-skeleton";



function Experience() {

    const experience = [{
        date: "2019 - PRESENT",
        company_name: "WORKINDIA",
        position: 'Sr. Front-End Developer',
        place: 'Bangalore, India',
        info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`
    }, {
        date: "2019 - 2019",
        company_name: "SCHOLR",
        position: 'Sr. Andriod Developer',
        place: 'Mumbai, India',
        info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`
    }, {
        date: "2017 - 2018",
        company_name: "Get-Parking",
        position: 'Sr. Mobile Developer',
        place: 'Mumbai, India',
        info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`
    }, {
        date: "2015 - 2017",
        company_name: "Tech Morphosis",
        position: 'Sr. Mobile Developer',
        place: 'Mumbai, India',
        info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`
    },
    {
        date: "2014 - 2015",
        company_name: "Megasys India Pvt Ltd",
        position: 'Android Developer',
        place: 'Mumbai, India',
        info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`
    },]


    return (

        <MainSkeleton
            isDark={true}
            header={"Experience"}
            subText={"Yes, I've been around"}>

            <div className="flex flex-col mt-2">
                {experience.map((item, index) => (
                    <div className="flex flex-row">
                        <div className="flex flex-col items-center mr-2">
                            <div className="w-2 h-2 rounded-full bg-primary "></div>
                            <div className="h-full bg-gray-400 mt-1" style={{ width: 0.5 }}></div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="flex md:w-5/12 flex-col">
                                <span className="-mt-1 text-xs text-secondary-dark">{item.date}</span>
                                <span className="text-md text-secondary-light uppercase font-extrabold mt-1 mr-2">{item.company_name}</span>
                                <span className=" text-xs text-secondary-light ">{item.position}</span>
                                <span className=" text-xs text-secondary-dark font-light mt-0">{item.place}</span>
                            </div>
                            <div className="flex w-full mt-2 mb-8">
                                <span className="block text-sm text-secondary-light">{item.info}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </MainSkeleton>
    );
}

export default Experience;
