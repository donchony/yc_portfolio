import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useWindowScroll } from '@react-hook/window-scroll';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

const Navbar = () => {
    const navItems = [
        { name: 'About', id: 'about' },
        { name: 'Features', id: 'features' },
        { name: 'Contact', id: 'contact' },
    ];

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const currentScrollY = useWindowScroll(60); // Hook to track scroll position

    // Handle visibility of the navbar on scroll
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    // Animate navbar visibility
    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    // Toggle audio playback
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.play();
            } else {
                audioElementRef.current.pause();
            }
        }
    }, [isAudioPlaying]);

    // Handle smooth scrolling for in-page navigation
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        {/* Redirect to Homepage on clicking the logo */}
                        <Link to="/">
                            <img src="/img/logo.png" alt="logo" className="w-10" />
                        </Link>

                        <Link to="/works">
                            <Button
                                id="product-button"
                                title="Works"
                                rightIcon={<TiLocationArrow />}
                                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            />
                        </Link>
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) =>
                                item.id ? (
                                    // Render a button for in-page scrolling
                                    <button
                                        key={item.id}
                                        onClick={() => handleScroll(item.id)}
                                        className="nav-hover-btn"
                                    >
                                        {item.name}
                                    </button>
                                ) : (
                                    // Render a Link for routing to another page
                                    <Link
                                        key={item.name.toLowerCase()}
                                        to={item.path}
                                        className="nav-hover-btn"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                        </div>

                        <button
                            className="ml-10 flex items-center space-x-0.5"
                            onClick={toggleAudioIndicator}
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
