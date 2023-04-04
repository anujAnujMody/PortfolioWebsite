import React from "react";
import workindia from "../images/workindia.jpeg";
import gp from "../images/gp.jpeg";
import marriager from "../images/marraiger.jpeg";
import scholar from "../images/scholr.jpeg";
import sundaram from "../images/sundaram.jpeg";
import mehndi from "../images/mehndi.jpeg";
import wt from "../images/wt.png";
import playstore from "../images/playstore.jpeg";
import appstore from "../images/appstore.jpeg";
import wrkinda from "../images/wkindia.jpeg";
import kitabeli from "../images/kitabeli.webp";
import mitra from "../images/mitra.webp";
import pp from "../images/pp.webp";
import driver from "../images/pp.webp";

function Projects(params) {
  const projects = [
    {
      platform: "android",
      appName: "KitaBeli - Belanja Lebih Murah",
      appInfo:
        "KitaBeli is an e-commerce company based in Indonesia that specializes in selling a wide range of products, including groceries, electronics, fashion, health and beauty, home and living, and more",
      img: kitabeli,
      link:
        "https://play.google.com/store/apps/details?id=com.wajual&hl=en&gl=US",
    },
    {
      platform: "android",
      appName: "Mitra KitaBeli: Cuan Dari Hape",
      appInfo: "KitaBeli Partner Application",
      img: mitra,
      link:
        "https://play.google.com/store/apps/details?id=id.kitabeli.mitra&hl=en&gl=US",
    },
    {
      platform: "android",
      appName: "KitaBeli Picker Packer",
      appInfo:
        "Helping Picking Packing process with single app for KitaBeli internal team",
      img: pp,
      link:
        "https://play.google.com/store/apps/details?id=id.pod.pickerpacker&hl=en&gl=US",
    },
    {
      platform: "android",
      appName: "Pod Kitabeli - Driver app",
      appInfo:
        "Application for KitaBeli driver to track, upload and update delivery status. [Internal Only]",
      img: driver,
      link:
        "https://play.google.com/store/apps/details?id=id.pod.kitabeli&hl=en&gl=US",
    },
    {
      platform: "android - React Native",
      appName: "Post Jobs, Hire Candidates - Workindia Recruiter",
      appInfo:
        "WorkIndia For Recruiters App is a one-stop solution for all your recruitment needs. Whether you want to hire a cook, driver, accountant, hairdresser, sales executive, tailor, photographer or a digital marketing executive, all you have to do is simply post your job requirements on our app! You will get calls from relevant active job seekers, and then you can hire them!",
      img: workindia,
      link:
        "https://play.google.com/store/apps/details?id=in.workindia.hireindia",
    },
    {
      platform: "android",
      appName: "WorkIndia Job Search App - Free HR contact directs",
      appInfo:
        "WorkIndia is the perfect Free Job Search Portal for all the Blue and Grey Collar candidates, to get a job according to their profile and preferred location!",
      img: wrkinda,
      link:
        "https://play.google.com/store/apps/details?id=in.workindia.nileshdungarwal.workindiaandroid",
    },
    {
      platform: "android",
      appName: "Scholr",
      appInfo:
        "Scholr is an educational app which contains customized learning modules which helps in personalizing learning programs for students and explore their potential. Scholr aims at improving the academic performance of the students.",
      img: scholar,
      link:
        "https://play.google.com/store/apps/details?id=com.inspilearn.scholr",
    },
    {
      platform: "android",
      appName: "GetParking",
      appInfo:
        'GetParking Parking Management System" is an app for Parking space Owners, Operators, Managers and Attendants. It is part of the GetParking platform which uses Computer vision, Machine learning, Internet of Things & Artificial Intelligence to add unprecedented intelligence to your parking lots.',
      img: gp,
      link: "https://play.google.com/store/apps/details?id=in.getparking.pms",
    },
    {
      platform: "android",
      appName: "Marriager – Wedding Planning",
      appInfo:
        "Marriager is India's ultimate wedding planner! Get wedding ideas, find wedding vendors, plan your budget, manage your guestlist, create to-do lists, and collaborate with loved ones - Marriager brings all you need to plan the perfect wedding to your fingertips.",
      img: marriager,
      link:
        "https://play.google.com/store/apps/details?id=com.techmorphosis.marriager&hl=en",
    },
    {
      platform: "iOS",
      appName: "Marriager – Wedding Planning",
      appInfo:
        "Marriager is India's ultimate wedding planner! Get wedding ideas, find wedding vendors, plan your budget, manage your guestlist, create to-do lists, and collaborate with loved ones - Marriager brings all you need to plan the perfect wedding to your fingertips.",
      img: marriager,
      link:
        "https://apps.apple.com/us/app/marriager-wedding-planning-checklist-vendors/id1132107401",
    },
    {
      platform: "android",
      appName: "Mehndi Designs By Meri Saheli",
      appInfo:
        "Whether it is a wedding, a friend’s engagement or any festive family gathering, applying mehndi on your hands and feet is a must. So, why not take help from the Mehndi Design app by Meri Saheli full of new and innovative mehndi designs?",
      img: mehndi,
      link:
        "https://play.google.com/store/apps/details?id=com.mehndidesignsmerisaheli&hl=en",
    },
    {
      platform: "android",
      appName: "Eclass Education - Digital Maharashtra Education",
      appInfo:
        "Eclass education app is an app for Maharashtra State board syllabus. Covers education audio-video content for 1st to 10th standard. It is available in english, marathi and semi-English, Hindi and Urdu. The entire content is in audio-video format and covers question and answers, mind map and chapter in animation.",
      img: sundaram,
      link:
        "https://play.google.com/store/apps/details?id=com.observatory.sundaram&hl=en",
    },
    {
      platform: "android",
      appName: "Where Today- Events, Nightlife",
      appInfo:
        "Where Today helps find pubs with happy hours, restaurants, sheesha joints, trending events and parties near you.",
      img: wt,
      link:
        "https://play.google.com/store/apps/details?id=com.techmorphosis.wheretoday&hl=en",
    },
    {
      platform: "iOS",
      appName: "Where Today- Events, Nightlife",
      appInfo:
        "Where Today helps find pubs with happy hours, restaurants, sheesha joints, trending events and parties near you.",
      img: wt,
      link: "https://itunes.apple.com/in/app/where-today/id1023309344?mt=8",
    },
    {
      platform: "iOS",
      appName: "Marriager for Vendors",
      appInfo:
        "This app is for the vendors who can showcase their service and products.",
      img: marriager,
      link:
        "https://itunes.apple.com/us/app/marriager-business/id1227730368?mt=8",
    },
    {
      platform: "android",
      appName: "Marriager for Vendors",
      appInfo:
        "This app is for the vendors who can showcase their service and products.",
      img: marriager,
      link:
        "https://play.google.com/store/apps/details?id=com.techmorphosis.marriager-business&hl=en",
    },
    {
      platform: "iOS",
      appName: "GJFGems & Jewellery Trade Federation",
      appInfo:
        "(GJF) App provides a unique opportunity to the Gems & Jewellery trade fraternity to know about various benefits offered by GJF to its members in order to promote, protect and progress the trade.",
      img: appstore,
      link: "https://itunes.apple.com/in/app/gjf/id1142607465?mt=8",
    },
    {
      platform: "android",
      appName: "GJFGems & Jewellery Trade Federation",
      appInfo:
        "(GJF) App provides a unique opportunity to the Gems & Jewellery trade fraternity to know about various benefits offered by GJF to its members in order to promote, protect and progress the trade.",
      img: playstore,
      link:
        "https://play.google.com/store/apps/details?id=com.techmorphosis.gjf&hl=en",
    },
    {
      platform: "android",
      appName: "Yoga in School",
      appInfo:
        "Yoga in School is a toolbox for students to have on hand to help deal with the stress and pressures of study, exams and the general challenges of school, studies and beyond.",
      img: playstore,
      link:
        "https://play.google.com/store/apps/details?id=com.techmorphosis.yogainschool&hl=en",
    },
  ];

  return (
    <div className="bg-black-light w-screen h-screen overflow-y-auto">
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mx-4 py-4 lg:mx-20 lg:py-10">
          {projects.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-socialBg shadow-xl border-gray-400 p-4 h-full">
                <div className="flex flex-row mb-0">
                  <img src={item.img} className="w-16 h-16 rounded-md"></img>
                  <div className=" flex flex-col ml-3 justify-center">
                    <span className="text-xs text-primary font-semibold leading-none">{`#${item.platform}`}</span>
                    <span className="text-secondary-light leading-tight mt-2 text-sm md:text-lg font-semibold leading-none">
                      {item.appName}
                    </span>
                  </div>
                </div>
                <span className="text-secondary-light leading-tight mt-2 text-xs md:text-sm">
                  {item.appInfo}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
