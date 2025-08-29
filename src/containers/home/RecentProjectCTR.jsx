'use client';
import { useState, useEffect } from 'react';
import UIUXProjects from '@/components/recentproject/UiUxComp';
import GraphicDesignProjects from '@/components/recentproject/GraphicDesigningComp';
import MotionDesignProjects from '@/components/recentproject/MotionDesigningComp';
import LogoDesignProjects from '@/components/recentproject/LogoComp';

export default function RecentProjectctr() {
    const [selectedCategory, setSelectedCategory] = useState('UI/UX');

    useEffect(() => {
        const handleCategoryChange = (e) => {
            const { category } = e.detail;
            if (['UI/UX', 'Graphic Designing', 'Motion Designing', 'Logo Design'].includes(category)) {
                setSelectedCategory(category);
            }
        };

        window.addEventListener('changeCategory', handleCategoryChange);
        return () => window.removeEventListener('changeCategory', handleCategoryChange);
    }, []);

    return (
        <section id="projects" className="w-full">
            <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-4">
                Recent Projects
            </h2>
            <p className="text-[24px] md:text-[42px] font-semibold mb-4 max-w-[847px] text-white">
                Recent work blending UI/UX, branding, and motion design.
            </p>
            <div className="flex items-center gap-4 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <button
                    className={`font-medium text-white rounded-3xl px-5 py-3 ${selectedCategory === 'UI/UX' ? 'bg-[#8B5CF6]' : 'border border-[#232323]'}`}
                    onClick={() => setSelectedCategory('UI/UX')}
                >
                    UI/UX
                </button>
                <button
                    className={`font-medium text-white rounded-3xl px-5 py-3 ${selectedCategory === 'Graphic Designing' ? 'bg-[#8B5CF6]' : 'border border-[#232323]'}`}
                    onClick={() => setSelectedCategory('Graphic Designing')}
                >
                    Graphic Designing
                </button>
                <button
                    className={`font-medium text-white rounded-3xl px-5 py-3 ${selectedCategory === 'Motion Designing' ? 'bg-[#8B5CF6]' : 'border border-[#232323]'}`}
                    onClick={() => setSelectedCategory('Motion Designing')}
                >
                    Motion Designing
                </button>
                <button
                    className={`font-medium text-white rounded-3xl px-5 py-3 ${selectedCategory === 'Logo Design' ? 'bg-[#8B5CF6]' : 'border border-[#232323]'}`}
                    onClick={() => setSelectedCategory('Logo Design')}
                >
                    Logo Design
                </button>
            </div>
            {selectedCategory === 'UI/UX' && <UIUXProjects />}
            {selectedCategory === 'Graphic Designing' && <GraphicDesignProjects />}
            {selectedCategory === 'Motion Designing' && <MotionDesignProjects />}
            {selectedCategory === 'Logo Design' && <LogoDesignProjects />}
        </section>
    );
}