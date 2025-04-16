import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
<footer className="w-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#020c1b] bg-blend-overlay py-6 text-gray-300 border-t border-white/10">
<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; <strong className="font-semibold">THINK IOT</strong>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-violet-50 transition-colors duration-500 ease-in-out hover:opacity-75"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:opacity-75 md:text-right"
          >
            Privacy Policy
          </a>

          <b>|</b>

          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:opacity-75 md:text-right"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
