import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainSkeleton from "../components/main-skeleton";



function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const testimonials = [
        {
            comment: 'Anuj is a hardworking, sincere and dedicated front end developer with great experience in Android and React Native development. Anuj has good product thinking ability which enables him to think and develop features that are user friendly and conform with UX best practices.',
            name: 'Soumil Rao',
            designation: 'Co-Founder & Director of Engineering at WorkIndia'
        },
        {
            comment: 'I enjoyed working with Anuj for three years at the Tech Morphohsis, collaborating on several iOS projects. His insights and skills with programming and developing were invaluable and something I’ve benefited from many time. He finds creative solutions or alternatives to problems presented to him and often suggests more efficient ways of obtaining the desired outcome. very positive attitude towards the work. Anuj would be an asset to any company.',
            name: 'Archana Vetkar',
            designation: 'Senior iOS Developer at Vedic Rishi Astro'
        },
        {
            comment: 'I have been working with Anuj for around a year on various projects. He has always been diligent and sincere towards his work. Having a keen eye for detail, he also accepts challenges as they come his way. He is proficient in iOS and Android development and with his holistic approach and critical analysis, he will surely bring value to the work at hand.',
            name: 'Gaurang Mohite',
            designation: 'Project Manager at TSS Consultancy Pvt Ltd'
        },
        {
            comment: 'Anuj is dedicated to his craft. An avid learner and works with focus and passion. During his time at GetParking he has demonstrated excellent app development skills and ability to adapt to newer tech and scenarios. He has the ability to advice and take advice on a given topic/challenge. I wish his a very bright future ahead.',
            name: 'Rajiv Singh',
            designation: 'Head of Technologies at GetParking'
        },]

    return (
        <MainSkeleton
            isDark={true}
            header={"Endorsements"}
            subText={"What people have to say"}
        >
            {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                {testimonials.map((item, index) => (
                    <div className="flex flex-1 flex-col mb-10 pr-3">
                        <div className="h-1 w-4/12 bg-primary"></div>
                        <span className="text-sm text-secondary-dark mt-2">{item.comment}</span>
                        <div className="text-right flex flex-col mt-2 pr-6">
                            <span className=" text-secondary-light text-md font-semibold">{item.name}</span>
                            <span className=" text-secondary-light text-xs">{item.designation}</span>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="h-full px-2 pb-4">

                <Slider
                    className="pl-2"
                    {...settings}>
                    {testimonials.map((item, index) => (
                        <div className=" flex flex-1 flex-col mb-10 pr-3 focus:outline-none">
                            <div className="h-1 w-3/12 bg-primary mb-2"></div>
                            <span className="text-sm text-secondary-dark">{item.comment}</span>
                            <div className="text-right flex flex-col mt-6 pr-6">
                                <span className=" text-secondary-light text-md font-semibold">{item.name}</span>
                                <span className=" text-secondary-light text-xs">{item.designation}</span>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </MainSkeleton >
    );
}

export default Testimonials;
