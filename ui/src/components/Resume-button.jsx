import React from "react";

const ResumeButton = (props) => {
  return (
    <a href={props.link}>
      <button
        className="text-resume border-3 rounded-full px-3 py-1 text-slate-200 
        border-gray-500 dark:bg-indigo-500 
        dark:hover:bg-transparent"
        type="button"
      >
        {props.name}
      </button>
    </a>
  );
};

export default ResumeButton;
