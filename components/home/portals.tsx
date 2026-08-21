"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  ShieldCheck,
} from "lucide-react"
import React from "react"

type PortalAccent =
  | "amber"
  | "teal"
  | "orange"
  | "rose"
  | "emerald"
  | "blue"
  | "indigo"

interface GovernmentPortal {
  imgUrl: string
  siteUrl: string
  title: string
  tagline: string
  accent: PortalAccent
}

interface AccentStyle {
  line: string
  icon: string
  text: string
  hoverBorder: string
}

const governmentPortals: GovernmentPortal[] = [
  {
    imgUrl:
      "https://tse4.mm.bing.net/th/id/OIP.cmWC0sWBy4tCsvptDLv6mwHaE8?r=0&pid=Api&h=220&P=0",
    siteUrl: "https://gem.gov.in/",
    title: "GeM Portal",
    tagline: "Government e-Marketplace",
    accent: "amber",
  },
  {
    imgUrl:
      "https://d16kg6xo62zbe.cloudfront.net/site-picture/463x256/e/etender.up.nic.in.png",
    siteUrl: "https://etender.up.nic.in/nicgep/app",
    title: "eTender UP",
    tagline: "e-Procurement System",
    accent: "teal",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053014.png",
    siteUrl: "https://data.gov.in/",
    title: "Data Gov India",
    tagline: "Open Data Platform",
    accent: "orange",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053094.png",
    siteUrl: "https://www.incredibleindia.org/",
    title: "Incredible India",
    tagline: "Ministry of Tourism",
    accent: "rose",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053017.png",
    siteUrl: "https://www.mygov.in/",
    title: "MyGov Portal",
    tagline: "Citizen Engagement",
    accent: "amber",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053039.png",
    siteUrl: "https://pmnrf.gov.in/",
    title: "PMNRF Fund",
    tagline: "National Relief Fund",
    accent: "emerald",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017110781.png",
    siteUrl: "https://www.pmindia.gov.in/",
    title: "PMINDIA Office",
    tagline: "Prime Minister's Office",
    accent: "blue",
  },
  {
    imgUrl:
      "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png",
    siteUrl: "https://www.india.gov.in/",
    title: "National Portal",
    tagline: "Gateway to Government",
    accent: "indigo",
  },
]

const accentStyles: Record<PortalAccent, AccentStyle> = {
  amber: {
    line: "from-amber-500 to-orange-400",
    icon: "bg-amber-50 text-amber-700 ring-amber-200",
    text: "text-amber-700",
    hoverBorder: "group-hover:border-amber-300",
  },

  teal: {
    line: "from-teal-500 to-cyan-400",
    icon: "bg-teal-50 text-teal-700 ring-teal-200",
    text: "text-teal-700",
    hoverBorder: "group-hover:border-teal-300",
  },

  orange: {
    line: "from-orange-500 to-amber-400",
    icon: "bg-orange-50 text-orange-700 ring-orange-200",
    text: "text-orange-700",
    hoverBorder: "group-hover:border-orange-300",
  },

  rose: {
    line: "from-rose-500 to-pink-400",
    icon: "bg-rose-50 text-rose-700 ring-rose-200",
    text: "text-rose-700",
    hoverBorder: "group-hover:border-rose-300",
  },

  emerald: {
    line: "from-emerald-500 to-teal-400",
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    text: "text-emerald-700",
    hoverBorder: "group-hover:border-emerald-300",
  },

  blue: {
    line: "from-blue-600 to-indigo-500",
    icon: "bg-blue-50 text-blue-700 ring-blue-200",
    text: "text-blue-700",
    hoverBorder: "group-hover:border-blue-300",
  },

  indigo: {
    line: "from-indigo-600 to-violet-500",
    icon: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    text: "text-indigo-700",
    hoverBorder: "group-hover:border-indigo-300",
  },
}

export default function GovernmentPortalsGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="government-portals-title"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute right-[-100px] bottom-[-200px] h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
            <Globe2 className="h-4 w-4 text-blue-600" />

            <span>National Digital Systems</span>
          </div>

          {/* Heading */}
          <h2
            id="government-portals-title"
            className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Important Government Portals
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-600 sm:text-base">
            Quick access to verified government websites and
            national digital platforms from one convenient place.
          </p>

          {/* Accent */}
          <div
            aria-hidden="true"
            className="mx-auto mt-7 flex items-center justify-center gap-1.5"
          >
            <span className="h-1 w-10 rounded-full bg-orange-500" />
            <span className="h-1 w-5 rounded-full bg-blue-600" />
            <span className="h-1 w-3 rounded-full bg-emerald-500" />
          </div>
        </motion.div>

        {/* Portal Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {governmentPortals.map((portal, index) => {
            const style = accentStyles[portal.accent]

            return (
              <motion.a
                key={portal.title}
                href={portal.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${portal.title} official website`}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion
                    ? 0
                    : (index % 4) * 0.06,
                  ease: "easeOut",
                }}
                className={[
                  "group relative flex min-h-[330px] flex-col overflow-hidden",
                  "rounded-2xl border border-slate-200 bg-white",
                  "shadow-sm transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70",
                  "focus:outline-none focus-visible:ring-2",
                  "focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  style.hoverBorder,
                ].join(" ")}
              >
                {/* Accent Line */}
                <div
                  aria-hidden="true"
                  className={`h-1 w-full bg-gradient-to-r ${style.line}`}
                />

                <div className="flex flex-1 flex-col p-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-200 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <ExternalLink
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </div>
                  </div>

                  {/* Logo */}
                  <div className="mt-5 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors duration-200 group-hover:bg-white">
                    <img
                      src={portal.imgUrl}
                      alt={`${portal.title} logo`}
                      loading="lazy"
                      className="max-h-full max-w-[85%] object-contain transition-transform duration-300 motion-safe:group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <div className="mt-5">
                    <h3
                      className={`text-base font-bold tracking-tight text-slate-950 transition-colors duration-200 ${style.text}`}
                    >
                      {portal.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                      {portal.tagline}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900">
                        Visit official portal
                      </span>

                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 ${style.text} transition-all duration-200`}
                      >
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Trust Note */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-600" />

          <p className="text-xs font-medium text-slate-500">
            Links open official external government websites in a new tab.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
