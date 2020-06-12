import { Link } from "gatsby";
import React from "react";
import MainSkeleton from "../components/main-skeleton";
import gp from "../images/gp.webp";
import marriager from "../images/marraiger.webp";
import scholar from "../images/scholr.webp";
import workindia from "../images/workindia.jpeg";


function Portfolio() {

    const projects = [
        {
            platform: 'android',
            appName: 'Post Jobs, Hire Candidates - Workindia Recruiter',
            appInfo: 'WorkIndia For Recruiters App is a one-stop solution for all your recruitment needs. Whether you want to hire a cook, driver, accountant, hairdresser, sales executive, tailor, photographer or a digital marketing executive, all you have to do is simply post your job requirements on our app! You will get calls from relevant active job seekers, and then you can hire them!',
            img: workindia,

        },
        {
            platform: 'android',
            appName: 'Scholr',
            appInfo: 'Scholr is an educational app which contains customized learning modules which helps in personalizing learning programs for students and explore their potential. Scholr aims at improving the academic performance of the students.',
            img: scholar,

        },
        {
            platform: 'android',
            appName: 'GetParking',
            appInfo: 'GetParking Parking Management System" is an app for Parking space Owners, Operators, Managers and Attendants. It is part of the GetParking platform which uses Computer vision, Machine learning, Internet of Things & Artificial Intelligence to add unprecedented intelligence to your parking lots.',
            img: gp,

        }, {
            platform: 'android',
            appName: 'Marriager – Wedding Planning',
            appInfo: "Marriager is India's ultimate wedding planner! Get wedding ideas, find wedding vendors, plan your budget, manage your guestlist, create to-do lists, and collaborate with loved ones - Marriager brings all you need to plan the perfect wedding to your fingertips.",
            img: marriager,

        }]


    return (
        <MainSkeleton
            isDark={false}
            header={"Projects"}
            subText={"Busy as usual"}>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">

                {projects.map(item =>
                    (<div className="bg-socialBg shadow-xl border-gray-400 p-4">
                        <div className="flex flex-row mb-2">
                            <img src={item.img} className="w-16 h-16 rounded-md" ></img>
                            <div className=" flex flex-col ml-3 justify-center">
                                <span className="text-xs text-primary font-semibold leading-none">{`#${item.platform}`}</span>
                                <span className="text-secondary-light leading-tight mt-2 text-sm md:text-lg font-semibold leading-none">{item.appName}</span>
                            </div>

                        </div>
                        <span className="text-secondary-light leading-tight mt-2 text-xs md:text-sm">{item.appInfo}</span>
                    </div>))}

            </div>
            <div className="flex flex-1 justify-center items-center mt-4">
                <Link to="/projects/">
                    <span className="text-primary">See More...</span>
                </Link>
            </div>

        </MainSkeleton>
    );
}

export default Portfolio;
