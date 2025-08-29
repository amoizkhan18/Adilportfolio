'use client';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'UI/UX',
    description:
      'Designing intuitive and responsive interfaces that enhance user interaction and elevate digital products.',
    img: '/images/service/number1.png',
    width: 110,
    height: 239,
    category: 'UI/UX',
  },
  {
    id: 2,
    title: 'Graphic Design',
    description:
      'Creating visually compelling branding, marketing, and digital assets that reflect your unique identity.',
    img: '/images/service/number2.png',
    width: 171,
    height: 241,
    category: 'Graphic Designing',
  },
  {
    id: 3,
    title: 'Motion Design',
    description:
      'Adding life to visuals through animated content, UI interactions, and branded motion graphics.',
    img: '/images/service/number3.png',
    width: 175,
    height: 243,
    category: 'Motion Designing',
  },
  {
    id: 4,
    title: 'Logo Design',
    description:
      'Designing unique, timeless logos that reflect your brand’s identity and make a strong first impression.',
    img: '/images/service/number4.png',
    width: 174,
    height: 239,
    category: 'Logo Design',
  },
];

const handleScroll = (e, targetId, category) => {
  e.preventDefault();
  const event = new CustomEvent('changeCategory', { detail: { category } });
  window.dispatchEvent(event);

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
};

export default function Servicectr() {
  return (
    <section id="services" className="w-full">
      <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-4">
        Services
      </h2>
      <p className="text-[24px] md:text-[42px] font-semibold mb-6 max-w-[810px] text-white">
        Tailored design services to bring your creative vision to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {services.map((service) => {
          let colSpan = 'col-span-1';

          if (service.id === 1 || service.id === 4) {
            colSpan = 'md:col-span-5';
          } else if (service.id === 2 || service.id === 3) {
            colSpan = 'md:col-span-7';
          }

          return (
            <button
              key={service.id}
              onClick={(e) => handleScroll(e, 'projects', service.category)}
              className={`group text-start relative rounded-2xl border border-[#ffffff14] bg-[#0f0f0f] p-6 md:p-8 transition-all duration-300 group hover:border-[#8B5CF6] ${service.id === 2 ? 'border-[#00bfff]' : ''
                } ${colSpan}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-[24px] font-semibold text-white">{service.title}</h3>
                <Image
                  src="/images/service/arrow.png"
                  alt="arrow"
                  width={16}
                  height={12}
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:rotate-45 rotate-0"
                />
              </div>
              <p className="text-[12px] text-[#FFFFFF] mt-40 md:mt-35">{service.description}</p>
              <Image
                src={service.img}
                alt={`service number ${service.img}`}
                width={service.width}
                height={service.height}
                className="object-contain absolute right-15 top-[0px]"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
