import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // 640px is typically the breakpoint for 'sm' in Tailwind

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 mt-20 md:mt-36"
        style={{ height: '75vh' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
                Discover the perfect
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
                Project for funding at YouthChain
            </h1>
            <p className="text-lg md:text-xl mt-4 font-regular text-center text-white">
                Explore innovative ventures that align with your passions {!isSmallScreen && <br />}
                and be part of shaping the future.
            </p>

            <input
                type="text"
                placeholder="Search for project"
                className="bg-black bg-opacity-60 text-white placeholder-white border border-white mt-8 md:mt-10 rounded-full w-2/3 md:w-1/2 lg:w-1/3 py-2 px-4 placeholder-centered text-sm text-center"
            />
        </div >
    );
}

export default Welcome