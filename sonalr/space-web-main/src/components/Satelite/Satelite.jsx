import React from "react";
import satelitImg from "../../assets/video.mp4";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <video
                autoPlay
                loop
                muted
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
                alt="Satellite Video"
              >
                <source src={satelitImg} type="video/mp4" />
              </video>


            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Pollu-Sat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                In Pollusat, we create a satellite that can sense real-time gases in the atmosphere, including carbon dioxide, methane, and ozone. The satellite captures these critical gas measurements while also tracking altitude, pressure, and other environmental conditions. This real-time data provides valuable insights for environmental monitoring and research.
              </p>
              <a
                href="https://4jnj80r7-5502.inc1.devtunnels.ms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
                >
                  LIVE GUI
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
