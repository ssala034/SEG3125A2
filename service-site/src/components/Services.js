import React from 'react'
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Services.css"
import data from "../utils/slider.json"
import { sliderSettings } from '../utils/common'

const Services = () => {
  const navigate = useNavigate(); 
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Services</span>
            <span className="primaryText">Popular Courses</span>
          </div>

          <Swiper {...sliderSettings}>
          <SliderButtons/>
            {
              data.map((card,i)=>(
                  <SwiperSlide key={i}>
                  <div className="flexColStart r-card" style={{ cursor: 'pointer' }} onClick={() => navigate(
                        `/appointment?subject=${encodeURIComponent(card.subject)}&instructor=${encodeURIComponent(card.name)}`
                  )}>
                      
                        <img src={card.image} alt='home'/>
                        <span className="secondaryText r=price">
                          <span>{card.subject}</span>
                        </span>

                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  )
}

export default Services

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()}> &lt; </button>
        <button onClick={() => swiper.slideNext()}> &gt; </button>
      </div>
    );
};
