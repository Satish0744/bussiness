import React from "react";

/* ═══════════════════════════════
   ICONS
═══════════════════════════════ */
const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5Z" />
  </svg>
);

const WindIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.02 7.02 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const PuzzleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
  </svg>
);

/* ═══════════════════════════════
   ICONS — new path section
═══════════════════════════════ */
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const IdeaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
    <path d="M7 6h.01" />
    <path d="M12 6h.01" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="8" y2="18" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="16" y1="9" x2="16" y2="15" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ImplementIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
    <path d="M9 18h6" />
  </svg>
);

const DashedArrow = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M4 20 Q30 8 60 20 Q90 32 116 20"
      stroke="#D1D5DB"
      strokeWidth="1.5"
      strokeDasharray="6 4"
      strokeLinecap="round"
      fill="none"
    />
    <polyline
      points="108,14 116,20 108,26"
      stroke="#D1D5DB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/* ═══════════════════════════════
   DATA
═══════════════════════════════ */
const customers = [
  { id: 1, name: "Darlene Robertson", amount: "£105,483", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Jane Cooper",        amount: "£16,788",  avatar: "https://i.pravatar.cc/40?img=5" },
  { id: 3, name: "Ronald Richards",    amount: null,         avatar: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "Esther Howard",      amount: null,         avatar: "https://i.pravatar.cc/40?img=10" },
  { id: 5, name: "Cody Fisher",        amount: null,         avatar: "https://i.pravatar.cc/40?img=7" },
  { id: 6, name: "Theresa Webb",       amount: "£1,004",   avatar: "https://i.pravatar.cc/40?img=9" },
];

const features = [
  {
    id: 1,
    title: "Simply Copy & Paste",
    desc: "Many desktop publishing packages and web page editors now use for them.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: CopyIcon,
  },
  {
    id: 2,
    title: "Easy to Customize",
    desc: "Many desktop publishing packages and web page editors now use for them.",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    Icon: SparkleIcon,
  },
  {
    id: 3,
    title: "Made with TailwindCSS",
    desc: "Many desktop publishing packages and web page editors now use for them.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    Icon: WindIcon,
  },
];

/* ═══════════════════════════════
   DATA — new path section
═══════════════════════════════ */
const pathCards = [
  {
    id: 1,
    Icon: ClockIcon,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Accelerate Time Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.",
  },
  {
    id: 2,
    Icon: LockIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Improve Security",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.",
  },
  {
    id: 3,
    Icon: HeadsetIcon,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    title: "Rise Capital Online",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.",
  },
];

const bars = [
  { h: "h-[22px]", highlight: false },
  { h: "h-[34px]", highlight: false },
  { h: "h-[26px]", highlight: false },
  { h: "h-[44px]", highlight: true  },
  { h: "h-[30px]", highlight: false },
];

const steps = [
  {
    id: 1,
    Icon: IdeaIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    ellipseBg: "bg-emerald-50",
    title: "Idea Validation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
  },
  {
    id: 2,
    Icon: StrategyIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    ellipseBg: "bg-purple-50",
    title: "Business Strategy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
  },
  {
    id: 3,
    Icon: ImplementIcon,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    ellipseBg: "bg-cyan-50",
    title: "Implementation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: '"I will refer evreyone."',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
    name: "Jerome Bell",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/48?img=11",
    offset: false,
  },
  {
    id: 2,
    quote: '"It was great, i will appriciate that."',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
    name: "Albert Flores",
    role: "Mitsubishi",
    avatar: "https://i.pravatar.cc/48?img=20",
    offset: true,
  },
  {
    id: 3,
    quote: '"You will done a great job keep it up."',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.",
    name: "Annette Black",
    role: "Louis Vuitton",
    avatar: "https://i.pravatar.cc/48?img=16",
    offset: false,
  },
];

/* ═══════════════════════════════
   SOCIAL ICONS
═══════════════════════════════ */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76A4.49 4.49 0 0 1 .96 6.4v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08c.57 1.79 2.24 3.09 4.21 3.13A9.07 9.07 0 0 1 0 15.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 23 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ═══════════════════════════════
   LOGO SVG (matches Navbar)
═══════════════════════════════ */
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <path d="M6 32 C6 16 6 6 18 6 C30 6 30 16 30 32" stroke="#FF3F15" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    <path d="M10 32 C10 18 10 10 18 10 C26 10 26 18 26 32" stroke="#FF3F15" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M14 32 C14 21 14 15 18 15 C22 15 22 21 22 32" stroke="#FF3F15" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M17 32 C17 25 17 21 18 21 C19 21 19 25 19 32" stroke="#FF3F15" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

/* ═══════════════════════════════
   DATA
═══════════════════════════════ */
const navLinks = [
  { id: 1, label: "About" },
  { id: 2, label: "Future" },
  { id: 3, label: "Services" },
  { id: 4, label: "Portfolio" },
  { id: 5, label: "Contact" },
];

const socialLinks = [
  { id: 1, Icon: FacebookIcon,  href: "#", label: "Facebook"  },
  { id: 2, Icon: InstagramIcon, href: "#", label: "Instagram" },
  { id: 3, Icon: TwitterIcon,   href: "#", label: "Twitter"   },
  { id: 4, Icon: LinkedInIcon,  href: "#", label: "LinkedIn"  },
];

/* ═══════════════════════════════
   MAIN COMPONENT
═══════════════════════════════ */
const Section = () => {
  return (
    <div className="w-full bg-white font-raleway py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="w-full max-w-7xl mx-auto">

        {/* ── TRUST BAR ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-100 pb-8 md:pb-12 mb-12 md:mb-20 gap-6 md:gap-8">
          <p className="font-raleway font-medium text-[14px] md:text-[15px] leading-snug text-[#261A18] text-center lg:text-left">
            Trusted by companies<br className="hidden sm:block" />all over the world
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 opacity-70">
            <span className="font-serif italic font-bold text-[18px] md:text-[22px] text-gray-700 tracking-tight">
              in<span className="not-italic font-extrabold">T</span>rax
            </span>
            <span className="font-sans font-black text-[16px] md:text-[19px] text-gray-800 uppercase tracking-widest">
              PUMA
            </span>
            <div className="flex items-center gap-2 text-gray-700">
              <GearIcon />
              <span className="font-sans font-bold text-[14px] md:text-[17px]">Rotary</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PuzzleIcon />
              <span className="font-sans font-bold text-[15px] md:text-[18px]">slack</span>
            </div>
            <span className="font-sans font-extrabold text-[15px] md:text-[18px] text-gray-800 tracking-tight">
              Hub<span className="text-orange-500">S</span>p
              <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mx-0.5 mb-1" />
              t
            </span>
          </div>
        </div>

        {/* ── HEADING SECTION ── */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-raleway font-bold text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#B1AAA9] mb-2 md:mb-3">
            WHAT IT DOES
          </p>
          <h2 className="font-raleway font-extrabold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[46px] text-[#261A18] leading-tight">
            Supercharge your online <br className="hidden sm:block" />
            <span className="relative inline-block mt-1">
              business development
              <span className="absolute bottom-[4px] md:bottom-[6px] left-0 w-full h-[8px] md:h-[10px] bg-[rgba(255,63,21,0.15)] rounded-full -z-10" />
            </span>
          </h2>
        </div>

        {/* ── 50/50 BALANCED GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTAINER */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-[480px] relative px-2 sm:px-0">
              {/* Main Customers Card */}
              <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-[0px_12px_40px_0px_rgba(35,40,105,0.07)] p-5 sm:p-6 md:p-7">
                <h3 className="font-raleway font-bold text-[16px] md:text-[17px] text-[#261A18] mb-4 md:mb-5">
                  Top Customers
                </h3>

                <div className="flex flex-col">
                  {customers.map((c, i) => (
                    <div
                      key={c.id}
                      className={`flex items-center justify-between py-[10px] md:py-[12px] ${
                        i !== customers.length - 1 ? "border-b border-gray-100/80" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <img
                          src={c.avatar}
                          alt={c.name}
                          className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                        />
                        <span className="font-raleway font-medium text-[13px] md:text-[14px] text-[#261A18]">
                          {c.name}
                        </span>
                      </div>
                      {c.amount && (
                        <span className="font-raleway font-normal text-[12px] md:text-[13px] text-[#261A18]">
                          {c.amount}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlapping Floating Invoice Card */}
              <div className="absolute top-[55%] sm:top-[60%] lg:top-[62%] -right-4 sm:-right-6 md:-right-10 lg:-right-28 w-[220px] sm:w-[250px] md:w-[270px] bg-white rounded-2xl border border-gray-100 shadow-[0px_14px_35px_0px_rgba(35,40,105,0.12)] p-4 md:p-5 z-10 -translate-y-1/2">
                <p className="font-raleway font-medium text-[11px] md:text-[12px] text-[#B1AAA9] mb-1">
                  Total Invoice
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-raleway font-extrabold text-[26px] md:text-[30px] leading-none text-[#261A18]">
                      520
                    </span>
                    <span className="font-raleway font-bold text-[11px] md:text-[12px] text-green-500">
                      +12%
                    </span>
                  </div>
                  {/* Visual Bar Chart */}
                  <div className="flex items-end gap-[4px] md:gap-[5px] h-[44px]">
                    {bars.map((bar, i) => (
                      <div
                        key={i}
                        className={`${bar.h} w-[12px] md:w-[15px] rounded-[4px] ${
                          bar.highlight ? "bg-[#FF3F15]" : "bg-amber-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-[480px] flex flex-col justify-between gap-4 md:gap-5">
              {features.map((f) => (
                <div
                  key={f.id}
                  className="w-full bg-white rounded-2xl shadow-[0px_4px_25px_0px_rgba(35,40,105,0.05)] border border-gray-100 p-5 md:p-6 flex items-start gap-4 md:gap-5 hover:shadow-[0px_8px_30px_0px_rgba(35,40,105,0.09)] transition-all duration-300"
                >
                  <div className={`${f.iconBg} ${f.iconColor} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0`}>
                    <f.Icon />
                  </div>
                  <div className="flex flex-col gap-1.5 justify-center">
                    <h4 className="font-raleway font-bold text-[15px] md:text-[16px] text-[#261A18]">
                      {f.title}
                    </h4>
                    <p className="font-raleway font-normal text-[12px] md:text-[13px] leading-[20px] md:leading-[22px] text-[#B1AAA9]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>

      {/* ════════ YOUR PATH TO SUCCESS SECTION ════════ */}
      <div className="w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:gap-10 lg:gap-12">

            {/* Heading block */}
            <div className="w-full flex flex-col items-center justify-center text-center gap-2 md:gap-3">
              <p className="font-raleway font-normal text-[11px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.14em] text-[#B1AAA9]">
                Your Path to Success
              </p>
              <h2 className="font-raleway font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight md:leading-none text-[#261A18]">
                Start building the{" "}
                <span className="relative inline-block text-[#FF3F15]">
                  products
                  <span className="absolute bottom-[2px] md:bottom-[2px] left-0 w-full h-[6px] md:h-[7px] lg:h-[8px] bg-[rgba(255,63,21,0.18)] rounded-[4px] -z-10" />
                </span>
                <br className="hidden sm:block" />
                your customers want
              </h2>
            </div>

            {/* Body text */}
            <p className="font-raleway font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] md:leading-[26px] text-[#B1AAA9] text-center max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:block" />
              Imperdiet tempus felis vitae sit est quisque.
            </p>

            {/* Three Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-[66px]">
              {pathCards.map((card) => (
                <div
                  key={card.id}
                  className="w-full flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 pb-6 md:pb-8 text-center gap-3 md:gap-4"
                >
                  {/* Icon box */}
                  <div className={`w-[50px] h-[50px] md:w-[56px] md:h-[56px] lg:w-[60px] lg:h-[60px] rounded-[12px] md:rounded-[14px] ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0`}>
                    <card.Icon />
                  </div>
                  {/* Title */}
                  <h4 className="font-raleway font-bold text-[15px] md:text-[16px] leading-snug text-[#261A18]">
                    {card.title}
                  </h4>
                  {/* Description */}
                  <p className="font-raleway font-normal text-[12px] md:text-[13px] leading-[20px] md:leading-[22px] text-[#B1AAA9]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ════════ TESTIMONIALS SECTION ════════ */}
      <div className="w-full bg-slate-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

            {/* ── LEFT — 3 Staggered Cards ── */}
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:w-2/3">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className={`w-full bg-white rounded-[16px] md:rounded-[20px]
                    shadow-[0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079),0px_50px_100px_0px_rgba(0,0,0,0.04)]
                    flex flex-col justify-between p-5 md:p-6 lg:p-7
                    ${t.offset ? "lg:ml-[97px] md:ml-[60px] sm:ml-[40px] ml-0" : "ml-0"}`}
                >
                  {/* Quote + Desc */}
                  <div className="flex flex-col gap-2">
                    <p className="font-raleway font-bold text-[14px] md:text-[15px] leading-snug text-[#261A18]">
                      {t.quote}
                    </p>
                    <p className="font-raleway font-normal text-[12px] md:text-[13px] leading-[18px] md:leading-[20px] text-[#B1AAA9]">
                      {t.desc}
                    </p>
                  </div>

                  {/* Avatar Row */}
                  <div className="flex items-center gap-3 mt-3 md:mt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-[8px] md:rounded-[10px] object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-raleway font-bold text-[13px] md:text-[14px] text-[#261A18] leading-tight">
                        {t.name}
                      </span>
                      <span className="font-raleway font-normal text-[11px] md:text-[12px] text-[#B1AAA9] leading-tight">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── RIGHT — Person Image ── */}
            <div className="w-full lg:w-1/3 max-w-sm lg:max-w-full flex justify-center lg:justify-end">
              <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[380px] md:w-[280px] md:h-[440px] lg:w-[340px] lg:h-[520px] xl:w-[380px] xl:h-[573px] overflow-hidden rounded-2xl">
                <img
                  src="https://www.pngall.com/wp-content/uploads/2018/04/Businessman-Transparent.png"
                  alt="Happy customer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ════════ WORK PROCESS SECTION ════════ */}
      <div className="w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">

            {/* ── Heading Block ── */}
            <div className="w-full flex flex-col items-center justify-center text-center gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-8">
              <p className="font-raleway font-normal text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#B1AAA9]">
                Work Process
              </p>
              <h2 className="font-raleway font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight md:leading-none text-[#261A18]">
                How it{" "}
                <span className="relative inline-block">
                  works
                  <span className="absolute bottom-[2px] md:bottom-[2px] left-0 w-full h-[6px] md:h-[7px] lg:h-[8px] bg-[rgba(255,63,21,0.18)] rounded-[4px] -z-10" />
                </span>
              </h2>
            </div>

            {/* ── Sub Text ── */}
            <p className="font-raleway font-normal text-[14px] md:text-[15px] leading-[24px] md:leading-[26px] text-[#B1AAA9] text-center max-w-2xl mb-8 md:mb-12 lg:mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:block" />
              Imperdiet tempus felis vitae sit est quisque.
            </p>

            {/* ── 3 Cards Row ── */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {steps.map((step) => (
                <div key={step.id} className="w-full flex flex-col items-center text-center gap-3 md:gap-4 pt-2">
                  {/* Ellipse + Icon */}
                  <div className={`relative w-[70px] h-[58px] md:w-[80px] md:h-[64px] lg:w-[90px] lg:h-[74px] ${step.ellipseBg} rounded-[50%] flex items-center justify-center`}>
                    <div className={`${step.iconBg} ${step.iconColor} w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center`}>
                      <step.Icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-raleway font-bold text-[15px] md:text-[16px] text-[#261A18] leading-tight">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="font-raleway font-normal text-[12px] md:text-[13px] leading-[20px] md:leading-[22px] text-[#B1AAA9] max-w-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Dashed Arrows between cards (desktop) ── */}
            <div className="hidden lg:flex items-start justify-between w-full mt-[-20px] relative">
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  {index < steps.length - 1 && (
                    <div className="absolute" style={{ left: `${(index + 1) * 33.33 - 10}%`, top: '100px' }}>
                      <DashedArrow />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ════════ CTA BANNER & FOOTER ════════ */}
      <div className="w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6 lg:py-8">
          <div className="w-full max-w-7xl mx-auto">

            {/* CTA BANNER */}
            <div className="w-full rounded-[20px] border border-gray-50 bg-slate-50 flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-10 py-8 md:py-10 gap-6 md:gap-8 overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute -top-16 -left-16 w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[300px] rounded-full bg-[rgba(255,63,21,0.05)] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[300px] rounded-full bg-[rgba(255,63,21,0.05)] blur-3xl pointer-events-none" />

              {/* Left — Heading */}
              <div className="relative z-10 text-center md:text-left">
                <h2 className="font-raleway font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight md:leading-none text-black">
                  Start your business journey
                  <br className="hidden sm:block" />
                  <span className="relative inline-block mt-1">
                    better with our{" "}
                    <span className="text-[#FF3F15]">consulting</span>
                    <span className="absolute bottom-[2px] left-0 w-[180px] md:w-[200px] lg:w-[220px] h-[6px] md:h-[7px] lg:h-[8px] bg-[rgba(255,63,21,0.25)] rounded-[4px] -z-10" />
                  </span>
                </h2>
                <p className="font-raleway font-normal text-[13px] md:text-[14px] text-[#666] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br className="hidden sm:block" />
                  Imperdiet tempus felis vitae sit est quisque.
                </p>
              </div>

              {/* Right — Button */}
              <div className="shrink-0 relative z-10">
                <button className="w-full md:w-auto px-6 md:px-8 h-[46px] flex items-center justify-center gap-[10px] bg-[#FF3F15] text-white font-raleway font-bold text-[14px] rounded-[10px] cursor-pointer hover:opacity-90 active:scale-[0.97] transition-all duration-200 whitespace-nowrap">
                  Schedule Meeting
                </button>
              </div>
            </div>

            {/* FOOTER BAR */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-10 border-t border-gray-100 mt-6 md:mt-8">

              {/* Logo */}
              <div className="flex items-center gap-[8px] shrink-0">
                <LogoIcon />
                <span className="font-raleway font-semibold text-[17px] md:text-[18px] text-[#261A18] leading-none tracking-tight">
                  Undefine
                </span>
              </div>

              {/* Nav Links */}
              <nav className="flex items-center flex-wrap justify-center gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-[60px] gap-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href="#"
                    className="font-raleway font-normal text-[13px] md:text-[14px] text-[#261A18] hover:text-[#FF3F15] transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="flex items-center gap-3 md:gap-4 shrink-0">
                {socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className="text-[#B1AAA9] hover:text-[#FF3F15] transition-colors duration-200 flex items-center justify-center"
                  >
                    <s.Icon />
                  </a>
                ))}
              </div>

            </div>

            {/* Copyright row */}
            <div className="w-full pb-4 md:pb-6 flex items-center justify-center">
              <p className="font-raleway font-normal text-[12px] md:text-[13px] text-[#B1AAA9] text-center">
                © {new Date().getFullYear()} Undefine. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Section;