import React, { useState, useEffect, useRef } from 'react';
import './WelcomeScreen.css'; // Import CSS file for styling
import { gsap } from 'gsap';

const WelcomeScreen = () => {
    // Function to determine orientation based on width and height
    const getOrientation = (width, height) => {
        return width < height ? 'Portrait' : 'Landscape';
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [orientation, setOrientation] = useState(getOrientation(window.innerWidth, window.innerHeight));

    // Refs for GSAP animations
    const topLeftRef = useRef(null);
    const topRightRef = useRef(null);
    const bottomLeftRef = useRef(null);
    const bottomRightRef = useRef(null);
    const textRef = useRef(null);

    // Update dimensions and orientation on window resize
    const updateDimensions = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        setOrientation(getOrientation(window.innerWidth, window.innerHeight));
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo(topLeftRef.current, { x: -200, y: -200, scale: 2 }, { x: 0, y: 0, scale: 1, duration: 2 });
        gsap.fromTo(topRightRef.current, { x: 200, y: -200, scale: 2 }, { x: 0, y: 0, scale: 1, duration: 2 });
        gsap.fromTo(bottomLeftRef.current, { x: -200, y: 200, scale: 2 }, { x: 0, y: 0, scale: 1, duration: 2 });
        gsap.fromTo(bottomRightRef.current, { x: 200, y: 200, scale: 2 }, { x: 0, y: 0, scale: 1, duration: 2 });
        gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, delay: 2 });
    }, []);

    return (
        <div className="welcome-screen">
            {/* Corner images */}
            <img src="https://indoinvite.com/nikah/template/pandora/pandora-classic/PC-AKR.png" ref={topLeftRef} className="corner-image top-left" alt="Corner Image" />
            <img src="https://indoinvite.com/nikah/template/pandora/pandora-classic/PC-AKN.png" ref={topRightRef} className="corner-image top-right" alt="Corner Image" />
            <img src="https://indoinvite.com/nikah/template/pandora/pandora-classic/PC-BKR.png" ref={bottomLeftRef} className="corner-image bottom-left" alt="Corner Image" />
            <img src="https://indoinvite.com/nikah/template/pandora/pandora-classic/PC-BKN.png" ref={bottomRightRef} className="corner-image bottom-right" alt="Corner Image" />
           
            {/* Center frame for photo */}
            <div className="center-frame container mx-auto">
                <div ref={textRef} className="header-nikah">
                    <p className="title-nikah">THE WEDDING OF</p>
                </div>
                <div id="awal-fun-div-id5"></div>
                <img className="awal-img-border" src="https://indoinvite.com/nikah/template/pandora/pandora-classic/PC-Bor.png" alt=""/>
                <div ref={textRef}>
                    <h1>Toni & Lita</h1>
                </div>
                <p className="kepada">Kepada</p>
                <button className="button-black flex items-center" type="button">
                    <i className="fa fa-envelope ikon-undangan mr-2"></i>
                    Buka Undangan
                </button>
            </div>

            {/* Wedding text */}
            
        </div>
    );
}

export default WelcomeScreen;
