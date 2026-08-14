'use client';

import { AnimatePresence, m } from 'framer-motion';
import {
  AlertOctagon,
  Award,
  CheckCircle,
  Construction,
  CreditCard,
  Download,
  Droplet,
  FileText,
  HelpCircle,
  Skull,
  Store,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  name: string;
  nameHi: string;
  desc: string;
  icon: React.ReactNode;
  themeColor: string;
  themeClass: string;
  formType: 'tax' | 'certificate' | 'license' | 'rti' | 'complaint';
  pdfName: string;
}

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 'prop-tax',
      name: 'Property Tax',
      nameHi: 'संपत्ति कर भुगतान',
      desc: 'Pay yearly house or land tax and print municipal receipts online.',
      icon: <CreditCard className="w-6 h-6" />,
      themeColor: 'indigo',
      themeClass: 'hover:border-indigo-300 text-indigo-600 bg-indigo-50/50',
      formType: 'tax',
      pdfName: 'Property_Tax_Assessment_Form.pdf',
    },
    {
      id: 'water-tax',
      name: 'Water Tax',
      nameHi: 'जल कर भुगतान',
      desc: 'Check outstanding water supply billing rates and settle dues.',
      icon: <Droplet className="w-6 h-6" />,
      themeColor: 'sky',
      themeClass: 'hover:border-sky-300 text-sky-600 bg-sky-50/50',
      formType: 'tax',
      pdfName: 'Water_Connection_Tax_Form.pdf',
    },
    {
      id: 'birth-cert',
      name: 'Birth Certificate',
      nameHi: 'जन्म प्रमाण पत्र',
      desc: 'Apply for or verify official birth registration certificates.',
      icon: <Award className="w-6 h-6" />,
      themeColor: 'emerald',
      themeClass: 'hover:border-emerald-300 text-emerald-600 bg-emerald-50/50',
      formType: 'certificate',
      pdfName: 'Birth_Registration_Form.pdf',
    },
    {
      id: 'death-cert',
      name: 'Death Certificate',
      nameHi: 'मृत्यु प्रमाण पत्र',
      desc: 'Register a demise record or apply for official death certificates.',
      icon: <Skull className="w-6 h-6" />,
      themeColor: 'rose',
      themeClass: 'hover:border-rose-300 text-rose-600 bg-rose-50/50',
      formType: 'certificate',
      pdfName: 'Death_Registration_Form.pdf',
    },
    {
      id: 'trade-lic',
      name: 'Trade License',
      nameHi: 'व्यापार लाइसेंस',
      desc: 'Obtain dynamic shop licenses or renew existing trade permits.',
      icon: <Store className="w-6 h-6" />,
      themeColor: 'amber',
      themeClass: 'hover:border-amber-300 text-amber-600 bg-amber-50/50',
      formType: 'license',
      pdfName: 'Trade_License_Application.pdf',
    },
    {
      id: 'build-perm',
      name: 'Building Permission',
      nameHi: 'भवन निर्माण अनुमति',
      desc: 'Submit architectural site plan blue-prints for urban clearances.',
      icon: <Construction className="w-6 h-6" />,
      themeColor: 'purple',
      themeClass: 'hover:border-purple-300 text-purple-600 bg-purple-50/50',
      formType: 'license',
      pdfName: 'Building_Permission_Blueprint_Form.pdf',
    },
    {
      id: 'rti',
      name: 'RTI Application',
      nameHi: 'सूचना का अधिकार (RTI)',
      desc: 'File requests under Right to Information Act to municipal office.',
      icon: <HelpCircle className="w-6 h-6" />,
      themeColor: 'cyan',
      themeClass: 'hover:border-cyan-300 text-cyan-600 bg-cyan-50/50',
      formType: 'rti',
      pdfName: 'RTI_Application_Form.pdf',
    },
    {
      id: 'grievance',
      name: 'Complaint Registry',
      nameHi: 'शिकायत पंजीकरण',
      desc: 'Register civic problems and track resolution progress directly.',
      icon: <AlertOctagon className="w-6 h-6" />,
      themeColor: 'red',
      themeClass: 'hover:border-red-300 text-red-600 bg-red-50/50',
      formType: 'complaint',
      pdfName: 'Civic_Grievance_Form.pdf',
    },
  ];

  const handleCardClick = (service: ServiceItem) => {
    setActiveService(service);
    setDownloading(false);
    setDownloaded(false);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => {
        setActiveService(null);
        setDownloaded(false);
      }, 1500);
    }, 1500);
  };

  return (
    <section id="citizen-services" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs bg-gov-blue-medium/10 text-gov-blue-medium px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-gov-blue-medium/20">
            Citizen Services Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gov-blue-dark tracking-tight mt-3 font-serif">
            Unified Public Service Desk
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Download official application forms and documents instantly for offline submission or review.
          </p>
          <div className="w-20 h-1 bg-gov-saffron mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <m.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => handleCardClick(service)}
              className={`group border border-slate-100 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between h-52.5 ${service.themeClass}`}
            >
              <div>
                {/* Icon Frame */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-105 shrink-0">
                  {service.icon}
                </div>

                {/* Titles */}
                <div className="mt-4">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    {service.nameHi}
                  </span>
                  <h3 className="text-base font-extrabold text-gov-blue-dark mt-0.5 tracking-tight group-hover:text-gov-blue-medium transition-colors">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2 leading-relaxed">{service.desc}</p>
            </m.div>
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* DOWNLOAD SIMULATION MODAL SHEET                   */}
      {/* ================================================= */}

      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-999">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="gov-gradient-blue text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-lg text-gov-saffron">{activeService.icon}</div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wider">{activeService.name}</h3>
                    <p className="text-[10px] text-slate-300 font-semibold">{activeService.nameHi}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 text-center space-y-4">
                {downloaded ? (
                  <div className="py-6 space-y-3 flex flex-col items-center">
                    <CheckCircle className="w-14 h-14 text-emerald-500" />
                    <h4 className="text-base font-extrabold text-slate-800">Download Complete!</h4>
                    <p className="text-xs text-slate-500 font-semibold">
                      Your document <span className="font-mono text-gov-blue-dark">{activeService.pdfName}</span> has been downloaded successfully.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl mx-auto flex items-center justify-center border border-indigo-100">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-800">Official Document Ready</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Click below to download the official PDF application format for {activeService.name}.
                      </p>
                      <div className="mt-3 inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-[11px] font-mono font-semibold">
                        {activeService.pdfName} (PDF)
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveService(null)}
                        className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleDownload}
                        disabled={downloading}
                        className="flex items-center gap-2 px-5 py-2 bg-gov-saffron hover:bg-gov-saffron-dark text-white rounded-lg text-xs font-bold shadow-md cursor-pointer transition-colors disabled:opacity-50"
                      >
                        {downloading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Downloading...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
