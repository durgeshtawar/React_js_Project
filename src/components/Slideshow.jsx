
import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight,FaPause, FaPlay } from "react-icons/fa";

const Slideshow = ({children: slides}) => {
    const [current, setCurrent] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const next = ()=>{
        setCurrent((curr) => (curr === slides.length-1 ? 0 : curr+1))
    };
    const previous = ()=>{
        setCurrent((curr) =>(curr ===  0 ? slides.length-1 : curr-1) )
    };

    const pause = () => setAutoSlide(!autoSlide);

    useEffect(()=>{
        let slideInterval;
        autoSlide && (slideInterval = setInterval(next, 2000));
        return () => clearInterval(slideInterval)
    },[autoSlide]);
  return ( 
  <div className="relative overflow-hidden roundeed-xl">
    <div className="w-[450px] flex transition duration-500"
    style={{transform: `translateX(-${current * 100}%)`}}
    >
        
        {slides}
        </div>
    <button className="text-3xl text-yellow-800 absolute top-1/2 left-2 bg-white rounded-full"
    onClick={()=>{
        setAutoSlide(false)
        previous()}}

    ><FaArrowCircleLeft/></button>
    <button 
    onClick={()=>{
        setAutoSlide(false)
    next()
    }
    }
    className="text-3xl text-yellow-800 absolute top-1/2 right-2 bg-white rounded-full"><FaArrowAltCircleRight/></button>
    <button className="text-4xl text-white absolute bottom-5 left-1/2 -translate-x-1/2"
    onClick={pause}
    >
        {autoSlide ? <FaPause/>: <FaPlay />}
        </button>

    </div>
  )
}

export default Slideshow