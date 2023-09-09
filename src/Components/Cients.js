/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
import React, { useState } from "react";
import { client } from "../data/TabsData";
const Clinics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <React.Fragment>
      <main >
        <div className="AllClintContiner">
          <div className="ClintContiner">
            {client.map((item, index) => {
              return (
                <div key={index} className="items">
                  <div
                  style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}
                  onClick={() =>handleClick(index)}
                  className={`item${activeTab === index? 'activeTab':''}`}>
                    <img src={item.url} alt=""/>
                    <h6 className="ClintTitle">{item.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div className="">
              <h1 className="clintH1">{client[activeTab].h1}</h1>
              <p className="clintP" >{client[activeTab].p1}</p>
              <p className="clintP" >{client[activeTab].p2}</p>
              <p className="clintP" >{client[activeTab].p3}</p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Clinics;