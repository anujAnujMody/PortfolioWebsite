import React from "react";
import workindia from "../images/workindia.jpeg";
import scholar from "../images/scholr.webp";
import marriager from "../images/marraiger.webp";
import mehndi from "../images/mehndi.webp";
import sundaram from "../images/sundaram.webp";
import gp from "../images/gp.webp";

function Projects(params) {

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

        },
        {
            platform: 'android',
            appName: 'Marriager – Wedding Planning',
            appInfo: "Marriager is India's ultimate wedding planner! Get wedding ideas, find wedding vendors, plan your budget, manage your guestlist, create to-do lists, and collaborate with loved ones - Marriager brings all you need to plan the perfect wedding to your fingertips.",
            img: marriager,

        },
        {
            platform: 'iOS',
            appName: 'Marriager – Wedding Planning',
            appInfo: "Marriager is India's ultimate wedding planner! Get wedding ideas, find wedding vendors, plan your budget, manage your guestlist, create to-do lists, and collaborate with loved ones - Marriager brings all you need to plan the perfect wedding to your fingertips.",
            img: marriager,

        },
        {
            platform: 'android',
            appName: 'Mehndi Designs By Meri Saheli',
            appInfo: 'Whether it is a wedding, a friend’s engagement or any festive family gathering, applying mehndi on your hands and feet is a must. So, why not take help from the Mehndi Design app by Meri Saheli full of new and innovative mehndi designs?',
            img: mehndi,

        },
        {
            platform: 'android',
            appName: 'Eclass Education - Digital Maharashtra Education',
            appInfo: 'Eclass education app is an app for Maharashtra State board syllabus. Covers education audio-video content for 1st to 10th standard. It is available in english, marathi and semi-English, Hindi and Urdu. The entire content is in audio-video format and covers question and answers, mind map and chapter in animation.',
            img: sundaram,

        },]


    return (
        <div className="bg-black-light w-screen h-screen overflow-y-auto">
            <div className="">
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mx-4 py-4 lg:mx-20 lg:py-10">
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
            </div>
        </div>
    )

}

export default Projects