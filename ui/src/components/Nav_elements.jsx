import React from "react";

const NavElements = (props) => {
  return (
    <li>
      <a
        href={props.href}
        className="text-2xl no-underline hover:text-indigo-400 hover:underline-offset-0.5 hover:underline hover:decoration-slate-200"
      >
        {props.name}
      </a>
    </li>
  );
};

export default NavElements;
