import React from "react";

const PlayCircle = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="shrink-0">
    <circle cx="16" cy="16" r="15.25" stroke="#B1AAA9" strokeWidth="1.5" />
    <path d="M13.5 11L21.5 16L13.5 21V11Z" fill="#261A18" fillOpacity="0.8" />
  </svg>
);

const Hero = () => {
  return (
    <>
      {/* =============================================
          DESKTOP ≥ 1024px — Pixel-exact Figma spec
      ============================================= */}
      <section className="hidden lg:block w-full overflow-x-hidden bg-slate-50">
        <div className="relative mx-auto w-[1440px] max-w-full h-[826px] overflow-hidden ">

          {/* BUILD YOUR PLAN */}
          <p className="absolute top-[262px] left-[150px] w-[125px] h-[16px] font-raleway font-normal text-[14px] leading-none tracking-[0.06em] uppercase text-[#261A18] whitespace-nowrap m-0">
            Build Your Plan
          </p>

          {/* Main Heading */}
          <h1 className="absolute top-[288px] left-[150px] w-[473px] h-[210px] font-raleway font-bold text-[60px] leading-none text-[#261A18] m-0">
            <span className="relative">
              Everything you
              <span className="absolute bottom-[2px] left-0 w-full h-2 bg-[rgba(255,63,21,0.18)] rounded-[4px] -z-10" />
            </span>
            <br />
            need to run your
            <br />
            online business
          </h1>

          {/* Body Text */}
          <p className="absolute top-[518px] left-[150px] w-[412px] h-[52px] font-raleway font-normal text-[16px] leading-[26px] text-[#B1AAA9] m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Imperdiet tempus felis vitae sit est quisque.
          </p>

          {/* Get Started Button — 193×46, left:150, top:600 */}
          <button className="absolute top-[600px] left-[150px] w-[193px] h-[46px] flex items-center justify-center gap-[10px] pt-[13px] pb-[13px] pl-[20px] pr-[20px] bg-[#FF3F15] text-white font-raleway text-[14px] rounded-[10px] cursor-pointer hover:opacity-90 active:scale-[0.97] transition-all duration-200">
            <span className="font-bold">Get Started</span>
            <span className="font-normal opacity-90">– For Free</span>
          </button>

          {/* Watch Demo Button — 153×46, left:373, top:600 */}
          <button className="absolute top-[600px] left-[373px] w-[153px] h-[46px] flex items-center justify-center gap-[10px] bg-transparent font-raleway font-medium text-[14px] text-[#261A18] rounded-[10px] cursor-pointer border-[1.5px] border-[#B1AAA9] hover:border-[#261A18] hover:text-[#FF3F15] transition-all duration-200">
            <PlayCircle />
            Watch Demo
          </button>

          {/* Right Image — w:556 h:746 top:150 left:733 */}
          <div className="absolute top-[150px] left-[733px] w-[556px] h-[746px] overflow-hidden">
            <img
              src="https://zidopay.com/wp-content/uploads/2024/01/finpath-payroll-img-11.jpg"
              alt="Business professional"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </section>

      {/* =============================================
          TABLET  768px – 1023px
      ============================================= */}
      <section className="hidden md:flex lg:hidden flex-row mt-[64px] bg-[#f5f3f2] border-[1.5px] border-[#B1AAA9] overflow-hidden min-h-[600px]">

        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-10 py-16 z-10">

          <p className="font-raleway font-normal text-[13px] uppercase tracking-[0.06em] text-[#261A18] mb-5">
            Build Your Plan
          </p>

          <h1 className="font-raleway font-bold text-[38px] leading-[106%] text-[#261A18] mb-6 max-w-[380px]">
            <span className="relative">
              Everything you
              <span className="absolute bottom-[2px] left-0 w-full h-[7px] bg-[rgba(255,63,21,0.18)] rounded-[4px] -z-10" />
            </span>
            <br />
            need to run your
            <br />
            online business
          </h1>

          <p className="font-raleway font-normal text-[15px] leading-[26px] text-[#B1AAA9] max-w-[340px] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Imperdiet tempus felis vitae sit est quisque.
          </p>

          <div className="flex items-center flex-wrap gap-4">
            <button className="flex items-center justify-center gap-[8px] h-[46px] px-5 bg-[#FF3F15] text-white font-raleway text-[14px] rounded-[10px] cursor-pointer hover:opacity-90 active:scale-[0.97] transition-all duration-200">
              <span className="font-bold">Get Started</span>
              <span className="font-normal">– For Free</span>
            </button>

            <button className="flex items-center justify-center gap-[10px] h-[46px] px-5 bg-transparent font-raleway font-medium text-[14px] text-[#261A18] rounded-[10px] cursor-pointer border-[1.5px] border-[#B1AAA9] hover:border-[#261A18] hover:text-[#FF3F15] transition-all duration-200">
              <PlayCircle />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[45%] min-h-[600px] overflow-hidden">
          <img
            src="https://zidopay.com/wp-content/uploads/2024/01/finpath-payroll-img-11.jpg"
            alt="Business professional"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </section>

      {/* =============================================
          MOBILE  < 768px
      ============================================= */}
      <section className="flex flex-col md:hidden mt-[60px] bg-[#f5f3f2] border-[1.5px] border-[#B1AAA9] overflow-hidden">

        {/* Image on top for mobile */}
        <div className="w-full h-[320px] overflow-hidden">
          <img
            src="https://zidopay.com/wp-content/uploads/2024/01/finpath-payroll-img-11.jpg"
            alt="Business professional"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col px-6 pt-10 pb-14">

          <p className="font-raleway font-normal text-[12px] uppercase tracking-[0.07em] text-[#261A18] mb-4">
            Build Your Plan
          </p>

          <h1 className="font-raleway font-bold text-[32px] leading-[108%] text-[#261A18] mb-5">
            <span className="relative">
              Everything you
              <span className="absolute bottom-[2px] left-0 w-full h-[6px] bg-[rgba(255,63,21,0.18)] rounded-[4px] -z-10" />
            </span>
            <br />
            need to run your
            <br />
            online business
          </h1>

          <p className="font-raleway font-normal text-[14px] leading-[24px] text-[#B1AAA9] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Imperdiet tempus felis vitae sit est quisque.
          </p>

          <div className="flex flex-col gap-3 w-full">
            <button className="flex items-center justify-center gap-[8px] h-[46px] w-full bg-[#FF3F15] text-white font-raleway text-[14px] rounded-[10px] cursor-pointer hover:opacity-90 active:scale-[0.97] transition-all duration-200">
              <span className="font-bold">Get Started</span>
              <span className="font-normal">– For Free</span>
            </button>

            <button className="flex items-center justify-center gap-[10px] h-[46px] w-full bg-transparent font-raleway font-medium text-[14px] text-[#261A18] rounded-[10px] cursor-pointer border-[1.5px] border-[#B1AAA9] hover:border-[#261A18] hover:text-[#FF3F15] transition-all duration-200">
              <PlayCircle />
              Watch Demo
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;