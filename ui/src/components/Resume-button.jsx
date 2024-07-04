import React from "react";

const ResumeButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="nopener noreferrer">
      <button
        className="text-resume hover:text-slate-100 border-3 rounded-full px-3 py-1
         bg-slate-100 dark:bg-indigo-500
          dark:border-indigo-500 dark:hover:border-slate-100
           dark:hover:bg-transparent
           hover:bg-transparent"
        type="button"
      >
        {props.name}
      </button>
    </a>
  );
};

export default ResumeButton;
