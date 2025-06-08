import React from "react";
import "./About.css"; 
import missionImg from "../assets/mission.jpg";
import designerImg from "../assets/desginer.avif";
import storyImg from "../assets/diploma.jpg";

const About = () => (
  <div className="aboutus-container">
    <section className="aboutus-mission r-head flexColStart">
      <span className="primaryText">Our Mission</span>
      <div className="aboutus-mission-content">
        <div className="aboutus-mission-text">
          <p>
            StuBoost Academy mission is to empower students to think critically and understand the 'why' behind every concept, not just memorize the 'what.' Through personalized, engaging online tutoring, we foster deep learning, curiosity, and confidence, helping students build a lasting foundation for academic and lifelong success."
          </p>
        </div>
        <div className="aboutus-mission-image">
          <img src={missionImg} alt="Founders" />
        </div>
      </div>
    </section>
    <section className="aboutus-story">
      <div className="aboutus-story-content">
        <div className="aboutus-story-image">
          <img src={storyImg} alt="story" />
        </div>
        <div className="aboutus-story-text r-head flexColStart">
            <span className="primaryText">Our Story</span>
          <p>
            As fellow graduate students at MIT, we started with a simple observation: too many students were being taught to memorize answers instead of truly understanding them. We saw classrooms moving fast, tests piling up, and curious minds being trained to focus on the grade, not the growth. So we created a space where learning is about asking why, not just answering what. A place where students are encouraged to think deeply tackle real challenges.
          </p>
        </div>
      </div>
    </section>
    <section className="aboutus-designer r-head flexColStart">
      <span className="primaryText">Designers</span>
      <div className="aboutus-designer-content">
        <div className="aboutus-designer-text">
          <p>
            This site was crafted by Shuaib and Yiming, two skilled developers based in Ottawa with a strong background in UI/UX and formal education in computer science. With expertise in HTML, CSS, JavaScript, and React, they’ve combined technical skill with thoughtful design to build a platform that’s both functional and enjoyable to use.
          </p>
        </div>
        <div className="aboutus-designer-image">
          <img src={designerImg} alt="Designer" />
        </div>
      </div>
    </section>
  </div>
);

export default About;