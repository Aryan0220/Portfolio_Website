import React from "react";

const date = new Date();

const Contact = () => {
  return (
    <section id="contact" className="h-[80vh]">
      <div className="flex flex-col w-full text-center items-center h-full">
        <h2 className="max-sm:text-6xl text-8xl pt-12 mb-10">Contact Me</h2>
        <div className="flex max-sm:flex-col items-center justify-center p-6 max-sm:px-2 gap-6 mt-10 border-indigo-500 dark:border-slate-200 border-3 w-fit rounded-3xl">
          <div className="flex items-center gap-2">
            <svg
              className="h-12 fill-indigo-500"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linejoin="round"
                stroke-width="12"
                d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
              />
            </svg>
            <a
              href="mailto:aryan.gorde4@gmail.com"
              className="text-2xl no-underline hover:text-indigo-400 hover:underline-offset-0.5 hover:underline hover:decoration-zinc-800 dark:hover:decoration-slate-200"
            >
              aryan.gorde4@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-12 fill-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
            </svg>
            <a
              href="https://www.linkedin.com/in/aryan-bargal-48818a246/"
              className="text-2xl no-underline hover:text-indigo-400 hover:underline-offset-0.5 hover:underline hover:decoration-zinc-800 dark:hover:decoration-slate-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center p-4">
        Copyright © {date.getFullYear()} Aryan Bargal. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;
