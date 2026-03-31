import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about#about-us' },
    { name: 'Delivery', path: '/delivery#delivery' },
    { name: 'Privacy Policy', path: '/privacy#privacypolicy' }
  ];

  const contactLinks = ['+91 98765 43210', 'contact@kruticoffee.com'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@100;300;400&display=swap');
        
        .font-brand { font-family: 'Syncopate', sans-serif; }
        .font-serif-accent { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          30% { transform: translate(-15%, 5%) }
          50% { transform: translate(7%, 9%) }
          90% { transform: translate(-10%, 10%) }
        }

        .noise-bg::before {
          content: "";
          position: absolute; inset: -200%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.04;
          animation: grain 8s steps(10) infinite;
          pointer-events: none;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .link-reveal {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .link-reveal::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 1px;
          background: #b49e94; transform: translateX(-101%);
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .link-reveal:hover::after { transform: translateX(0); }
      `}</style>

      <footer
        ref={footerRef}
        className="noise-bg relative overflow-hidden bg-[#1a0f0b] text-[#b49e94] border-t border-[#4c2b23] font-body"
        id="footer"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            
            {/* COLUMN 1: BRAND */}
            <div className="w-full lg:flex-1 space-y-8 lg:space-y-10 text-center lg:text-left">
              <div className="relative inline-block lg:block">
                <h2 className="font-brand text-2xl md:text-3xl lg:text-4xl font-bold text-[#f4e3d8] tracking-[0.2em] uppercase leading-tight">
                  Kruti <br className="hidden lg:block"/> Coffee
                </h2>
                <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-[#4c2b23]"></div>
              </div>
              
              <p className="font-serif-accent italic text-xl md:text-2xl lg:text-3xl text-[#f4e3d8]/80 max-w-md mx-auto lg:mx-0 leading-snug">
                "Where the soil of Koraput meets the <span className="text-[#b49e94]">spirit of the roast</span>."
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                 {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
                   <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noreferrer" className="text-[9px] lg:text-[10px] font-brand uppercase tracking-[0.3em] hover:text-[#f4e3d8] transition-colors">
                     {social}
                   </a>
                 ))}
              </div>
            </div>

            {/* COLUMN 2: VERTICAL TEXT (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:block">
              <span className="vertical-text text-[9px] font-brand uppercase tracking-[0.8em] opacity-20 h-40">
                ESTABLISHED 2025 • ARTISANAL BATCHES
              </span>
            </div>

            {/* COLUMN 3: NAVIGATION */}
            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-6 lg:space-y-8 text-center sm:text-left">
                <h4 className="font-brand text-[10px] font-bold uppercase tracking-[0.4em] text-[#ad8656]">Explore</h4>
                <ul className="space-y-3 lg:space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <HashLink 
                        smooth 
                        to={link.path} 
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        className="link-reveal text-[10px] md:text-xs uppercase tracking-widest font-light"
                      >
                        {link.name}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 lg:space-y-8 text-center sm:text-left">
                <h4 className="font-brand text-[10px] font-bold uppercase tracking-[0.4em] text-[#ad8656]">Connect</h4>
                <ul className="space-y-3 lg:space-y-4">
                  {contactLinks.map((item) => (
                    <li key={item}>
                      <span className="link-reveal text-[10px] md:text-xs font-light tracking-wider opacity-70 cursor-pointer">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* BACKGROUND DECORATION (Size adjusted for mobile) */}
          <div className="absolute -bottom-6 md:-bottom-10 right-0 pointer-events-none select-none overflow-hidden opacity-30 lg:opacity-100">
            <h1 className="font-brand text-[20vw] lg:text-[15vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter">
              KRUTI
            </h1>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="bg-[#140c0a] border-t border-white/5 py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8">
            <div className="hidden md:flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#ad8656] rotate-45" />
              ))}
            </div>
            
            <p className="font-brand text-[8px] lg:text-[9px] tracking-[0.3em] lg:tracking-[0.4em] text-[#b49e94]/40 uppercase text-center">
              Copyright 2026 Kruti Coffee — Crafted by <span className="text-[#f4e3d8]">Shriya</span>
            </p>

            <div className="flex gap-6">
               <span className="text-[8px] lg:text-[9px] font-brand uppercase tracking-widest text-white/20">Privacy</span>
               <span className="text-[8px] lg:text-[9px] font-brand uppercase tracking-widest text-white/20">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;