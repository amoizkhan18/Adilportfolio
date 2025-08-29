'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import GetInTouchButton from '../button/ButtonComp';
import { useRouter, usePathname } from 'next/navigation';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);


  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/", { scroll: false });
      sessionStorage.setItem("scrollTarget", targetId);
      return;
    }

    scrollToSection(targetId);
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const extraOffset = 30;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - (headerHeight + extraOffset),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-5 w-full max-w-[980px] px-5 lg:px-0">
      <header
        className={`relative border border-[rgba(255,255,255,0.2)] backdrop-blur-[27.8px] flex justify-between items-center px-4 py-3 transition-colors duration-300 ${isScrolled
          ? 'bg-[rgba(30,30,30,0.7)]'
          : 'bg-[rgba(255,255,255,0.05)]'
          } ${isOpen ? 'rounded-t-[32px]' : 'rounded-full'}`}
      >
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl md:hidden">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className="hidden md:flex gap-8 ml-4">
          <Link
            href="#services"
            className="text-white font-medium"
            onClick={(e) => handleScroll(e, 'services')}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-white font-medium"
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Recent Projects
          </Link>
          <Link
            href="#about"
            className="text-white font-medium"
            onClick={(e) => handleScroll(e, 'about')}
          >
            About me
          </Link>
        </nav>

        <GetInTouchButton href="https://wa.me/923218522583" target="_blank" label="Get in touch" />
      </header>

      {isOpen && (
        <div className="">
          <div className="w-full max-w-[980px] mx-auto bg-[rgba(30,30,30,0.7)] border border-[rgba(255,255,255,0.2)] backdrop-blur-[27.8px] rounded-b-[24px] px-6 py-4 space-y-4">
            <Link
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="block text-white border-b border-white/10 pb-2"
            >
              Services
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="block text-white border-b border-white/10 pb-2"
            >
              Recent Projects
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="block text-white pb-2"
            >
              About me
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;