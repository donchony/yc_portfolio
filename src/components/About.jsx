import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react'
import {ScrollTrigger} from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger)

const About = ({ id = "about" }) => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id={id} className="min-h-screen w-screen">
            <div className = "relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className = "font-general text-sm uppercase md:text-[10px]">
                    About Me
                </h2>

                <AnimatedTitle title="ARtist, designer, a learner of tools" containerClass = "mt-5 !text-black text-center" />
                
                <div className= "about-subtext">
                <p>
                Most recent works feature real-time audiovisual projection mapping, augmented reality (AR), AI-generated art,
                </p>
                <p>
                physical computing, user experience design, and product design.
                </p>
                </div>
            </div>

            <div className = "h-dvh w-screen" id = "clip">
                <div className = "mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About