import React from "react";

const BlueButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="nopener noreferrer">
      <button
        className="resume text-resume border-3 border-indigo-500 dark:bg-indigo-500 rounded-full px-3 py-1 hover:text-slate-200 hover:bg-indigo-500 dark:hover:bg-transparent dark:hover:border-slate-200"
        type="button"
      >
        {props.name}
      </button>
    </a>
  );
};

export default BlueButton;
