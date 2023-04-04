import { Link } from "gatsby";
import React from "react";
import MainSkeleton from "../components/main-skeleton";
import gp from "../images/gp.jpeg";
import marriager from "../images/marraiger.jpeg";
import scholar from "../images/scholr.jpeg";
import workindia from "../images/workindia.jpeg";
import kitabeli from "../images/kitabeli.webp";
import mitra from "../images/mitra.webp";
import pp from "../images/pp.webp";
import driver from "../images/pp.webp";

function Portfolio() {
  const projects = [
    {
      platform: "android",
      appName: "KitaBeli - Belanja Lebih Murah",
      appInfo:
        "KitaBeli is an e-commerce company based in Indonesia that specializes in selling a wide range of products, including groceries, electronics, fashion, health and beauty, home and living, and more",
      img: kitabeli,
    },
    {
      platform: "android",
      appName: "Mitra KitaBeli: Cuan Dari Hape",
      appInfo: "KitaBeli Partner Application",
      img: mitra,
    },
    {
      platform: "android",
      appName: "KitaBeli Picker Packer",
      appInfo:
        "Helping Picking Packing process with single app for KitaBeli internal team",
      img: pp,
    },
    {
      platform: "android",
      appName: "Pod Kitabeli - Driver app",
      appInfo:
        "Application for KitaBeli driver to track, upload and update delivery status. [Internal Only]",
      img: driver,
    },
    {
      platform: "android",
      appName: "Post Jobs, Hire Candidates - Workindia Recruiter",
      appInfo:
        "WorkIndia For Recruiters App is a one-stop solution for all your recruitment needs. Whether you want to hire a cook, driver, accountant, hairdresser, sales executive, tailor, photographer or a digital marketing executive, all you have to do is simply post your job requirements on our app! You will get calls from relevant active job seekers, and then you can hire them!",
      img: workindia,
    },
    {
      platform: "android",
      appName: "Scholr",
      appInfo:
        "Scholr is an educational app which contains customized learning modules which helps in personalizing learning programs for students and explore their potential. Scholr aims at improving the academic performance of the students.",
      img: scholar,
    },
  ];

  return (
    <MainSkeleton isDark={false} header={"Projects"} subText={"Busy as usual"}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
        {projects.map((item) => (
          <div className="bg-socialBg shadow-xl border-gray-400 p-4">
            <div className="flex flex-row mb-2">
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
        ))}
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
