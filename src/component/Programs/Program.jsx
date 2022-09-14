import React from 'react';
import './Program.css';
import {programsData} from '../../data/programsData';
import Rightarrow from '../../assets/rightArrow.png';
function Program() {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stronk-text'>Explore our</span>
            <span>Programs</span>
            <span className='stronk-text'>to shape you</span>
        </div>
        <div className="program-catogeries">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={Rightarrow} alt="" /></div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Program