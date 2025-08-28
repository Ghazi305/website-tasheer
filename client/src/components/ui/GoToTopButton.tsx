// GoToTopButton.js
"use client"

import React, { useState, useEffect } from 'react';

// SVG icon for the up-arrow
const ArrowUpIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6 text-white"
    >
        <path d="M12 4L6 10H9V20H15V10H18L12 4Z" />
    </svg>
);

const GoToTopButton = () => {
    // State to track whether the button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the scroll event
    const handleScroll = () => {
        // If the user has scrolled down more than 300px, show the button
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adds a smooth scrolling animation
        });
    };

    // Add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 left-8 p-3 bg-blue-500 text-white rounded-full 
                shadow-lg transition-opacity duration-300 z-50
                hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            aria-label="Go to top"
        >
            <ArrowUpIcon />
        </button>
    );
};

export default GoToTopButton;
