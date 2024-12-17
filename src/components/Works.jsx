import React from 'react';
import { Helmet } from 'react-helmet';
import Saveusfromourselves from './Saveusfromourselves';
import Floodar from './Floodar';
import Stim from './Stim';

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Works - Don Cho Portfolio</title>
        <meta name="description" content="Explore Don Cho's projects: Save Us From Ourselves, FloodAR, and STIM, showcasing art, AR simulations, and virtual tools." />
        <meta property="og:title" content="Works - Don Cho Portfolio" />
        <meta property="og:description" content="Discover innovative projects like Save Us From Ourselves, FloodAR, and STIM." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/works-preview.webp" />
        <meta property="og:url" content="https://yundongcho.com/works" />
      </Helmet>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black text-blue-50">
        <Saveusfromourselves id="saveusfromourselves" />
        <Floodar id="floodar" />
        <Stim id="stim" />
      </main>
    </>
  );
};

export default Works;
