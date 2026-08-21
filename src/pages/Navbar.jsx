"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// ── Logo Icon (matches image: concentric U-arcs fingerprint style) ──
const LogoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 32 C6 16 6 6 18 6 C30 6 30 16 30 32"
      stroke="#FF3F15" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
    <path d="M10 32 C10 18 10 10 18 10 C26 10 26 18 26 32"
      stroke="#FF3F15" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M14 32 C14 21 14 15 18 15 C22 15 22 21 22 32"
      stroke="#FF3F15" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M17 32 C17 25 17 21 18 21 C19 21 19 25 19 32"
      stroke="#FF3F15" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// ── Inline SVG icons (no extra dependency) ──
const ChevronDown = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 12 12" fill="none"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6H21M3 12H21M3 18H21" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ── Reusable dropdown menu ──
const DropdownMenu = ({ items = ["Option 1", "Option 2", "Option 3"] }) => (
  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white
    shadow-[0_8px_24px_rgba(0,0,0,0.10)] rounded-xl py-2 min-w-[160px] z-50 border border-gray-100">
    {items.map((item) => (
      <a key={item} href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FF3F15]
          hover:bg-orange-50 transition-colors">
        {item}
      </a>
    ))}
  </div>
);

// ══════════════════════════════════════════════
//  NAVBAR COMPONENT
// ══════════════════════════════════════════════
const Navbar = () => {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [blogOpen, setBlogOpen]         = useState(false);

  const featuresItems = ["Feature One", "Feature Two", "Feature Three"];
  const blogItems     = ["Latest Posts", "Tutorials", "Case Studies"];

  return (
    <header className="w-full bg-white relative z-50">

      {/* ─────────────────────────────────────────
          DESKTOP  (≥ 1024 px) — exact Figma spec
      ───────────────────────────────────────── */}
      <div
        className="hidden lg:block w-full"
        style={{ maxWidth: "1438.64px", margin: "0 auto" }}
      >
        <div
          style={{
            height: "70px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "150px",
            paddingRight: "150px",
          }}
        >
          {/* Inner row */}
          <div
            className="flex items-center justify-between"
            style={{ height: "50px", gap: "130px" }}
          >
            {/* Logo — 160 × 50 */}
            <Link
              to="/"
              className="flex items-center gap-[10px] flex-shrink-0"
              style={{ width: "160.14px", height: "50px" }}
            >
              <LogoIcon />
              <span className="text-[#1a1a1a] font-semibold text-[20px] leading-none tracking-[-0.3px]">
                Undefine
              </span>
            </Link>

            {/* Nav links — 546 × 19, gap 30 */}
            <nav
              className="flex items-center flex-1"
              style={{
                width: "546.5px",
                height: "19px",
                gap: "30px",
                justifyContent: "center",
              }}
            >
              <Link
                to="/"
                className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
                  transition-colors whitespace-nowrap leading-none">
                Home
              </Link>

              <Link
                to="/about"
                className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
                  transition-colors whitespace-nowrap leading-none">
                About Us
              </Link>

              {/* Features dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#FF3F15]
                    text-sm font-medium transition-colors leading-none"
                >
                  Features <ChevronDown open={featuresOpen} />
                </button>
                {featuresOpen && (
                  <div
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    <DropdownMenu items={featuresItems} />
                  </div>
                )}
              </div>

              {/* Blog dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setBlogOpen(true)}
                  onMouseLeave={() => setBlogOpen(false)}
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#FF3F15]
                    text-sm font-medium transition-colors leading-none"
                >
                  Blog <ChevronDown open={blogOpen} />
                </button>
                {blogOpen && (
                  <div
                    onMouseEnter={() => setBlogOpen(true)}
                    onMouseLeave={() => setBlogOpen(false)}
                  >
                    <DropdownMenu items={blogItems} />
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
                  transition-colors whitespace-nowrap leading-none">
                Portfolio
              </Link>
            </nav>

            {/* Login + CTA Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/login"
                className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
                  transition-colors whitespace-nowrap px-2"
              >
                Login
              </Link>
              <Link to="/signup">
                <button
                  style={{
                    width: "172px",
                    height: "46px",
                    paddingTop: "13px",
                    paddingBottom: "13px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "10px",
                    background: "rgba(255, 63, 21, 1)",
                    flexShrink: 0,
                  }}
                  className="text-white font-semibold text-sm hover:opacity-90
                    active:scale-[0.98] transition-all cursor-pointer"
                >
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          TABLET  (768 – 1023 px)
      ───────────────────────────────────────── */}
      <div className="hidden md:flex lg:hidden items-center justify-between
        h-[64px] px-10">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-[#1a1a1a] font-semibold text-lg tracking-tight">
            Undefine
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium">Home</Link>
          <Link to="/about" className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium">About Us</Link>
          <Link to="/portfolio" className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium">Portfolio</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
              transition-colors"
          >
            Login
          </Link>
          <Link to="/signup">
            <button
              style={{ background: "rgba(255, 63, 21, 1)", borderRadius: "10px" }}
              className="text-white font-semibold text-sm px-5 py-[11px]
                hover:opacity-90 transition-opacity cursor-pointer">
              Get a Quote
            </button>
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          MOBILE  (< 768 px)
      ───────────────────────────────────────── */}
      <div className="flex md:hidden items-center justify-between h-[60px] px-5">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-[#1a1a1a] font-semibold text-[17px] tracking-tight">
            Undefine
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-[#1a1a1a] hover:text-[#FF3F15] text-sm font-medium
              transition-colors"
          >
            Login
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          MOBILE / TABLET SLIDE-DOWN MENU
      ───────────────────────────────────────── */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-6 md:px-10 pb-6 pt-3 gap-0.5">
          <Link to="/" className="py-3 text-[#1a1a1a] font-medium text-sm
            hover:text-[#FF3F15] border-b border-gray-50 transition-colors">
            Home
          </Link>
          <Link to="/about" className="py-3 text-[#1a1a1a] font-medium text-sm
            hover:text-[#FF3F15] border-b border-gray-50 transition-colors">
            About Us
          </Link>

          {/* Features accordion */}
          <div className="border-b border-gray-50">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex items-center justify-between w-full py-3
                text-[#1a1a1a] font-medium text-sm hover:text-[#FF3F15] transition-colors"
            >
              Features <ChevronDown open={featuresOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-200
              ${featuresOpen ? "max-h-40 pb-2" : "max-h-0"}`}>
              {featuresItems.map((item) => (
                <a key={item} href="#"
                  className="block pl-4 py-2 text-sm text-gray-600
                    hover:text-[#FF3F15] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Blog accordion */}
          <div className="border-b border-gray-50">
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className="flex items-center justify-between w-full py-3
                text-[#1a1a1a] font-medium text-sm hover:text-[#FF3F15] transition-colors"
            >
              Blog <ChevronDown open={blogOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-200
              ${blogOpen ? "max-h-40 pb-2" : "max-h-0"}`}>
              {blogItems.map((item) => (
                <a key={item} href="#"
                  className="block pl-4 py-2 text-sm text-gray-600
                    hover:text-[#FF3F15] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <Link to="/portfolio" className="py-3 text-[#1a1a1a] font-medium text-sm
            hover:text-[#FF3F15] transition-colors">
            Portfolio
          </Link>

          {/* Mobile Login & CTA */}
          <Link
            to="/login"
            className="mt-4 w-full text-center text-[#1a1a1a] font-semibold text-sm py-3
              hover:text-[#FF3F15] border border-gray-200 rounded-lg transition-colors"
          >
            Login
          </Link>
          <Link to="/signup">
            <button
              style={{ background: "rgba(255, 63, 21, 1)", borderRadius: "10px" }}
              className="mt-2 w-full text-white font-semibold text-sm py-3
                hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer">
              Get a Quote
            </button>
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;