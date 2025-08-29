'use client';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

function MotionDesignProjects() {
    const [loadedAnimations, setLoadedAnimations] = useState({});

    const projects = [
        {
            id: 1,
            title: "System Down",
            description: "Adobe After Effects",
            animationSrc: "/images/recentproject/motiondesign/Eco Game - Resting Mode.json",
            alt: "System Down",
            category: "Motion Designing",
            width: 297,
            height: 296,
        },
        {
            id: 2,
            title: "Space Animation",
            description: "Adobe After Effects",
            animationSrc: "/images/recentproject/motiondesign/Animation - 1735550889266.json",
            alt: "Space Animation",
            category: "Motion Designing",
            width: 297,
            height: 296,
        },
        {
            id: 3,
            title: "Food Animation",
            description: "Adobe After Effects",
            animationSrc: "/images/recentproject/motiondesign/food.json",
            alt: "Food Animation",
            category: "Motion Designing",
            width: 297,
            height: 296,
        },
        {
            id: 4,
            title: "Loader animation",
            description: "Adobe After Effects",
            animationSrc: "/images/recentproject/motiondesign/Loader 1.json",
            alt: "Loader animation",
            category: "Motion Designing",
            width: 631,
            height: 296,
        },
    ];

    const handleAnimationLoad = (id) => {
        setLoadedAnimations((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
                <div key={project.id} className={`relative`}>
                    {!loadedAnimations[project.id] && (
                        <div className="bg-[#151415] rounded-3xl p-2 w-full h-[380px] md:h-[400px] animate-pulse">
                            <div className="w-full h-[296px] bg-gray-700 rounded-xl mb-2"></div>
                            <div className="p-4 space-y-2">
                                <div className="h-5 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    )}
                    <div
                        className={`bg-[#151415] rounded-3xl p-2 transition-opacity duration-300 ${loadedAnimations[project.id] ? 'opacity-100' : 'opacity-0'
                            } ${!loadedAnimations[project.id] ? 'absolute top-0 left-0' : ''}`}
                    >
                        <div className="mb-2">
                            <Lottie
                                path={project.animationSrc}
                                play
                                loop
                                style={{
                                    height: project.height,
                                    borderRadius: '24px',
                                    overflow: 'hidden'
                                }}
                                onLoad={() => handleAnimationLoad(project.id)}
                                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
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

export default MotionDesignProjects;