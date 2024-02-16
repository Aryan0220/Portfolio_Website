import React from "react";

const HollowBtn = (props) =>{
    return (
        <button
          className="text-resume border-3 border-slate-200 bg-transparent rounded-full px-3 py-1 hover:bg-indigo-500 hover:border-indigo-500"
          type="button"
        >
          {props.name}
        </button>
      );
    };

    export default HollowBtn;
