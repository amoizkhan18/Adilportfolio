import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hiretbtn from "@/components/button/ButtonComp";

function footer() {
  return (
    <div className="relative rounded-3xl mb-[20px] lg:mb-[50px]">
      <div
        style={{
          backgroundImage: `url(/images/hero/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '#00000036 0px 0px 0px 100vmax',
          clipPath: 'inset(0 -100vmax)',
        }}
        className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-40px)] lg:w-[calc(100vw-100px)] h-full rounded-3xl"
      >
      </div>
      <div className="relative z-10 pt-15 pb-10 px-5 xl:px-0 flex flex-col items-center gap-4">
        <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[18px] md:text-[24px] font-semibold unbounded-font animate-gradient mb-1">
          Have a vision?
        </h2>
        <div>
          <h2 className="text-[24px] md:text-[42px] font-semibold max-w-[375px] mx-auto text-center mb-4 md:mb-10">Let’s turn it into
            reality—together.</h2>
          <div className="flex justify-center mb-10">
            <Hiretbtn
              href="https://wa.me/923218522583"
              target="_blank"
              label="Hire Me" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#232323]"></div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-4">
          <p className="text-center md:text-start">© 2025 [Muhammad Adil] — Designed & Developed with Passion</p>
          <div className="flex items-center gap-[10px]">
            <Link
              className="border-2 border-[#232323] p-[8px] rounded-[8px]"
              href="https://wa.me/923218522583"
              target="_blank"
            >
              <Image
                src={"/images/footer/whatsapp.png"}
                alt={"be"}
                width={32}
                height={32}
                className="object-contain rounded-[8px]"
              />
            </Link>
            <Link
              className="border-2 border-[#232323] p-[8px] rounded-[8px]"
              href={"https://www.behance.net/adilmaqbool"}
              target="_blank"
            >
              <Image
                src={"/images/footer/be.png"}
                alt={"be"}
                width={32}
                height={32}
                className="object-contain rounded-[8px]"
              />
            </Link>
            <Link
              className="border-2 border-[#232323] p-[8px] rounded-[8px]"
              href={"https://www.instagram.com/designedbyadil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
              target="_blank"
            >
              <Image
                src={"/images/footer/insta.png"}
                alt={"be"}
                width={32}
                height={32}
                className="object-contain border border-[#151415] rounded-[8px]"
              />
            </Link>
            <Link
              className="border-2 border-[#232323] p-[8px] rounded-[8px]"
              href={"https://www.linkedin.com/in/muhammad-adil-maqbool-490289297/"}
              target="_blank"
            >
              <Image
                src={"/images/footer/linkedin.png"}
                alt={"be"}
                width={32}
                height={32}
                className="object-contain border border-[#151415] rounded-[8px]"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default footer;
