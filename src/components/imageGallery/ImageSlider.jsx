import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = ()=> {
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }
    

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <>
                            <h1 className="h1-class">بالصور.. غزة تحت الأنقاض</h1>
                            <img src={slide.image} alt={slide.alt} className="image" />
                            <h2 className="h2-class">{slide.alt}</h2>
                        </>
                        
                    )}

                </div>
            );
        })}
        </section>
    )
}

export default ImageSlider
