import React, { useState, useEffect } from 'react';
import './Preloader.css';
import logo from '../assets/logo.png';

const Preloader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out slightly before removing
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 2500); // Start fade out at 2.5s

        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Remove at 3s

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    return (
        <>
            {children}
            {isLoading && (
                <div className={`preloader ${isFading ? 'fade-out' : ''}`}>
                    <div className="preloader-content">
                        <div className="logo-container">
                            <img src={logo} alt="Galaxy Finservice" className="preloader-logo" />
                            <div className="ring-one"></div>
                            <div className="ring-two"></div>
                        </div>
                        <div className="loader-text">
                            <span>L</span>
                            <span>O</span>
                            <span>A</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;