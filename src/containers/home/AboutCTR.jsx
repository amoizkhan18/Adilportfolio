import React from 'react';
import Image from 'next/image';
import Resumebtn from "@/components/routingbutton/RoutingBtnComp";


export default function Aboutctr() {

    return (
        <div id="about">
            <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-4">
                About Me
            </h2>
            <p className="text-[24px] md:text-[42px] font-semibold mb-4 max-w-[830px] text-white">
                Discover the creative mind behind the
                work and the principles that drive it.
            </p>
            <div className='border border-[#232323] rounded-3xl p-5'>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-8 mb-8'>
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
                            <div className='relative'>
                                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080708] to-transparent z-10" />
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
                <div className='flex justify-center'>
                    <Resumebtn href="/resume" label="See Full Resume" />
                </div>
            </div>
        </div>
    );
}