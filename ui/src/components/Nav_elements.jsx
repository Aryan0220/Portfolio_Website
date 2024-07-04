import React from "react";

const NavElements = (props) => {
  return (
    <li>
      <a
        href={props.href}
        className="text-2xl no-underline hover:font-bold
         hover:underline-offset-0.5 hover:underline hover:decoration-zinc-800
        dark:hover:decoration-slate-200 dark:hover:text-indigo-400"
      >
        {props.name}
      </a>
    </li>
  );
};

export default NavElements;
