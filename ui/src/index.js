import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        outerAlpha={1}
        innerScale={1}
        outerScale={1.7}
        hasBlendMode={true}
        trailingSpeed={1}
        innerStyle={{
          backgroundColor: "transparent",
        }}
        outerStyle={{
          border: "3px solid white",
          backgroundColor: "white",
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </BrowserRouter>
  </React.StrictMode>
);
