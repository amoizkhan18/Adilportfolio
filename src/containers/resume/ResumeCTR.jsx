import React from 'react';
import Image from 'next/image';
import ToolComp from '@/components/resume/tools/ToolComp';
import ExperienceComp from '@/components/resume/ExperienceComp';
import SkillBar from '@/components/resume/SkillBarComp';

export default function ResumeCTR() {
    const skillsData = [
        {
            id: 1,
            name: 'Figma',
            category: 'UI/UX',
            icon: '/images/resume/tools/figma.png',
            alt: 'figma',
        },
        {
            id: 2,
            name: 'Illustrator',
            category: 'Vector Based',
            icon: '/images/resume/tools/ai.png',
            alt: 'illustrator',
        },
        {
            id: 3,
            name: 'Photoshop',
            category: 'Raster Based',
            icon: '/images/resume/tools/ps.png',
            alt: 'Photoshop',
        },
        {
            id: 4,
            name: 'Premier Pro',
            category: 'Video Editing',
            icon: '/images/resume/tools/pr.png',
            alt: 'Premier Pro',
        },
        {
            id: 5,
            name: 'After Effects',
            category: 'Animation',
            icon: '/images/resume/tools/ae.png',
            alt: 'After Effects',
        },
    ];

    const ExperinceData = [
        {
            id: 1,
            name: 'UI/UX Designer @ SIP Operations',
            category: 'Aug 2023 (Full Time/Present)',
            icon: '/images/resume/experiences/sip.png',
            alt: 'sip',
        },
        {
            id: 2,
            name: 'Product Designer @ EB Genius',
            category: 'November 2023 (Part Time/Present)',
            icon: '/images/resume/experiences/eb.png',
            alt: 'eb',
        },
        {
            id: 3,
            name: 'Social Media Designer @ Wadi Adan Group',
            category: 'November 2024 - February 2025',
            icon: '/images/resume/experiences/dan.png',
            alt: 'dan',
        },
        {
            id: 4,
            name: 'Social Media Designer @ Workpod',
            category: 'September 2024 - November 2024',
            icon: '/images/resume/experiences/w.png',
            alt: 'w',
        },
    ];

    const QualificationData = [
        {
            id: 1,
            name: 'Bachelor of Science in Software Engineering From GCUF ',
            category: '2019 - 2023',
            icon: '/images/resume/qualification/gcuf.png',
            alt: 'sip',
        },
        {
            id: 2,
            name: 'Graphic Designing course From Peak Solutions',
            category: 'November 2023',
            icon: '/images/resume/qualification/peak.png',
            alt: 'eb',
        },
    ];

    return (
        <div className='mt-[123px]'>
            <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-4">
                About Me
            </h2>
            <p className="text-[24px] md:text-[42px] font-semibold mb-4 max-w-[830px] text-white">
                Discover the creative mind behind the
                work and the principles that drive it.
            </p>
            <div className='border border-[#232323] rounded-3xl p-5'>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-8 mb-8 md:mb-12'>
                    <div className='flex-1 flex flex-col justify-between'>
                        <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-4 md:mb-8">
                            Hello, I am
                        </h2>
                        <h2 className='text-[32px] md:text-[62px] font-semibold max-w-[393px] leading-none mb-8'>
                            Muhammad
                            <span className='font-normal'> Adil</span>
                        </h2>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-20 text-[12px] border-t border-b border-[#232323] pt-4 pb-4'>
                            <p>Working Since</p>
                            <p>2023</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-20 text-[12px] pt-2 '>
                            <div>
                                <p>Introduction</p>
                            </div>
                            <div>
                                <p className='mb-4'>I’m Muhammad Adil Maqbool, a multidisciplinary
                                    designer with a passion for creating thoughtful,
                                    immersive, and visually stunning digital experiences.</p>
                                <p>Over the past 2+ years, I’ve worked with startups,
                                    brands, and agencies to transform ideas into
                                    intuitive interfaces, strong visual identities, and
                                    motion-rich content that stands out in today’s
                                    digital world.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center md:block'>
                        <Image
                            src={"/images/about/aboutpic.png"}
                            alt={"about"}
                            width={420}
                            height={463}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className='mb-8 md:mb-12 flex flex-col md:flex-row gap-8 justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold unbounded-font mb-4'>Work Experience</h2>
                        <div className='space-y-4'>
                            {ExperinceData.map((experiences) => (
                                <ExperienceComp
                                    key={experiences.id}
                                    name={experiences.name}
                                    category={experiences.category}
                                    icon={experiences.icon}
                                    alt={experiences.alt}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold unbounded-font mb-4'>Qualification & Certificates</h2>
                        <div className='space-y-4 mb-4'>
                            {QualificationData.map((qualification) => (
                                <ExperienceComp
                                    key={qualification.id}
                                    name={qualification.name}
                                    category={qualification.category}
                                    icon={qualification.icon}
                                    alt={qualification.alt}
                                />
                            ))}
                        </div>
                        <h2 className='text-2xl font-semibold unbounded-font mb-4'>Capabilities</h2>
                        <div>
                            <SkillBar label="UI/UX" percent="90%" bgColor="#D9D9D9" />
                            <SkillBar label="Graphic Design" percent="85%" bgColor="#C9C9C9" />
                            <SkillBar label="Logo Design" percent="65%" bgColor="#B5B5B5" />
                            <SkillBar label="Motion Design" percent="45%" bgColor="#A9A9A9" />
                            <SkillBar label="Development" percent="20%" bgColor="#8B8B8B" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold unbounded-font mb-4'>Essential Tools I use</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                        {skillsData.map((skill) => (
                            <ToolComp
                                key={skill.id}
                                name={skill.name}
                                category={skill.category}
                                icon={skill.icon}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}