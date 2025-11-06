'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

                <Link
                    href="https://www.behance.net/adilmaqbool"
                    target="_blank"
                    className="group relative flex justify-start flex-shrink-0 items-center gap-2 font-medium text-white border border-[#232323] pl-2 pr-5 py-2 rounded-3xl overflow-hidden  hover:bg-[#0077FF] hover:text-[#FFFFFF] transition-all"
                >
                    <Image
                        src="/images/recentproject/behancebg.png"
                        alt="Behance background"
                        fill
                        className="absolute inset-0 object-contain opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-500 ease-in-out"

                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="transition-all duration-300 ease-in-out"
                    >
                        <circle
                            cx="16"
                            cy="16"
                            r="16"
                            className="fill-[#0077FF] transition-all duration-300 ease-in-out   group-hover:fill-[#ffff]"
                        />
                        <path
                            d="M12.5267 10C13.0741 10 13.5799 10.0419 14.0439 10.1678C14.5079 10.2516 14.8886 10.4246 15.2275 10.6343C15.5664 10.844 15.8166 11.1429 15.9887 11.5256C16.1555 11.9083 16.2442 12.3748 16.2442 12.8834C16.2442 13.4758 16.119 13.9843 15.8218 14.367C15.5664 14.7497 15.1493 15.0904 14.6383 15.3421C15.3578 15.5518 15.9053 15.9345 16.2389 16.443C16.5726 16.9515 16.7864 17.5858 16.7864 18.3093C16.7864 18.9017 16.6613 19.4102 16.4475 19.8349C16.2389 20.2595 15.9 20.6422 15.5194 20.8938C15.1388 21.1507 14.6748 21.3604 14.169 21.4862C13.6633 21.6121 13.1576 21.6959 12.6518 21.6959L7 21.7064V10H12.5267ZM12.1878 14.7497C12.6518 14.7497 13.0324 14.6239 13.3244 14.4089C13.6164 14.194 13.7467 13.8165 13.7467 13.3499C13.7467 13.0931 13.705 12.8414 13.6216 12.6737C13.5382 12.5059 13.413 12.3748 13.241 12.249C13.0741 12.1651 12.9021 12.0813 12.6935 12.0393C12.485 11.9974 12.2712 11.9974 12.0209 11.9974H9.57564V14.7549C9.57564 14.7497 12.1878 14.7497 12.1878 14.7497ZM12.3129 19.7562C12.5684 19.7562 12.8187 19.7143 13.0324 19.6723C13.241 19.6304 13.4547 19.5465 13.6216 19.4155C13.7884 19.2844 13.9188 19.1586 14.0439 18.9489C14.1273 18.7392 14.2108 18.4823 14.2108 18.1835C14.2108 17.5911 14.0439 17.1664 13.705 16.8676C13.3661 16.6107 12.9021 16.4849 12.3546 16.4849H9.57564V19.751H12.3129V19.7562ZM20.457 19.7143C20.7959 20.055 21.3016 20.2228 21.9742 20.2228C22.4382 20.2228 22.8605 20.097 23.1994 19.882C23.5383 19.6252 23.7469 19.3735 23.8303 19.1166H25.895C25.5561 20.1337 25.0504 20.8571 24.3778 21.3237C23.7052 21.7484 22.9022 22 21.9325 22C21.2599 22 20.6655 21.8742 20.1181 21.6592C19.5706 21.4495 19.1483 21.1507 18.7677 20.7261C18.3871 20.3434 18.0951 19.8768 17.923 19.3263C17.7145 18.7759 17.6258 18.1835 17.6258 17.502C17.6258 16.8676 17.7093 16.27 17.923 15.7195C18.1368 15.1691 18.4288 14.7025 18.8094 14.2779C19.19 13.8952 19.654 13.5544 20.1598 13.3447C20.7072 13.135 21.2547 13.0039 21.9325 13.0039C22.652 13.0039 23.2829 13.1298 23.8303 13.4286C24.3778 13.7274 24.8001 14.0629 25.139 14.5714C25.4779 15.038 25.7282 15.5885 25.9002 16.1809C25.9836 16.7733 26.0253 17.3709 25.9836 18.0472H19.8678C19.8678 18.7392 20.1181 19.3735 20.457 19.7143ZM23.116 15.2582C22.8188 14.9594 22.3548 14.7916 21.8073 14.7916C21.4267 14.7916 21.1348 14.8755 20.8793 15.0013C20.6238 15.1271 20.457 15.3001 20.2901 15.4679C20.1233 15.6356 20.0346 15.8506 19.9929 16.0603C19.9512 16.27 19.9095 16.443 19.9095 16.6107H23.7052C23.6218 15.9817 23.408 15.557 23.116 15.2582ZM19.4038 10.8073H24.1275V11.9502H19.4038V10.8073Z"
                            className="fill-white transition-all duration-300 ease-in-out  group-hover:fill-[#0077FF]"
                        />
                    </svg>
                    <span className='relative z-10'>See More on Behance</span>
                </Link>
            </div>
            {selectedCategory === 'UI/UX' && <UIUXProjects />}
            {selectedCategory === 'Graphic Designing' && <GraphicDesignProjects />}
            {selectedCategory === 'Motion Designing' && <MotionDesignProjects />}
            {selectedCategory === 'Logo Design' && <LogoDesignProjects />}
        </section>
    );
}