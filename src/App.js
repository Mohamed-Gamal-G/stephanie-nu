/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/index";
function App() {
    return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            {<Route path="/" element={<Home />} />}
          </Routes>
        </div>        
      </Router>
    </>
  );
}
export default App;
// installtions
//npm install react-bootstrap bootstrap
//npm i react-router-dom --save
//npm i axios styled-components --save
//npm install react-icons --save
//npm install --save 'react-router'
//npm install -g serve
//npm install --save react-accessible-accordion
//npm i react-countup
//npm i --save react-bootstrap-carousel
/* //////////////////////// */
/* npm install react-wavify */
/* npm install react-reveal --save */
/* npm install react-icons --save */
/* npm i @material-tailwind/react */
/* npm install -D tailwindcss //*/
/* npm i @heroicons/react */
/* install ASO */
/* https://michalsnik.github.io/aos/ */