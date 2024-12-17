import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Stim = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <AnimatedTitle title="STIM." containerClass="text-center text-4xl" />
      <p className="mt-4 max-w-2xl text-center text-sm">
        A virtual platform designed for mental wellbeing, offering visual and haptic stimulation to enhance caregivers' emotional wellness.
      </p>
    </section>
  );
};

export default Stim;
