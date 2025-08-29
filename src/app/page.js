'use client';
import { useEffect } from "react";
import HeroCTR from "@/containers/home/HeroCTR";
import ServiceCTR from "@/containers/home/ServiceCTR"
import RecentProjectsCTR from "@/containers/home/RecentProjectCTR";
import AboutCtr from "@/containers/home/AboutCTR";
export default function Home() {

  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTarget");
    if (targetId) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
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
      }, 50);
    }
  }, []);

  return (
    <>
      <HeroCTR />
      <ServiceCTR />
      <RecentProjectsCTR />
      <AboutCtr />
    </>
  );
}
