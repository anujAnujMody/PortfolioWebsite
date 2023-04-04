import React from "react";
import MainSkeleton from "../components/main-skeleton";

function Experience() {
  const experience = [
    {
      date: "2021 - PRESENT",
      company_name: "KitaBeli",
      position: "Team Lead - Mobile",
      place: "Jakarta, Indoneasia",
      info: `KitaBeli is an e-commerce company based in Indonesia that specializes in selling a wide range of products, including groceries, electronics, fashion, health and beauty, home and living, and more. Developed the main android application from scratch using Kotlin framework. Led the project from inception to launch, working closely with a team of developers and designers to create a user-friendly and intuitive application. After that I had worked and led team for 3 other android applications`,
    },
    {
      date: "2019 - 2020",
      company_name: "WORKINDIA",
      position: "Sr. Front-End Developer",
      place: "Bangalore, India",
      info: `WorkIndia is a blue-collar recruitment portal. A platform for candidates and employers to find their perfect matches. The candidates can use our mobile application to apply for the job they would like to do. WorkIndia has two products -  WorkIndia Recruiter and  WorkIndia Jobs. I have developed the app – WorkIndia Recruiter, in React Native. WorkIndia Recruiter is a solution for all recruitment needs. This app helps you find the right staff for your business. Also, I developed a mobile Android app – WorkIndia Jobs, a Job Search Portal for all the Blue and Grey Collar candidates`,
    },
    {
      date: "2019 - 2019",
      company_name: "SCHOLR",
      position: "Sr. Andriod Developer",
      place: "Mumbai, India",
      info:
        "Scholr is an AI-based learning assistant for school students. It is a goto app for students to solve any of their academic doubts.  I was part of the Android team in developing the Android app - “Scholar – Homework Help, Math Answer - NCERT Solution” app. ",
    },
    {
      date: "2017 - 2018",
      company_name: "Get-Parking",
      position: "Sr. Mobile Developer",
      place: "Mumbai, India",
      info:
        "GetParking is a Parking Management app for Parking space Owners, Operators, Managers and Attendants. It is part of the GetParking platform which uses Computer vision, Machine learning, Internet of Things & Artificial Intelligence to add unprecedented intelligence to your parking lots. I got exposure on IoT, developed PWA in vue.js along with developing the GetParking app for Android platform",
    },
    {
      date: "2015 - 2017",
      company_name: "Tech Morphosis",
      position: "Sr. Mobile Developer",
      place: "Mumbai, India",
      info:
        "Techmorphosis is a digital studio that helps clients grow business online, with the help of a user-focused mobile app and website design, development, online marketing and consulting services.  I had developed custom mobile applications in both Android and iOS platforms using native technologies as per client specifications. I had also led a highly effective team of 3-4 developers in the creation of a mobile app.",
    },
    {
      date: "2014 - 2015",
      company_name: "Megasys India Pvt Ltd",
      position: "Android Developer",
      place: "Mumbai, India",
      info: `Megasys is a client centric Software Development, IT consulting and Business Process Outsourcing (BPO) solutions provider. Megasys has executed projects on a wide range of technologies and its current efforts are based around - custom software development, E-learning, Mobile Application, CRM/Business Intelligence, Internet technologies, and Enterprise Application Integration (EAI) solutions.I was involved in all aspects of the Android app life-cycleme from research and planning through deployment and post-launch support.`,
    },
  ];

  return (
    <MainSkeleton
      isDark={true}
      header={"Experience"}
      subText={"Yes, I've been around"}
    >
      <div className="flex flex-col mt-2">
        {experience.map((item, index) => (
          <div className="flex flex-row">
            <div className="flex flex-col items-center mr-2">
              <div className="w-2 h-2 rounded-full bg-primary "></div>
              <div
                className="h-full bg-gray-400 mt-1"
                style={{ width: 0.5 }}
              ></div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex md:w-5/12 flex-col">
                <span className="-mt-1 text-xs text-secondary-dark">
                  {item.date}
                </span>
                <span className="text-md text-secondary-light uppercase font-extrabold mt-1 mr-2">
                  {item.company_name}
                </span>
                <span className=" text-xs text-secondary-light ">
                  {item.position}
                </span>
                <span className=" text-xs text-secondary-dark font-light mt-0">
                  {item.place}
                </span>
              </div>
              <div className="flex w-full mt-2 mb-8">
                <span className="block text-sm text-secondary-light">
                  {item.info}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainSkeleton>
  );
}

export default Experience;
