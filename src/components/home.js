import { graphql } from 'gatsby';
import React from "react";
import Typewriter from 'typewriter-effect';
import dogIllustration from "../images/boy.png";
import MainSkeleton from "./main-skeleton";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';



function Home() {

    const myInfo = [{
        key: 'Location',
        value: 'Bangalore, India'
    },
    {
        key: 'Phone No.',
        value: '8097804254'
    },
    {
        key: 'Email',
        value: 'androanuj@gmail.com'
    }]


    const data = graphql`
    query{
        myImage:file(relativePath: {eq: "boy.png"}) {
          childImageSharp {
            fixed(width:200,height:200){
                base64
              }
          }
        }
      } 
  `;

    console.log('data', data);
    const firstPartView = () => (
        <div className="w-full lg:h-full flex items-center justify-center lg:justify-end">
            <div className="overflow-x-hidden ">
                <img src={dogIllustration} className="w-32 h-32 lg:w-56 lg:h-56 rounded-full" alt="My Image" />
            </div>

        </div>
    )



    return <MainSkeleton
        isDark={false}
        header={""}
        subText={""}
        secondPartStyle="py-0"
        firstPartStyle=""
        firstPartView={firstPartView()}
    >

        <div className="h-full lg:h-screen relative">
            <div className="lg:h-screen flex flex-col justify-center items-center lg:items-start ">

                <h1 className="block text-3xl md:text-6xl leading-tight text-primary uppercase font-bold tracking-wide">Anuj&nbsp;&nbsp;Mody</h1>

                <div className="lg:w-full">
                    <div className="lg:flex lg:items-baseline lg:justify-between">
                        <div className="w-screen text-xl md:text-3xl text-gray-400 mt-0 text-center lg:text-justify">
                            <Typewriter
                                options={{
                                    strings: ['Mobile App Developer', 'Front-End Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <div className="flex justify-center mt-4 md:mt-4 ">

                            <a href="https://twitter.com/androanuj" target="_blank" rel="noopener noreferrer" className="block mx-3 shadow-xl p-2 bg-socialBg flex justify-center hover:bg-black-dark hover:text-primary">
                                <svg className="w-6 h-6 fill-current text-gray-400  hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.637 97.637"><path d="M97.523 18.526a.482.482 0 00-.568-.131 39.055 39.055 0 01-9.153 2.776 20.299 20.299 0 007.143-10.035.484.484 0 00-.709-.565 39.147 39.147 0 01-12.18 4.701 20.408 20.408 0 00-14.644-6.219c-11.204 0-20.318 9.114-20.318 20.317 0 1.355.131 2.697.391 4-15.518-.958-30.028-8.408-39.894-20.509a.484.484 0 00-.795.062 20.303 20.303 0 00-2.751 10.215 20.3 20.3 0 007.649 15.896 19.42 19.42 0 01-7.089-2.292.483.483 0 00-.721.413l-.002.26c0 8.946 5.895 16.801 14.282 19.409a19.514 19.514 0 01-6.754-.098.486.486 0 00-.553.623A20.314 20.314 0 0028.494 71.39c-6.785 4.971-14.805 7.59-23.279 7.59-1.561 0-3.133-.093-4.673-.274a.492.492 0 00-.514.317.485.485 0 00.195.572 56.693 56.693 0 0030.664 8.988c35.625 0 56.913-28.938 56.913-56.914 0-.779-.015-1.554-.046-2.327a40.519 40.519 0 009.802-10.235.486.486 0 00-.033-.581z" /></svg>
                            </a>



                            <a href="https://www.linkedin.com/in/anuj-mody-a82b60143/" target="_blank" rel="noopener noreferrer" className="block p-2 bg-socialBg flex justify-center hover:bg-black-light hover:text-primary">
                                <svg className="w-6 h-6 fill-current text-gray-400  hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.06 93.06"><path d="M11.185.08C5.004.08.001 5.092 0 11.259c0 6.173 5.003 11.184 11.186 11.184 6.166 0 11.176-5.011 11.176-11.184C22.362 5.091 17.351.08 11.185.08zM1.538 30.926h19.287V92.98H1.538zM69.925 29.383c-9.382 0-15.673 5.144-18.248 10.022h-.258v-8.479H32.92v62.053h19.27V62.281c0-8.093 1.541-15.932 11.575-15.932 9.89 0 10.022 9.256 10.022 16.451v30.178H93.06V58.942c0-16.707-3.605-29.559-23.135-29.559z" /></svg>
                            </a>

                            <a href="https://medium.com/@androanuj_7874" target="_blank" rel="noopener noreferrer" className="block mx-3 p-2 bg-socialBg flex justify-center hover:bg-black-light hover:text-primary">
                                <svg className="w-6 h-6 fill-current text-gray-400  hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M18 41.578c0 .89-.477 1.422-1.152 1.422-.239 0-.504-.066-.785-.207l-10.899-5.52C4.524 36.95 4 36.09 4 35.367V8.313c0-.715.379-1.137.922-1.137.191 0 .406.05.629.164l.383.195h.003l12.012 6.082c.02.012.035.031.051.047zM30.586 8.883l.734-1.207c.262-.43.742-.676 1.23-.676.114 0 .231.016.345.047.085.02.175.05.27.098l12.667 6.414c.004 0 .004.004.004.004l.012.003c.007.004.007.016.015.02.063.05.09.137.047.207L33.293 34.559l-1.29 2.117-8.358-16.371zM20 30.605V17.562l8.98 17.594-8.078-4.09zm26 10.973c0 .836-.496 1.313-1.227 1.313-.328 0-.703-.094-1.097-.293l-1.809-.918-8.078-4.09L46 17.496z" /></svg>
                            </a>;

                        </div>
                    </div>
                    <div className="w-full text-secondary-light flex justify-center lg:justify-start mt-4">
                        <a href="https://docs.google.com/document/d/1wYqZOScxrqmq2A2aONSupINSijkzsJhB57WvsrhQRZM/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-2 bg-primary text-gray-300 rounded-md focus:outline-none focus:shadow-outline lg:hover:bg-yellow-700 text-lg shadow-lg font-semibold">View CV</a>
                    </div>
                </div>
            </div>

            <div className="w-full lg:absolute bottom-0 md:pb-0 mt-6 z-10 flex flex-col justify-evenly">

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {myInfo.map((item, index) => (
                        <div className="flex flex-1 flex-col text-center">
                            <span className="text-secondary-light font-bold text-1xl lg:text-lg">{item.key}</span>
                            <span className="text-secondary-light font-light text-1xl lg:text-lg">{item.value}</span>
                        </div>)
                    )
                    }
                </div>




            </div>
        </div>

    </MainSkeleton >


}

export default Home;
