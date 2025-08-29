import React from 'react'
import Image from 'next/image';

const ExperienceComp = ({ name, category, icon, alt }) => {
    return (
        <div className='flex gap-4 items-center'>
                <Image
                    src={icon}
                    alt={alt}
                    width={54}
                    height={54}
                    className="object-contain"
                />
            <div>
                <p className='text-[12px] font-semibold'>{name}</p>
                <p className='text-[10px]'>{category}</p>
            </div>
        </div>
    );
};

export default ExperienceComp
