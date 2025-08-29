'use client';
import Image from 'next/image';
import { useState } from 'react';

function LogoDesignProjects() {
    const [loadedImages, setLoadedImages] = useState({});

    const projects = [
        {
            id: 1,
            title: "INCS",
            description: "Security & Network Services Company",
            imageSrc: "/images/recentproject/logo/incs.png",
            alt: "INCS",
            category: "UI/UX"
        },
        {
            id: 2,
            title: "Next Gen Innovation",
            description: "Marketing Company",
            imageSrc: "/images/recentproject/logo/nextgen.png",
            alt: "Next Gen Innovation",
            category: "UI/UX"
        },
        {
            id: 3,
            title: "VisioChart",
            description: "Charts Services Company",
            imageSrc: "/images/recentproject/logo/visiochart.png",
            alt: "VisioChart",
            category: "Graphic Designing"
        },
        {
            id: 4,
            title: "Adan Consultancy",
            description: "Consultancy & Tourism Company",
            imageSrc: "/images/recentproject/logo/adan.png",
            alt: "Adan Consultancy",
            category: "Motion Designing"
        },
        {
            id: 5,
            title: "Minhaj Academy",
            description: "Institute Logo Branding",
            imageSrc: "/images/recentproject/logo/minhaj.png",
            alt: "Minhaj Academy",
            category: "Logo Design"
        },
        {
            id: 6,
            title: "NanoBit World",
            description: "Saas Services Company",
            imageSrc: "/images/recentproject/logo/nano.png",
            alt: "NanoBit World",
            category: "Logo Design"
        },
        {
            id: 7,
            title: "Split Ease",
            description: "Ledger Application Logo",
            imageSrc: "/images/recentproject/logo/split.png",
            alt: "Split Ease",
            category: "Logo Design"
        },
        {
            id: 8,
            title: "Mind Muse",
            description: "Marketing Company",
            imageSrc: "/images/recentproject/logo/mind.png",
            alt: "Mind Muse",
            category: "Logo Design"
        },
        {
            id: 9,
            title: "La’Scent",
            description: "Online Perfume & Accessories Store",
            imageSrc: "/images/recentproject/logo/la.png",
            alt: "La’Scent",
            category: "Logo Design"
        }
    ];

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div key={project.id} className="relative">
                    {!loadedImages[project.id] && (
                        <div className="bg-[#151415] rounded-3xl p-2 w-full h-[380px] md:h-[400px] animate-pulse">
                            <div className="w-full h-[296px] bg-gray-700 rounded-xl mb-2"></div>
                            <div className="p-4 space-y-2">
                                <div className="h-5 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    )}
                    <div
                        className={`bg-[#151415] rounded-3xl p-2 transition-opacity duration-300 ${
                            loadedImages[project.id] ? 'opacity-100' : 'opacity-0'
                        } ${!loadedImages[project.id] ? 'absolute top-0 left-0' : ''}`}
                    >
                        <div className="mb-2">
                            <Image
                                src={project.imageSrc}
                                width={297}
                                height={296}
                                alt={project.alt}
                                className="object-contain w-full md:w-[462px]"
                                onLoad={() => handleImageLoad(project.id)}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[20px] font-medium unbounded-font animate-gradient mb-2">
                                {project.title}
                            </h2>
                            <p className="text-[12px] text-[#FFFFFF]">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LogoDesignProjects;