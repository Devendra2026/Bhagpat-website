'use client';

import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface SchemeItem {
  title: string;
  desc: string;
  logoSvg: React.ReactNode;
  objectives: string[];
}

export default function Schemes() {
  const schemes: SchemeItem[] = [
    {
      title: 'PM Awas Yojana',
      desc: 'Providing affordable pucca houses to eligible urban families under an inclusive development mission.',
      objectives: [
        'Financial assistance up to ₹2.5 Lakhs',
        'Subsidized bank loan interest rates',
        'Preference to female heads of household',
      ],
      logoSvg: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="2" fill="#F8FAFC" />
          <circle cx="50" cy="50" r="42" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* House Base */}
          <rect x="36" y="52" width="28" height="22" fill="#134074" rx="2" />
          <polygon points="32,52 68,52 50,34" fill="#FF9933" />
          <rect x="46" y="60" width="8" height="14" fill="#FFFFFF" />
          {/* Sun emblem */}
          <circle cx="50" cy="24" r="5" fill="#F59E0B" />
          <path
            d="M50 14 L50 17 M50 31 L50 34 M38 24 L41 24 M59 24 L62 24 M42 16 L44 18 M58 30 L56 28 M42 32 L44 30 M58 16 L56 18"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: 'Swachh Bharat Mission',
      desc: 'Ensuring scientific waste management, sanitation coverage, and cleaner neighborhood surroundings.',
      objectives: [
        'Daily door-to-door garbage separation',
        'Elimination of open-defecation areas',
        'Bio-degradable composting facilities',
      ],
      logoSvg: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="2" fill="#F8FAFC" />
          {/* Glasses */}
          <circle cx="36" cy="50" r="12" stroke="#475569" strokeWidth="3" />
          <circle cx="64" cy="50" r="12" stroke="#475569" strokeWidth="3" />
          <path d="M48 50 L52 50" stroke="#475569" strokeWidth="3" />
          <path d="M24 50 L20 44" stroke="#475569" strokeWidth="3" />
          <path d="M76 50 L80 44" stroke="#475569" strokeWidth="3" />
          {/* Text inside glasses */}
          <text x="36" y="54" fontSize="10" fontWeight="900" fontFamily="sans-serif" fill="#134074" textAnchor="middle">
            स्वच्छ
          </text>
          <text x="64" y="54" fontSize="10" fontWeight="900" fontFamily="sans-serif" fill="#2E7D32" textAnchor="middle">
            भारत
          </text>
          <path d="M26 68 C 38 72, 62 72, 74 68" stroke="#FF9933" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      title: 'NULM',
      desc: 'Skill training, livelihood support, and entrepreneurship opportunities for urban poor households.',
      objectives: [
        'Self-employment group configurations',
        'Skill training certifications',
        'Shelters for urban homeless families',
      ],
      logoSvg: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="2" fill="#F8FAFC" />
          <circle cx="50" cy="50" r="40" stroke="#E07A1D" strokeWidth="1.5" />
          {/* Hands / Petals layout */}
          <path
            d="M50 25 C45 35, 35 45, 25 50 C35 55, 45 65, 50 75 C55 65, 65 55, 75 50 C65 45, 55 35, 50 25 Z"
            fill="#134074"
            opacity="0.15"
          />
          <circle cx="50" cy="50" r="10" fill="#134074" />
          <circle cx="50" cy="50" r="6" fill="#FF9933" />
          {/* Decorative spokes */}
          <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Jal Jeevan Mission',
      desc: 'Ensuring tap water supply to every household and improving urban drinking water infrastructure.',
      objectives: [
        '55 Liters potable water per person daily',
        'Water quality testing lab setups',
        'Grey-water re-usage mechanisms',
      ],
      logoSvg: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="2" fill="#F8FAFC" />
          {/* Water drop shape */}
          <path
            d="M50 25 C50 25, 66 43, 66 57 C66 67, 58 75, 50 75 C42 75, 34 67, 34 57 C34 43, 50 25, 50 25 Z"
            fill="#0EA5E9"
          />
          {/* Tap icon overlay in drop */}
          <rect x="42" y="48" width="10" height="6" fill="#FFFFFF" />
          <rect x="48" y="52" width="4" height="10" fill="#FFFFFF" />
          <circle cx="48" cy="46" r="3" fill="#FFFFFF" />
          <path d="M46 54 L44 58 M54 54 L56 58" stroke="#FFFFFF" strokeWidth="1" />
          <text x="50" y="70" fontSize="5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
            Har Ghar Jal
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Title */}
        <div className="text-center space-y-3">
          <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-saffron/20">
            Public Schemes
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gov-blue-dark tracking-tight font-serif">
            Major Government Schemes
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Smart, citizen-focused schemes implemented across Town Panchayat , Aminagar Sarai , Baghpat.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Schemes Matrix Layout (Inspired by Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schemes.map((scheme, idx) => (
            <m.div
              key={scheme.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-100/80 shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between items-center text-center hover:-translate-y-1.5 group h-full"
            >
              <div className="flex flex-col items-center">
                {/* SVG circular Logo */}
                <div className="mb-6 transition-transform group-hover:scale-105 duration-300">{scheme.logoSvg}</div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-gov-blue-dark tracking-tight group-hover:text-gov-blue-medium transition-colors">
                  {scheme.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-3 line-clamp-3">{scheme.desc}</p>
              </div>

              {/* Action Button & objectives */}
              <div className="w-full mt-6 pt-4 border-t border-slate-50 space-y-4">
                <div className="space-y-1.5 text-left hidden group-hover:block animate-fade-in">
                  <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Scheme Mandates:</p>
                  {scheme.objectives.map((obj) => (
                    <div
                      key={obj}
                      className="flex items-center gap-1.5 text-[10px] text-slate-600 font-bold leading-normal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gov-saffron shrink-0" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => alert(`Opening comprehensive mandate file for: ${scheme.title}`)}
                  className="text-xs font-black text-gov-blue-medium hover:text-gov-saffron flex items-center justify-center gap-1 transition-colors cursor-pointer w-full"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </m.div>
          ))}
        </div>

        {/* Informative Help Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-gov-blue-light p-4 rounded-2xl text-gov-blue-medium shrink-0">
            <Info className="w-8 h-8 text-gov-saffron" />
          </div>
          <div className="space-y-1 text-center md:text-left flex-1">
            <h4 className="text-sm font-black text-gov-blue-dark">Need assistance with application filing?</h4>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              If you fall under the low-income ceiling (EWS/LIG) and require direct guidance to register for Awas or
              Livelihood grants, please schedule an appointment at the Town Hall Public Helpdesk.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-gov-blue-medium hover:bg-gov-blue-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-xs text-center"
          >
            Locate Helpdesk
          </Link>
        </div>
      </div>
    </div>
  );
}
