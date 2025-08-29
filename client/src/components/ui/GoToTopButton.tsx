// GoToTopButton.js
"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

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
                fixed bottom-8 right-2 p-3 bg-blue-500 text-white rounded-full 
                shadow-lg transition-opacity duration-300 z-50
                hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            aria-label="Go to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default GoToTopButton;
