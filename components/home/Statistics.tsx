'use client';

import { m, useInView } from 'framer-motion';
import { GlassWater, Landmark, MessageSquare, Users, Wrench } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  labelHi: string;
  targetValue: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

function CountUp({ value, suffix, duration = 1500 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);

    // For large numbers, increase step size to prevent lagging
    const stepSize = Math.max(Math.floor(end / (totalMiliseconds / 16)), 1);

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Format decimal values manually for special stats (e.g. 98.4%)
  const displayValue = value === 98.4 ? '98.4' : count.toLocaleString();

  return (
    <span ref={elementRef} className="font-sans font-black tracking-tight text-3xl md:text-5xl">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats: StatItem[] = [
    {
      label: 'Total Population',
      labelHi: 'कुल जनसंख्या',
      targetValue: 3,
      suffix: '+',
      icon: <Users className="w-6 h-6 text-gov-saffron" />,
      color: 'border-gov-saffron/20 bg-gov-saffron/5',
    },
    {
      label: 'Town Panchayat Wards',
      labelHi: 'नगर पंचायत वार्ड',
      targetValue: 11,
      suffix: '',
      icon: <Landmark className="w-6 h-6 text-gov-blue-medium" />,
      color: 'border-gov-blue-medium/20 bg-gov-blue-medium/5',
    },
    {
      label: 'Development Projects',
      labelHi: 'विकास परियोजनाएं',
      targetValue: 120,
      suffix: '+',
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-500/20 bg-emerald-500/5',
    },
    {
      label: 'Water Connections',
      labelHi: 'पेयजल कनेक्शन',
      targetValue: 1000,
      suffix: '+',
      icon: <GlassWater className="w-6 h-6 text-sky-600" />,
      color: 'border-sky-500/20 bg-sky-500/5',
    },
    {
      label: 'Complaints Resolved',
      labelHi: 'निवारित शिकायतें',
      targetValue: 98.4, // Custom handled in CountUp
      suffix: '%',
      icon: <MessageSquare className="w-6 h-6 text-red-600" />,
      color: 'border-red-500/20 bg-red-500/5',
    },
  ];

  return (
    <section className="relative py-16 bg-gov-blue-dark text-white overflow-hidden">
      {/* Dynamic graphic lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 100 Q 300 200 600 50 T 1200 150"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="10 5"
          />
          <path
            d="M 0 150 Q 400 50 800 120 T 1200 80"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between items-center text-center group hover:bg-white/10 transition-all hover:scale-105"
            >
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md mb-4 shrink-0 transition-transform group-hover:rotate-6">
                {stat.icon}
              </div>

              {/* Stats Numbers */}
              {/* <div>
                <CountUp value={stat.targetValue} suffix={stat.suffix} />
              </div> */}

              {/* Labels */}
              <div className="mt-2">
                <span className="text-[9px] text-gov-saffron font-bold tracking-widest uppercase block">
                  {stat.labelHi}
                </span>
                <p className="text-xs font-bold text-slate-300 mt-0.5 tracking-tight group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
