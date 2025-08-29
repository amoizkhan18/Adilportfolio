'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ContactBtnComp({ href = '/', label = '' }) {
  const handleScroll = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = 80;
        const extraOffset = 30;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - (headerHeight + extraOffset),
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <Link
      href={href}
      onClick={handleScroll}
      className="group flex items-center gap-3 bg-[#8B5CF6] px-[24px] py-[14px] text-white font-medium rounded-full"
    >
      {label}
      <Image
        src="/images/button/arrow.png"
        alt="arrow"
        width={16}
        height={12}
        className="object-contain transition-transform duration-300 ease-in-out group-hover:rotate-45 rotate-0"
      />
    </Link>
  );
}
