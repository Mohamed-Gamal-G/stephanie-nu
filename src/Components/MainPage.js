/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
import React, { useState } from "react";
import { TabsData } from "../data/TabsData";
import Groupr from"./imgs/Vectorr.png"
const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <React.Fragment>
      <main >
        <div className="AllClintContinerm">
          <div className="ClintContinerm">
            {TabsData.map((item, index) => {
              return (
                <div key={index} className="itemsm">
                  <div
                  style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}
                  onClick={() =>handleClick(index)}
                  className={`itemm${activeTab === index? 'activeTab':''}`}>
                    <img src={item.url} alt=""/>
                    <h6 className="ClintTitlem">{item.title}</h6>
                    <i class='bx bx-chevron-right'></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div className="">
              <h1 style={{color:"rgba(255, 124, 47, 1)"}} className="mt-5 text-4xl">{TabsData[activeTab].soon}<img src={Groupr} alt=""/></h1>
              <p style={{color:"rgba(68, 68, 68, 1)"}} className='mt-2 text-xl'>{TabsData[activeTab].content}</p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default MainPage;