import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home" className="h-[91vh]">
      <div
        className="flex max-sm:flex-col flex-row
       justify-center items-center h-full gap-[6rem]"
      >
        <img
          src="/images/Profile Pic.jpg"
          alt="Profile Pic"
          className="h-72 w-72 bg-cover bg-no-repeat bg-center rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg text-zinc-900 dark:text-indigo-500">
            Hello, I'm
          </p>
          <h1 className="text-6xl font-bold mt-0 mb-3 text-zinc-700 dark:text-indigo-200 tracking-wider">
            Aryan
          </h1>
          <div className="text-[1.75rem] leading-8 font-bold dark:text-indigo-400 text-center">
            <Typewriter
              options={{
                strings: [
                  `Full Stack<br>Web<br>Developer`,
                  `Data Analyst`,
                  `Machine<br>Learning<br>Enthusiast`,
                  `Robotics<br>Enthusiast`,
                ],
                skipAddStyles: false,
                delay: 100,
                deleteSpeed: 30,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-row mt-3 gap-2">
            <a href="https://github.com/Aryan0220">
              <svg
                className="dark:fill-indigo-500 fill-zinc-800"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aryan-bargal-48818a246/">
              <svg
                className="dark:fill-indigo-500 fill-zinc-800"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
