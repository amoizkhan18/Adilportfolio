'use client';
import Image from 'next/image';
import { useState } from 'react';

function GraphicDesignProjects() {
    const [loadedImages, setLoadedImages] = useState({});

    const projects = [
        {
            id: 1,
            title: "Social Media post",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/socialmediapost.png",
            alt: "Social Media post",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 2,
            title: "Bio Icon Illustration",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/bio-icon.png",
            alt: "Bio Icon Illustration",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 3,
            title: "Poster Design",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/posterdesign.png",
            alt: "Poster Design",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 4,
            title: "Facebook Cover",
            description: "Adobe Illustrator, Adobe Photoshop",
            imageSrc: "/images/recentproject/graphic-designing/facebookcover.png",
            alt: "Facebook Cover",
            category: "Graphic Designing",
            width: 631,
            height: 296,
        },
        {
            id: 5,
            title: "Social Media post",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/socialmediaposts.png",
            alt: "Social Media post",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 6,
            title: "Services Ads",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/servicead.png",
            alt: "Services Ads",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 7,
            title: "Chart Illustration",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/chart.png",
            alt: "Chart Illustration",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 8,
            title: "Card Mockup",
            description: "Adobe Illustrator, Adobe Photoshop",
            imageSrc: "/images/recentproject/graphic-designing/card.png",
            alt: "Card Mockup",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 9,
            title: "Bio Icon Illustration",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/bio.png",
            alt: "Bio Icon Illustration",
            category: "Graphic Designing",
            width: 297,
            height: 296,
        },
        {
            id: 10,
            title: "Wallpaper Design",
            description: "Adobe Illustrator",
            imageSrc: "/images/recentproject/graphic-designing/wallpaper.png",
            alt: "Wallpaper Design",
            category: "Graphic Designing",
            width: 631,
            height: 296,
        },
    ];

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div key={project.id} className={`relative ${(project.id === 4 || project.id === 10) ? 'md:col-span-2' : ''}`}>
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
                                width={project.width}
                                height={project.height}
                                alt={project.alt}
                                className="object-contain w-full md:w-auto"
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

export default GraphicDesignProjects;