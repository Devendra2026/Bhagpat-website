"use client";

import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact-us" className="bg-gov-blue-dark text-slate-300 border-t-4 border-gov-saffron relative z-30">
      
      {/* Top Main Link Matrix */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* government logo */}
            <img 
              src="https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2018/02/2018021632.png" 
              alt="Government Emblem" 
              className="w-12 h-12 shrink-0 object-contain bg-white rounded-full p-1"
            />
            <div className="leading-none text-white">
              <h3 className="text-sm font-extrabold uppercase tracking-wider"> Town Panchayat, Aminagar Sarai, Baghpat </h3>
              <p className="text-[10px] text-gov-saffron font-bold uppercase mt-0.5">Panchayat Administration</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Authorized administrative portal of Town Panchayat, Aminagar Sarai, Baghpat, District Baghpat, Government of Uttar Pradesh. Empowering citizens through digitized services.
          </p>
        </div>

        {/* Col 2: Useful Links */}
        <div>
          <h4 className="text-sm font-black uppercase text-white border-b border-white/10 pb-2 mb-4 tracking-wider">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            {[
              { name: "About Baghpat City", href: "/about" },
              { name: "Executive Committee Members", href: "/staff" },
              { name: "Departments", href: "/departments" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact-Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gov-saffron hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-gov-saffron font-bold">›</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Online Citizen Desks */}
        <div>
          <h4 className="text-sm font-black uppercase text-white border-b border-white/10 pb-2 mb-4 tracking-wider">
            Online Citizen Desks
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            {[
              { name: "Property & House Tax Portal", href: "/propertytax" },
              { name: "Water Supply Bills & NOC", href: "/services" },
              { name: "Birth Certificate Applications", href: "/services" },
              { name: "Death Record Verification", href: "/services" },
              { name: "Shop / Trade Licenses desk", href: "/services" },
              { name: "Building Permission NOC portal", href: "/services" },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gov-saffron hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-gov-saffron font-bold">›</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div>
          <h4 className="text-sm font-black uppercase text-white border-b border-white/10 pb-2 mb-4 tracking-wider">
            Official Contact Desk
          </h4>
          <ul className="space-y-3.5 text-xs font-semibold">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gov-saffron shrink-0 mt-0.5" />
              <span> Main Bazar, Town Panchayat , Aminagar Sarai, Baghpat, Uttar Pradesh, India - 250606</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gov-saffron shrink-0" />
              <a href="tel:+918189077892" className="hover:text-gov-saffron hover:underline">
                +91 8189077892
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gov-saffron shrink-0" />
              <a href="mailto:npasarai@gmail.com" className="hover:text-gov-saffron hover:underline">
                npasarai@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Mid Badges & Partners */}
      <div className="border-t border-white/10 py-6 bg-black/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
            <div className="border border-white/10 px-3 py-1 bg-white/5 rounded text-[10px] font-bold text-slate-400 uppercase">
              Digital India Partner
            </div>
            <div className="border border-white/10 px-3 py-1 bg-white/5 rounded text-[10px] font-bold text-slate-400 uppercase">
              Swachh Bharat Member
            </div>
            <div className="border border-white/10 px-3 py-1 bg-white/5 rounded text-[10px] font-bold text-slate-400 uppercase">
              SDV Edutech Pvt. Ltd.   Hosted
            </div>
          </div>
          
          {/* Back to top widget */}
          <button
            suppressHydrationWarning
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gov-saffron hover:bg-gov-saffron-dark text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-102"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Legal & Developer Signatures */}
      <div className="border-t border-white/10 bg-black/30 py-6 text-center text-xs font-medium text-slate-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-3">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Town Panchayat , Aminagar Sarai,Baghpat. All Rights Reserved.
          </p>
          <p className="text-[10px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: Content on this website is published and managed by Town Panchayat , Aminagar Sarai ,Baghpat . For any enquiries regarding information provided, please contact the Public Relations desk. Host nodes are secured under State Treasury systems.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600 font-semibold pt-1">
            <span>Developed with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>by SDV Edutech Pvt. Ltd.</span>
            <span>|</span>
            <span>Last Updated: June 22, 2026</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
