import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Real-Time Data Visualization",
    content: <h4><span style={{ color: '' ,fontSize: '18px' }}>(Altitude, Temperature, Acceleration, Gyro, Pressure, Gases)</span></h4>,
    description:
      "Monitor live satellite data, including environmental conditions and gas levels, and visualize it through interactive real-time graphs.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Mobile Responsiveness",
    content: <h4><span style={{ color: '' ,fontSize: '20px' }}>(Optimized for all devices, ensuring a seamless experience)</span></h4>,
    description:
      "Ensures that the Pollusat interface works seamlessly across desktops, tablets, and smartphones, providing an excellent user experience on any screen size.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "Measurement Switch Button",
    content: "0-10 km",
    description:
      "Easily toggle between different measurements, such as altitude, temperature, gas levels, and more. The button allows users to focus on specific data sets at any time.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
