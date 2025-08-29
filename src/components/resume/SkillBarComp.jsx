'use client';

import React, { useEffect, useState, useRef } from 'react';

const SkillBarComp = ({ label, percent, bgColor }) => {
    const [width, setWidth] = useState('34%'); 
    const barRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            {
                threshold: 0.2, 
            }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) observer.unobserve(barRef.current);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => {
                setWidth(percent);
            }, 100); 
            return () => clearTimeout(timeout);
        }
    }, [isVisible, percent]);

    return (
        <div className="w-full rounded-[8px] overflow-hidden max-w-[337px]">
            <div
                ref={barRef}
                className="text-[8px] font-semibold text-[#1B1B1B] flex justify-between items-center rounded-[8px] gap-4 py-[2px] px-2 transition-all duration-1000 ease-in-out"
                style={{
                    width: width,
                    backgroundColor: bgColor,
                    minWidth: 'fit-content',
                }}
            >
                <p>{label}</p>
                <p>{percent}</p>
            </div>
        </div>
    );
};

export default SkillBarComp;
