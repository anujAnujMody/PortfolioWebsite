import React from "react";
import MainSkeleton from "../components/main-skeleton";
import Fade from 'react-reveal/Fade';


function Intro() {

    return (
        <MainSkeleton
            isDark={true}
            header={"Intro"}
            subText={"What I am all about"}>

            <div className="text-secondary-light text-left">
                <span>I have been working as a Mobile Application Developer for 6 years with 20+ apps live in AppStore and Google PlayStore. I have developed these applications using native Android and iOS technologies. I am enthusiastic about the technical aspects of application development and very passionate about coding. I am very keen on learning new programming languages and emerging technologies. I have integrated various libraries and SDKs.<br></br> I love working on React Native which is my current thrill. I have developed a few applications using React Native and look forward to more. Having worked on various freelance projects as well has helped me gain a broader perspective and better understanding of the nuances of the software development life cycle.
I'm also learning Back-End Development and looking forward to being a Full Stack Developer.</span>
            </div>

        </MainSkeleton>
    );
}

export default Intro;
