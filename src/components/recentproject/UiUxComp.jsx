'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function UIUXProjects() {
    const [loadedImages, setLoadedImages] = useState({});
    const [popupMessage, setPopupMessage] = useState('');

    const projects = [
        {
            id: 1,
            title: 'SEO Lifetime',
            description: 'Boosting online visibility through expert SEO and digital marketing services.',
            imageSrc: '/images/recentproject/uiux/expert.png',
            alt: 'seo lifetime',
            link: 'https://seolifetime.com',
            category: 'UI/UX',
        },
        {
            id: 2,
            title: 'SIP Operations',
            description: 'Delivering tailored digital solutions in UI/UX design, web development, and IT services.',
            imageSrc: '/images/recentproject/uiux/sip.png',
            alt: 'sip operations',
            link: 'https://sipoperations.au',
            category: 'UI/UX',
        },
        {
            id: 3,
            title: 'Metex ltd',
            description: 'Offering innovative construction tools and equipment to improve project efficiency and quality.',
            imageSrc: '/images/recentproject/uiux/metex.png',
            alt: 'metex ltd',
            link: 'https://metex.ltd',
            category: 'Graphic Designing',
        },
        {
            id: 4,
            title: 'NextGen Innovation',
            description:
                'We help businesses grow online with data-driven strategies, seamless Shopify development, and impactful digital marketing.',
            imageSrc: '/images/recentproject/uiux/nextgen.png',
            alt: 'nextgen innovation',
            link: '/',
            category: 'Motion Designing',
        },
        {
            id: 5,
            title: 'Mother Helpage',
            description: 'Offering innovative construction tools and equipment to improve project efficiency and quality.',
            imageSrc: '/images/recentproject/uiux/mhelp.png',
            alt: 'mother helpage',
            link: '/', 
            category: 'Logo Design',
        },
        {
            id: 6,
            title: 'Acrosoft',
            description:
                'We help businesses grow online with data-driven strategies, seamless Shopify development, and impactful digital marketing.',
            imageSrc: '/images/recentproject/uiux/acrosoft.png',
            alt: 'acrosoft',
            link: '/', 
            category: 'Logo Design',
        },
    ];

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    const handleClick = (e, project) => {
        if (project.link === '/') {
            e.preventDefault();
            setPopupMessage(`${project.title} website is under development 🚧`);
        }
    };

    useEffect(() => {
        if (popupMessage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [popupMessage]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link
                        href={project.link}
                        key={project.id}
                        target={project.link !== '/' ? '_blank' : '_self'}
                        onClick={(e) => handleClick(e, project)}
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
                                className={`bg-[#151415] rounded-3xl p-2 transition-opacity duration-300 ${
                                    loadedImages[project.id] ? 'opacity-100' : 'opacity-0'
                                } ${!loadedImages[project.id] ? 'absolute top-0 left-0' : ''}`}
                            >
                                <div className="mb-2">
                                    <Image
                                        src={project.imageSrc}
                                        width={462}
                                        height={296}
                                        alt={project.alt}
                                        className="object-contain w-full md:w-[462px]"
                                        onLoad={() => handleImageLoad(project.id)}
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg md:text-[24px] font-semibold text-white">{project.title}</h3>
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
                    </Link>
                ))}
            </div>

            {popupMessage && (
                <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center">
                    <div className="bg-[#151415] text-white p-6 rounded-2xl max-w-sm text-center mx-4 sm:mx-4 md:mx-0">
                        <p>{popupMessage}</p>
                        <button
                            onClick={() => setPopupMessage('')}
                            className="mt-4 bg-[#8B5CF6] text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UIUXProjects;