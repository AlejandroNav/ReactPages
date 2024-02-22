import React, { useEffect, useState } from 'react';

const NumberCounter = ({ endValue }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        // Determine the duration of the animation
        const duration = 3000; // Animation duration in milliseconds
        const frameDuration = 1000 / 60; // Approximate duration of each frame (for 60fps)
        const totalFrames = Math.round(duration / frameDuration);
        const incrementPerFrame = endValue / totalFrames; // Amount to increment by each frame

        // Animation function
        let frame = 0;
        const countUp = () => {
            frame++;
            const current = Math.round(incrementPerFrame * frame);
            setCurrentCount(current <= endValue ? current : endValue);

            if (frame < totalFrames) {
                requestAnimationFrame(countUp);
            }
        };

        // Start the animation
        requestAnimationFrame(countUp);

        // Optional: Clean up the animation if the component unmounts
        // or if the endValue changes before the animation completes.
        return () => {
            // If necessary, you could cancel the animation here using cancelAnimationFrame
        };
    }, [endValue]); // Only re-run the effect if endValue changes

    return <span>{currentCount}</span>;
};

export default NumberCounter;