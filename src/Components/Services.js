/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
import React, { useState } from "react";
import { services } from "../data/TabsData";
import Accordion from 'react-bootstrap/Accordion';
const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <React.Fragment>
      <main >
        <div className="AllClintContiners">
          <div className="ClintContiners">
            {services.map((item, index) => {
              return (
                <div key={index} className="itemss">
                  <div
                  style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}
                  onClick={() =>handleClick(index)}
                  className={`items${activeTab === index? 'activeTab':''}`}>
                    <img src={item.url} alt=""/>
                    <h6 className="ClintTitles">{item.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          {<div className="">
            <div className="">
    <div className="Services TabContiner">
          <div className="Services left_side">
            <h1>{services[activeTab].h1}</h1>
          <br />
          <p>{services[activeTab].p1}</p>
          </div>
          <div className="Services right_side">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>So, how can we help?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>We don’t just offer social media marketing 
          <br/>
          media management?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
        </div>
            </div>
          </div>}
        </div>
      </main>
    </React.Fragment>
  );
};
export default Services;