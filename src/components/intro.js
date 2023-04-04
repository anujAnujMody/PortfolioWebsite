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
                <span>As a highly experienced Mobile App Developer with 9+ years of experience in Android development, as well as expertise in Kotlin and React Native, I have established a strong reputation for developing high-quality mobile applications that exceed client expectations</span>
                <br></br>
                <span>In my current role, I lead a team of developers and guide them to deliver high-quality, scalable, and maintainable code. With strong leadership skills and the ability to mentor and motivate my team, I have been successful in achieving our project goals and meeting client expectations. Additionally, I possess strong project management skills, including planning, estimation, and tracking, and I am adept at communicating effectively with clients and stakeholders.</span>
                <br></br>
                <span>With a deep understanding of the Android platform, including its architecture, components, and API libraries, I have built an impressive portfolio of native Android applications using Java and Kotlin. Additionally, I possess strong expertise in cross-platform development, having worked extensively with React Native to deliver performant, scalable, and responsive applications across multiple platforms.</span>
            </div>

        </MainSkeleton>
    );
}

export default Intro;
