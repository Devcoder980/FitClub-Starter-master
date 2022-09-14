import React from 'react'
import './testomonials.css'
import  {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png'
function Testomonials() {

    const [selected,setselected]=useState(0);
    const tLength=testimonialsData.length;
  return (
    <div className="Testomonials">
        <div className="left-t">
            <span>Testomonials</span>
            <span className='stronk-text'>What they </span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                    <span style={{color:'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img  
                onClick={()=>{
                    selected===0?
                    setselected(tLength-1):
                    setselected((prev)=>prev-1)
                }}
            
                src={leftArrow} alt="" />
                <img 
                onClick={()=>{
                    selected===tLength-1?setselected(0):
                    setselected((prev)=>prev+1)
                }}
                src={rightArrow} alt="" />
               
            </div>
        </div>
    </div>
  )
}

export default Testomonials