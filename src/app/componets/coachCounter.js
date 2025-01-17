'use client'
import React from "react";

import CountUp from 'react-countup';

export default function CoachCounter(){
    return(
        <section className="py-20 w-full table relative bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/team.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="relative grid md:grid-cols-4 grid-cols-1 items-center gap-[30px]">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={1548}/>+</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Happy Clients</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={100}/>%</h1>
                        <h5 className="counter-head text-white/70 font-semibold">24/7 Support</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={9}/>+</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Courses</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={100}/>%</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Satisfaction</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}