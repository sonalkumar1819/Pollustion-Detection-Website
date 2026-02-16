import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
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
                CanSat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              In the CanSat project, we created a satellite that is designed to detect key environmental parameters such as pressure, longitude, latitude, and gyro data (X, Y, Z). This satellite provides crucial insights for analyzing atmospheric conditions and spatial orientation, enabling precise measurements for scientific and research purposes.
              </p>
              <a
                href="https://education21.in/in-space-cansat-india-student-competition-2024-won-by-lpus-team-vihanga/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
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
