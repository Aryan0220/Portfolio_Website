import React from "react";

const HollowBtn = (props) => {
  return (
    <a href={props.link}>
      <button
        className="text-resume border-3 dark:bg-transparent dark:border-slate-200 text-slate-200 border-indigo-500 bg-indigo-500 rounded-full px-3 py-1 dark:hover:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-500 hover:text-zinc-800 hover:bg-transparent hover:border-indigo-500"
        type="button"
      >
        {props.name}
      </button>
    </a>
  );
};

export default HollowBtn;
