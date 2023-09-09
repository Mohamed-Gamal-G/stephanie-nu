/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./style.css";
import logo from"../imgs/stephanie logo.png"
import animal1 from"../imgs/8 2.png"
import bganimal1 from"../imgs/Rectangle 153.png"
import animal2 from"../imgs/2 1.png"
import bganimal2 from"../imgs/Rectangle 135.png"
import animal3 from"../imgs/1 298750.png"
import bganimal3 from"../imgs/Rectangle 154.png"
import like from"../imgs/Group 23.png"
import bacWiteSercl from"../imgs/Ellipse 83.png"
import I1 from"../imgs/Group (3).png"
import I2 from"../imgs/Group 16.png"
import I3 from"../imgs/Group (1).png"
import I4 from"../imgs/Group.png"
import I5 from"../imgs/I5.png"
import Doctor from"../imgs/3 1.png"
import Unicode from"../imgs/“.png"
import jhone from"../imgs/Ellipse 84.png"
import star from"../imgs/Shape.png"
import icon1 from"../imgs/guarantee-lists-icon1.svg.png"
import icon2 from"../imgs/guarantee-lists-icon2.svg.png"
import icon3 from"../imgs/guarantee-lists-icon3.svg.png"
import icon4 from"../imgs/guarantee-lists-icon4.svg.png"
import icon5 from"../imgs/guarantee-lists-icon5.svg.png"
import icon6 from"../imgs/guarantee-lists-icon6.svg.png"
import Vector from"../imgs/Vector.png"
import Vector2 from"../imgs/Vector2.png"
import Group1 from"../imgs/Group1.png"
import Group2 from"../imgs/Group2.png"
import Group3 from"../imgs/34 1.png"
import Group5 from"../imgs/Group (13).png"
import Group7 from"../imgs/Group5.png"
import Group6 from"../imgs/Group (6).png"
import RedCarcl from"../imgs/Ellipse 86.png"
import Unicode1 from"../imgs/“1.png"
import path from"../imgs/Clip path group.png"
import Mask from"../imgs/Mask group.png"
import animal4 from"../imgs/12 98748.png"
import animal5 from"../imgs/11 1.png"
import Group4 from"../imgs/Clip path group1.png"
import Frame from"../imgs/Frame.png"
import Frame1 from"../imgs/Frame (1).png"
import Frame4 from"../imgs/Group (2).png"
import Mask1 from"../imgs/Mask group (1).png"
import Mask2 from"../imgs/Mask2 group.png"
import Group8 from"../imgs/Group8.png"
import Group9 from"../imgs/Group (11).png"
import animal6 from"../imgs/23 1.png"
import path2 from"../imgs/Clip path2 group.png"
import path3 from"../imgs/path3.png"
import Group18 from"../imgs/Group 18.png"
import animal7 from"../imgs/6 1.png"
import sercl13 from"../imgs/Ellipse 88.png"
import sercl12 from"../imgs/Vector11.png"
import sercl14 from"../imgs/Graphics.png"
import group13 from"../imgs/Clip path group13.png"
import Accordion from 'react-bootstrap/Accordion';
import Wave from "react-wavify";
import MainPage from "../MainPage";
import Clinics from "../Cients";
import AOS from "aos";
import 'aos/dist/aos.css'
import Services from "../Services";
/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:"3000"})
  })
  return <div>
    {/* Start Continer1 */}
   <div className="Continer1">
      <div className="right_side"data-aos="fade-down">
        <img src={logo} alt=""/>
        <h1>Integrated
          <br/>
          Marketing is the
          <br/>
          Empire</h1>
          <p>Your Virtual Marketing Solution Start
          <br/>
          Today!</p>
          <a href="http://wa.me/+201100784118" target="_blank" className="BookCall">Book a call</a>
      </div>
      <div className="left_side"data-aos="fade-left"
           data-aos-anchor="#example-anchor">
        <div className="animal1">
          <img className="animal1img" src={animal1} alt="" />
          <img className="bganimal1" src={bganimal1} alt="" />
        </div>
        <div className="animal2">
        <img className="animal2img" src={animal2} alt="" />
        <img className="bganimal2" src={bganimal2} alt="" />
        </div>
        <div className="animal3">
        <img className="animal3img" src={animal3} alt="" />
        <img className="bganimal3" src={bganimal3} alt="" />
        </div>
        <div className="like">
          <img src={like} alt=""/>
          <div className="prog">
            <div className="prog1"></div>
            <div className="prog2"></div>
          </div>
        </div>
      </div>
    </div>
    {/* End Continer1 */}
    {/* Start Continer2 */}
    <div className="Continer2">
      <div className="left_side">
        <h1>We <span className="Understand">Understand</span>
          <br />
          the constraints</h1>
          <div className="imgs" data-aos="fade-right">
            <img className="bacWiteSercl" src={bacWiteSercl} alt=""/>
            <img className="I1" src={I1} alt="" />
            <img className="I2" src={I2} alt="" />
            <img className="I3" src={I3} alt="" />
            <img className="I4" src={I4} alt="" />
            <img className="I5" src={I5} alt="" />
            <img className="Doctor" src={Doctor} alt=""/>
          </div>
      </div>
      <div className="right_side" data-aos="fade-left">
        <div className="jhone">
          <img src={Unicode} alt=""/>
          <p>"Still unsure whether our company is a perfect fit for your business? Book a
            <br />
            free, no obligations WhatsApp exploration call with us."
          </p>
          <div className="ifo">
          <img src={jhone} alt=""/>
            <h4>Jhone Doe</h4>
            <div className="stars">
              <img id="leftStob" src={star} />
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
          </div>
        </div>
        <p className="des">
          <div className="Radius">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <img className="start1" src={Vector} alt=""/>
          <img className="start2" src={Vector} alt=""/>
          <img className="start3" src={Vector} alt=""/>
          <img className="start4" src={Vector} alt=""/>
          <img className="start5" src={Vector} alt=""/>
          <img className="start6" src={Vector} alt=""/>
          <img className="start7" src={Vector} alt=""/>
          <img className="start8" src={Vector} alt=""/>
          <img className="start9" src={Vector} alt=""/>
          <img className="start10" src={Vector} alt=""/>
          <img className="start11" src={Vector} alt=""/>
          We understand the constraints, both financially and
          <br/>
          logistically, that start-ups and SMEs can face. With the
          <br/>
          numerous tasks you are managing, we appreciate it’s a
          <br/>
          struggle to stay up-to-date with new, and constantly
          <br/>
          changing, social media trends, practices and algorithms.
          <br/>
          <br/>
          There are so many social media platforms and great
          <br/>
          opportunities out there, but so much conflicting advice to
          <br/>
          sift through.
          <br/>
          <br/>
          Perhaps you have someone within the business managing
          <br/>
          your social media but they just aren’t getting the results
          <br/>
          you need? Perhaps you are working with a social media
          <br/>
          marketing agency with a high retainer fee that is eating a
          <br/>
          significant chuck out of your budget?
          <br/>
          <br/>
          Have you been spending nights irritated trying to
          <br/>
          understand why you’re just not getting the results your
          <br/>
          business deserves? Are you wondering if, when and how
          <br/>
          your social media can start generating real and tangible
          <br/>
          leads that actually turn into sales?
        </p>
      </div>
      <Wave className="wave1" fill='rgba(19, 25, 158, 1)'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 5
        }}
        />
    </div>
    {/* End Continer2 */}
    {/* Start Continer3 */}
    <div className="Continer3"data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h1>How Do We <img className="Group1" src={Group1} alt=""/> <br /> <span className="GetResults">Get Results</span>?</h1>
      <div className="serves_Continer">
        <div className="serves">
          <div className="nam nam1">01</div>
          <img src={icon1} alt=""/>
          <p>
          Outlining your ideal end outcome of
            <br />
            your social media presence.
          </p>
        </div>
        <div className="serves">
          <div className="nam nam2">02</div>
          <img src={icon2} alt=""/>
          <p>
            By defining your target audience and
            <br />
            buyer's persona.
          </p>
        </div>
        <div className="serves">
          <div className="nam nam3">03</div>
          <img src={icon3} alt=""/>
          <p>
          Investigating your direct and indirect
            <br />
            competitors and inspirers.
          </p>
        </div>
        <div className="serves">
          <div className="nam nam4">04</div>
          <img src={icon4} alt=""/>
          <p>
          Taking the integral steps to ensure
            <br />
            your social media profiles are seen by
            <br />
          the right people at the right times.
          </p>
        </div>
        <div className="serves">
          <div className="nam nam5">05</div>
          <img src={icon5} alt=""/>
          <p>
          Creating a social media strategy and
            <br />
            defining content pillars that are a
            <br />
            magnet for your ideal audience.
          </p>
        </div>
        <div className="serves">
          <div className="nam nam6">06</div>
          <img src={icon6} alt=""/>
          <p>
          Seeking out and engaging with your
            <br />
            ideal audience to build brand loyalty
            <br />
            and ensure you get the results you
            <br />
            desire.
          </p>
        </div>
      </div>
    </div>
    {/* End Continer3 */}
    <div className="ContinerFlepWave">
    <Wave className="wave1" fill='rgba(19, 25, 158, 1)'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 5
        }}
  />
    </div>
    {/* Start Continer4 */}
    <div className="Continer4">
      <div className="left_side" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>Get The 
            <span className="results4"> Results </span>
            You Want <br /> For Up To
            <span className="cheaper"> 70% Cheaper</span>
          </h1>
          <h4>than the cost of employing a marketing agency.</h4>
          <p>
          Every business wants to harness the power of a thriving social media<br />
          presence. Whether your goal is to generate leads, attract partnerships<br />
          or drive website or email traffic, we’re an all bases covered marketing<br />
          collective that can ensure your business’ marketing needs are met at a<br />
          price you can afford.
          <br />
          <br />
          We can deliver impactful results up to 70% cheaper than marketing<br />
          agencies because we work with start-ups and SMEs that have an<br />
          established business plan and line of products or services, with a<br />
          website, customer support process and defined SOPs. It’s important<br />
          that our clients understand that if these areas are not working as they<br />
          should, social media will not deliver optimal results.
          </p>
          <a href="http://wa.me/+201100784118" target="_blank">Book a call</a>
          <div className="Continer4Serc"></div>
      </div>
      <div className="right_side">
        <div className="img1"></div>
        <img className="Group2" src={Group2} alt=""/>
        <img className="Group3" src={Group3} alt=""/>
        <img className="RedCarcl" src={RedCarcl} alt=""/>
        <div className="revContiner">
          <img className="Unicode1" src={Unicode1} alt=""/>
          <div className="rev">
            “Still unsure whether our company is a perfect fit for <br />
            your business? Book a free, no obligations WhatsApp <br />
            exploration call with us.”
          </div>
        </div>
      </div>
    </div>
    {/* End Continer4 */}
    {/* Start Continer5 */}
    <div className="Continer5">
      <h1><img src={path} alt=""/> Explore Your <span className="Options">Options</span>.</h1>
      <Wave className="wave2" fill='rgba(255, 218, 24, 1)'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 5
        }}
  />
    <div className="Cards">
          <div className="cardo cardo1">
            <div className="top">
              <div className="medel_top">
              <img src={Mask} alt=""/>
                <div className="Categorys_price">
                <div className="Categorys">Pro</div>
                <div className="price">$ 1000</div>
                </div>
                <div className="time">/month</div>
              </div>
              <center>
                <hr />
              </center>
              <div className="medel">
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>For companies wanting to look
                    <br />
                      professional on social media 
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Have a solid foundation
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Tick each of your defined social
                    <br />
                    media marketing boxes.
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>25 influencers from our database 
                    <br />
                      on a monthly rotation basis.
                  </p>
                </div>
              </div>
              <a>Get Started For Free</a>
            </div>
          </div>
          <div className="cardo cardo2">
            <div className="top">
              <div className="medel_top">
              <img src={Mask} alt=""/>
                <div className="Categorys_price">
                <div style={{color:"rgba(255, 255, 255, 1)"}} className="Categorys">Pro</div>
                <div style={{color:"rgba(255, 255, 255, 1)"}} className="price">$ 3500</div>
                </div>
                <div style={{color:"rgba(255, 255, 255, 1)"}} className="time">/month</div>
              </div>
              <center>
                <hr />
              </center>
              <div className="medel">
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>For companies wanting to look
                    <br />
                      professional on social media 
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Have a solid foundation
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Grow with FB, IG & TikTok!
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>All engagement and DMs with 
                    <br />
                    customers handled
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Create engaging and high returning 
                    <br />
                    email marketing campaigns/ EDMs 
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Website banners
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>50 influencers from our database on
                    <br />
                    a monthly rotation basis. 
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>A range of collaborative work 
                    <br />
                    opportunities
                  </p>
                </div>
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>Tick each of your defined social 
                    <br />
                    media marketing boxes
                  </p>
                </div>
              </div>
              <a  style={{background: "rgba(251, 194, 62, 1)",color: "#fff"}}>Get Started For Free</a>
            </div>
          </div>
          <div className="cardo cardo3">
            <div className="top">
              <div className="medel_top">
              <img src={Mask} alt=""/>
                <div className="Categorys_price">
                <div className="Categorys">Virtual CMO
                <br/>
                with Stephanie
                </div>
                <div style={{fontSize:"16px" ,lineHeight: "15px",margin:"10px 0"}} className="price">
                to be discussed
                <br />
                with client
                </div>
                </div>
              </div>
              <div style={{margin:"0 0 0 80px"}} className="time">/month</div>
              <center>
                <hr />
              </center>
              <div style={{marginBottom: "50px"}} className="medel">
                <div className="medel_continer">
                  <div className="correct">
                  <i className='bx bx-check'></i>
                  </div>
                  <p>
                  To do all the tasks that a CMO 
                  <br /> needs to do. Think all your bases
                  <br /> covered, inclusive of presentations
                  <br /> to boards and more! This is
                  <br /> catered to a client by client basis.
                  </p>
                </div>
              </div>
              <a>Get Started For Free</a>
            </div>
          </div>
      </div>
      <div className="rightsercl"></div>
      <div className="Triangle"></div>
      <div className="lefttsercl"></div>
    </div>
    {/* End Continer5 */}
    {/* Start Continer6 */}
    <div className="Continer6">
      <div className="left_side">
        <div className="redbac"></div>
        <div className="topbac"></div>
        <img className="animal4" src={animal4} alt=""/>
        <img className="Group4" src={Group4} alt=""/>
        <img className="Frame" src={Frame} alt=""/>
        <img className="Frame1" src={Frame1} alt=""/>
      </div>
      <div className="right_side"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>
        Why Stephanie
        <br/>
        Benedetti and Team?
        </h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why should you outsource social media?</Accordion.Header>
        <Accordion.Body>
        Firstly, let's talk about the costs of hiring an in-house social
        media manager. In Singapore, according to PayScale's data, a
        full-time social media manager's average base salary is
        S$45,023 per annum, ranging from S$27,000 to S$87,000.
        You'll also need to add in the costs of office space, insurance,
        pensions and any other employme..... 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the limitations of outsourcing social
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
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the limitations of outsourcing social
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
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the limitations of outsourcing social
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
      <Accordion.Item eventKey="4">
        <Accordion.Header>What are the limitations of outsourcing social
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
    {/* End Continer6 */}
    {/* Start Continer7 */}
    <div className="Continer7">
    <Wave className="wave3" fill='rgba(49, 172, 241, 1)'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 5
        }}
  />
      <h1><img src={Vector2} alt=""/> Our <span className="Services">Services</span></h1>
      <Services />
    <div className="spener">
      <div className="top"></div>
      <div className="bootom"></div>
    </div>
    </div>
    {/* End Continer7 */}
    {/* Start Continer8 */}
    <div className="Continer8">
      <div className="Continer8sr"></div>
      <div className="left_side_">
        <img className="Group5" src={Group5} alt=""/>
        <img className="Group6" src={Group6} alt=""/>
        <img className="Group7" src={Group7} alt=""/>
        <img className="animal5" src={animal5} alt=""/>
        <img className="Frame4" src={Frame4} alt=""/>        
        <div className="yellow"></div>
      </div>
      <div className="right_side">
        <h1>We <span className="red">work</span> for</h1>
        <div className="des">
          <div className="cotent cotent1">
            <div className="cotent1r"></div>
            <img src={Mask1} alt=""/>
            <span>Small + Medium <br /> Sized Businesses</span>
          </div>
          <div className="cotent cotent2">
          <div className="cotent2r"></div>
            <img src={Mask2} alt=""/>
            <span>Start Up</span>
          </div>
        </div>
        <p style={{zIndex:"100"}}data-aos="zoom-in-left">
        We’re certain you can appreciate how mysterious, confusing and conflicting marketing your
        <br />small or medium sized enterprise can be. There are so many different digital marketing
        <br />techniques you can employ, multiple social media sites you can invest in - and so much
        <br />conflicting advice online about how to get the best results. Perhaps you’ve already
        <br />experimented with digital marketing - organic or paid - in your small or medium sized business.
        <br />If you have, we’re not surprised you’re now looking into outsourcing. As a business owner or
        <br />manager, you have so many different tasks within the business to contend with and oversee.
        <br />Social media and digital marketing is a whole other industry inself to learn and master to get
        <br />real tangible results you can rely on. 
        <br />
        <br />
        We’re here to tell you that you can now relax. Our specialty is small and medium sized
        <br />businesses that want to get real life business results from the right people, but have neither
        <br /> the time nor the expertise to achieve this goal.
        <br />
        <br />
        EpiSynergy manages social media and other forms of digital marketing for small and medium
        <br />sized businesses all around the world. It’s our mission to figure out how to generate a buzz,
        <br />sales leads and website traffic from social media for our clients in order to ensure their social
        <br />media investment is worthwhile.
        </p>
      </div>
    </div>
    {/* End Continer8 */}
    {/* Start Continer9 */}
    <div className="Continer9">
    <h1 className="title">We can help your small or<br/> medium sized business with<br/> the following... </h1>
    <MainPage />
    </div>
    {/* End Continer9 */}
    {/* Start Continer10 */}
    <div className="Continer10">
    <Wave className="wave3" fill='rgba(66, 62, 251, 1)'/* rgba(255, 218, 24, 1) */
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 5
        }}
  />
    </div>
    {/* End Continer10 */}
    {/* Start Continer11 */}
    <div className="Continer11">
      <div className="left_side">
        <img className="Group8" src={Group8} alt=""/>
        <img className="Group9" src={Group9} alt=""/>
        <div className="yellow11"></div>
        <div className="sercl11"></div>
        <img className="animal6" src={animal6} alt=""/>
      </div>
      <div className="right_side">
        <h1 className="firstH"><img src={path2} alt=""/> Our clients</h1>
        <p className="firstP">
        Our clients come in all shapes and sizes with different goals, agendas and expectations. We work across a vast
        <br />range of industries. We can do this because each member of our team has been selected based on their digital
        <br />marketing and industry experience, expertise and their invaluable set of mastered skills.
        </p>
        <Clinics/>
      </div>
    </div>
    {/* End Continer11 */}
    {/* Start Continer12 */}
    <div className="Continer12">
    <h1><img src={path3} alt=""/>Featured Brands</h1>
    <div className="hwrap">
        <div className="hmove">
          <div className="hitem">
          <img src={Group18} alt=""/></div>
        </div>
      </div>
    </div>
    {/* End Continer12 */}
    {/* Start Continer13 */}
    <div className="Continer13">
      <div className="left_side">
      <div className="likee">
          <img src={like} alt=""/>
          <div className="proge">
            <div className="prog1e"></div>
            <div className="prog2e"></div>
          </div>
        </div>
        <div className="imgs">
          <img className="animal7" src={animal7} alt=""/>
          <img className="sercl12" src={sercl12} alt=""/>
          <img className="sercl13" src={sercl13} alt=""/>
          <img className="sercl14" src={sercl14} alt=""/>
        </div>
      </div>
      <div className="right_side">
        <div className="continer">
          <h1>Stress-free, <img src={group13} alt=""/>
          <br />
          Results-Driven
          <br />
          <span>Social Media </span>
          <br />
          and <span>Marketing</span> 
          <br />
          Helping Hand. </h1>
          <p>
          Think of us as your virtual CMO<br />
          (Chief Marketing Officer)! 
          </p>
          <small>
          Book a no obligations exploration call with us
          <br />and discover how we can change your digital
          <br />marketing game. Learn more about us, get
          <br />your questions answered and explore which
          <br />package best suits your needs.  
          </small>
          <br/><br/><br/>
          <a href="http://wa.me/+201100784118" target="_blank">Book a call</a>
        </div>
      </div>
    </div>
    {/* End Continer4 */}
    {/* Start Copyrights */}
    <div className="disinerRight">©Copyright 2022-Stephanie
      <br/>Benedetti. All rights reserved
    </div>
    <div className="DeveloperRight">
    Developer page : <a href="https://mohamed--gamal.vercel.app/" target="_blank">Mohamed Gamal</a>
    </div>
    {/* End Copyrights */}
  </div>;
};
export default Home;