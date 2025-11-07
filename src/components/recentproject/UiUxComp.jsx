'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function UIUXProjects() {
    const [loadedImages, setLoadedImages] = useState({});
    const [popupImage, setPopupImage] = useState('');
    const [popupLoading, setPopupLoading] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'Optio Leads',
            description: 'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/optio.png',
            popupImg: '/images/recentproject/uiux/optio-full.png',
            alt: 'Optio Leads',
            category: 'UI/UX',
        },
        {
            id: 2,
            title: 'Kids Store Mobile Ui',
            description: 'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/kidstore.png',
            popupImg: '/images/recentproject/uiux/kidstore-full.png',
            alt: 'Kids Store Mobile Ui',
            category: 'UI/UX',
        },
        {
            id: 3,
            title: 'Unity EPOS',
            description: 'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/unity.png',
            popupImg: '/images/recentproject/uiux/unity-full.png',
            alt: 'Unity EPOS',
            category: 'Graphic Designing',
        },
        {
            id: 4,
            title: 'NextGen Innvovation',
            description:
                'Tap to open the full site design ',
            imageSrc: '/images/recentproject/uiux/nextgen.png',
            popupImg: '/images/recentproject/uiux/nextgen-full.png',
            alt: 'nextgen innovation',
            category: 'Motion Designing',
        },
        {
            id: 5,
            title: 'Acrosoft',
            description: 'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/acrosoft.png',
            popupImg: '/images/recentproject/uiux/acrosoft-full.png',
            alt: 'Acrosoft',
            category: 'Logo Design',
        },
        {
            id: 6,
            title: 'Mother Helpage',
            description:
                'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/motherhelppage.png',
            popupImg: '/images/recentproject/uiux/motherhelppage-full.png',
            alt: 'Mother Helpage',
            category: 'Logo Design',
        },
        {
            id: 7,
            title: 'VisioChart',
            description:
                'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/visiochart.png',
            popupImg: '/images/recentproject/uiux/visiochart-full.png',
            alt: 'VisioChart',
            category: 'Logo Design',
        },
        {
            id: 8,
            title: 'Strategic IT Partners',
            description:
                'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/sip.png',
            popupImg: '/images/recentproject/uiux/sip-full.png',
            alt: 'Strategic IT Partners',
            category: 'Logo Design',
        },
        {
            id: 9,
            title: 'Shirakatdari',
            description:
                'Tap to open the full site design',
            imageSrc: '/images/recentproject/uiux/shirakatdari.png',
            popupImg: '/images/recentproject/uiux/shirakatdari-full.png',
            alt: 'Shirakatdari',
            category: 'Logo Design',
        },
    ];

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    // const handleClick = (project) => {
    //     setPopupImage(project.popupImg);
    //     setPopupLoading(true);

    // };

    const handleClick = (project) => {
        setPopupLoading(true);
        setPopupImage(''); 
        setTimeout(() => {
            setPopupImage(project.popupImg);
        }, 100); 
    };

    useEffect(() => {
        if (popupLoading) {
            const timer = setTimeout(() => {
                setPopupLoading(false);
            }, 5000); 
            return () => clearTimeout(timer);
        }
    }, [popupLoading]);


    useEffect(() => {
        if (popupImage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [popupImage]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleClick(project)}
                    >
                        <div className="relative group">
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
                                className={`bg-[#151415] rounded-3xl p-2 transition-opacity duration-300 ${loadedImages[project.id] ? 'opacity-100' : 'opacity-0'
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
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] 
                                        md:text-[18px] font-medium unbounded-font animate-gradient">{project.title}</h3>
                                        <Image
                                            src="/images/service/arrow.png"
                                            alt="arrow"
                                            width={16}
                                            height={12}
                                            className="object-contain transition-transform duration-300 ease-in-out group-hover:rotate-45 rotate-0"
                                        />
                                    </div>
                                    <p className="text-[12px] text-[#FFFFFF]">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* {popupImage && (
                <div className="fixed inset-0 bg-black/80 z-[300] flex justify-center items-start overflow-y-auto popupscroll">
                    <div className="relative min-h-screen w-full flex justify-center items-center px-[20px] md:px-0 py-10">

                        {popupLoading && (
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-12 h-12 border-4 border-t-[#8B5CF6] border-gray-300 rounded-full animate-spin"></div>
                            </div>
                        )}


                        <Image
                            src={popupImage}
                            alt="Full preview"
                            width={893}
                            height={4096}
                            className={`object-contain h-full rounded-[8px] transition-opacity duration-300 ${popupLoading ? 'opacity-0' : 'opacity-100'
                                }`}
                            onLoad={() => setPopupLoading(false)}
                        />

                        <button
                            onClick={() => {
                                setPopupImage('');
                                setPopupLoading(false);
                            }}
                            className="cursor-pointer fixed top-5 right-5 lg:right-10 flex items-center justify-center bg-[#ffff] text-[16px] md:text-[18px] w-10 h-10 rounded-full hover:bg-[#8B5CF6] text-[#8B5CF6] hover:text-[#ffff] transition-all"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )} */}
            {popupImage && (
                <div className="fixed inset-0 bg-black/80 z-[300] flex justify-center items-start overflow-y-auto popupscroll">
                    <div className="relative min-h-screen w-full flex justify-center items-center px-[20px] md:px-0 py-10">

                        {/* Spinner Loader */}
                        {popupLoading && (
                            <div className="absolute inset-0 z-[310] flex justify-center items-center bg-black/40 rounded-[8px]">
                                <div className="w-12 h-12 border-4 border-t-[#8B5CF6] border-gray-300 rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Popup Image */}
                        {!popupLoading && (
                            <div className="relative z-[320] flex justify-center">
                                <Image
                                    src={popupImage}
                                    alt="Full preview"
                                    width={893}
                                    height={4096}
                                    className="object-contain h-full rounded-[8px] transition-opacity duration-300 opacity-100"
                                />
                            </div>
                        )}

                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setPopupImage('');
                                setPopupLoading(false);
                            }}
                            className="cursor-pointer fixed top-5 right-5 lg:right-10 flex items-center justify-center bg-[#ffff] text-[16px] md:text-[18px] w-10 h-10 rounded-full hover:bg-[#8B5CF6] text-[#8B5CF6] hover:text-[#ffff] transition-all z-[330]"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UIUXProjects;