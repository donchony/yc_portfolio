import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import { TiLocationArrow } from 'react-icons/ti';

const Saveusfromourselves = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-5">
      <AnimatedTitle title="Save Us From Ourselves" containerClass="text-center text-4xl" />
      <p className="mt-4 max-w-2xl text-center text-sm">
        Decentering ourselves from the human-centered viewpoint, this installation art brings reconciliation between human consciousness and ecological awareness.
      </p>

      {/* BentoCard Section */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="relative h-96 w-full overflow-hidden rounded-md border-2 border-blue-50">
          <video
            src="videos/feature-1.mp4"
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 size-full object-cover"
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
            <h1 className="text-2xl font-bold">Save Us From Ourselves</h1>
            <p className="mt-3 text-sm">
              The installation encourages ecological awareness by decentering humans and fostering reconciliation with our environment.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <button className="flex items-center gap-1 bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition">
                <span>Discover More</span>
                <TiLocationArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saveusfromourselves;
