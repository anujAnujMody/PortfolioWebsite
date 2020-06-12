import React from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function MainSkeleton({ isDark, header, subText, children, secondPartStyle, firstPartView, firstPartStyle }) {
    console.log(isDark);
    return (
        <div className={`w-screen  ${isDark ? 'bg-black-dark' : 'bg-black-light'} `}>
            <div className="flex flex-col lg:flex-row ">
                <div className={`first-part-container ${isDark ? 'first-part-container-light' : 'first-part-container-dark'} ${firstPartStyle}`}>
                    <div className="first-part-header">
                        {firstPartView ? firstPartView :
                            <Fade bottom>
                                <div className="flex flex-col">
                                    <span className="text-1xl lg:text-lg text-secondary-light font-bold uppercase">{header}</span>
                                    <span className="text-xs lg:text-sm text-secondary-dark font-semibold leading-tight">{subText}</span>
                                </div>
                            </Fade>}

                    </div>
                </div>

                <div className={`second-part-header ${secondPartStyle}`}>
                    <Zoom duration={400}>
                        {children}
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default MainSkeleton;
