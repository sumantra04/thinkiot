import React from "react";
import CoreCard from "./coreCard";
import CoreTeam from "./coreTeam";

import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../navbar";

export default function Teams() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="bg-gradient-to-br from-red-700 via-black to-red-900">
      <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6">
        <article className="col-auto mb-10 mt-10">
          <div id="padding"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            <p>
            Enthusiastic members driving the evolution of ethical hacking.
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            Core Team
          </h1>
          {/* Core Team */}
          <section className="flex flex-wrap justify-center gap-5">
            {CoreTeam.map(core => (
              <CoreCard core={core} key={core.name} />
            ))}
          </section>
        </article>
        
      </section>
    </div>
    </div>
    
  );
}
