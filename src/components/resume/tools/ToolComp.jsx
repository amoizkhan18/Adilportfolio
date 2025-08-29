import React from 'react'
import Image from 'next/image';

const SkillItToolComp = ({ name, category, icon, alt }) => {
    return (
        <div className='flex gap-4 items-center border-2 border-[#232323] rounded-[16px] p-2 hover:bg-[#232323]  transition-all duration-300 ease-in-out'>
            <div className='bg-[#232323] rounded-[8px] p-2'>
                <Image
                    src={icon}
                    alt={alt}
                    width={38}
                    height={38}
                    className="object-contain"
                />
            </div>
            <div>
                <p className='text-[12px] font-semibold'>{name}</p>
                <p className='text-[10px]'>{category}</p>
            </div>
        </div>
    );
};

export default SkillItToolComp
