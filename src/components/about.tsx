import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    clipAnimation.to(".about-text", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
        </p>
        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "<b>Discover</b> <b>the</b> <b>world</b> <b>of</b> <br /><b>Internet</b> <b>of</b> <b>things</b>"
          }
        </AnimatedTitle>

        <div className="about-subtext">
        </div>
      </div>

      <div className="h-dvh w-screen relative" id="clip">
        <div className="mask-clip-path about-image relative">
          <img
            src="/img/about1.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
<p className="about-text absolute top-1/4 left-0  text-black text-lg opacity-0 px-8 py-6 flex flex-col items-center justify-center text-justify leading-relaxed max-w-md">
  <h2 className="text-xl font-bold mb-4">About Us</h2>
  At Think IoT, we fuse IoT, AI, ML, and cybersecurity to transform ideas into reality. Backed by experts in software, hardware, and cybersecurity, we push the limits of innovation to create intelligent and secure solutions.

From research to real-world impact, we develop cutting-edge systems that redefine industries. Join us in building a smarter, interconnected future.
</p>


  </div>
      </div>
    </div>
  );
};
