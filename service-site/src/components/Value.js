import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion.js";
import "./Value.css";

const Value = () => {
  const [expandedItem, setExpandedItem] = useState("0"); // Bootstrap Accordion expects string keys

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./OurValue.jpg" alt="Values" className="value-img" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            activeKey={expandedItem}
            onSelect={(eventKey) => setExpandedItem(eventKey)}
            className="accordion"
          >
            {data.map((item, i) => (
              <Accordion.Item eventKey={i.toString()} key={i} className={expandedItem === i.toString() ? "accordionItem expanded" : "accordionItem collapsed"}>
                <Accordion.Header>
                  <div className="flexCenter icon">{item.icon}</div>
                  <span className="primaryText" style={{ marginLeft: 8 }}>{item.heading}</span>
                  <div className="flexCenter icon" style={{ marginLeft: "auto" }}>
                    <MdOutlineArrowDropDown size={20} />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="secondaryText">{item.detail}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;