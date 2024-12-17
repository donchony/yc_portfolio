import React, { useRef, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { TiLocationArrow } from 'react-icons/ti';
import VideoPreview from './VideoPreview';
import gsap from 'gsap';
import { ScrollTrigger, Observer } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, Observer);

const Floodar = ({ id }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // GSAP Observer to trigger animations on user interactions
    const observer = Observer.create({
      target: containerRef.current,
      type: 'scroll, wheel, touch, pointer',
      onChangeY: (self) => {
        // Parallax video movement
        gsap.to(videoRef.current, {
          y: self.deltaY * 0.2,
          duration: 1,
          ease: 'power1.out',
        });
      },
    });

    // Title entrance animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => observer.kill();
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/img/floodar-bg.webp")',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 text-center">
        <div ref={titleRef}>
          <AnimatedTitle title="FloodAR" containerClass="text-center text-5xl mb-8" />
        </div>
        <p className="max-w-2xl text-sm md:text-lg">
          An interactive AR experience simulating and visualizing flash floods in vulnerable urban areas. See how rising waters reshape the cityscape.
        </p>

        {/* Video Section */}
        <div className="mt-10 relative h-72 w-full max-w-4xl mx-auto rounded-lg overflow-hidden group">
          <VideoPreview>
            <video
              src="videos/floodar-preview.mp4"
              muted
              loop
              autoPlay
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </VideoPreview>
          <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
            <button className="flex items-center gap-1 bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition">
              <span>Explore Simulation</span>
              <TiLocationArrow />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="relative z-10 mt-20 px-10 text-center">
        <h2 className="text-3xl mb-6 font-bold">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-5 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-lg font-bold mb-2">Real-Time Simulation</h3>
            <p className="text-sm">
              Experience real-time flood simulation based on elevation and water level data.
            </p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-lg font-bold mb-2">Interactive AR</h3>
            <p className="text-sm">
              Use AR to visualize flooding on your smartphone in real environments.
            </p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-lg font-bold mb-2">Educational Insights</h3>
            <p className="text-sm">
              Learn about climate change impacts and flood prevention strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Floodar;
