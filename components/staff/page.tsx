
'use client';

import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import { Award, Calendar, Eye, Quote, Target } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type TabType = 'welcome' | 'vision' | 'mission';

interface OfficerRowProps {
  id: string;
  roleTitle: string;
  designation: string;
  name: string;
  subText: string;
  imgSrc: string;
  term: string;
  status: string;
  welcomeQuote: string;
  welcomeText1: string;
  welcomeText2: string;
  visionTitle: string;
  visionDesc: string;
  visionPoints: string[];
  missionDesc: string;
  missionTargets: { title: string; desc: string }[];
}

function OfficerRow({ data }: { data: OfficerRowProps }) {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200/60 pb-16 last:border-0 last:pb-0">
      {/* बायाँ कॉलम: अधिकारी प्रोफाइल कार्ड */}
      <div className="lg:col-span-4 flex flex-col items-center w-full">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg text-center w-full max-w-xs relative group"
        >
          {/* पदनाम ओवरले */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-slate-700 tracking-wider shadow-sm z-10 whitespace-nowrap">
            {data.roleTitle}
          </div>

          {/* पोर्ट्रेट फ़्रेम (Next.js Image के साथ अपडेटेड) */}
          {/* <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
            <Image
              src={data.imgSrc || "/images/placeholder.png"} // यदि इमेज न हो तो डिफॉल्ट इमेज दिखेगी
              alt={`${data.name} - ${data.designation}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 320px"
              priority={data.id === 'chairman'}
            />
          </div> */}

          {/* नाम और विवरण */}
          <h3 className="text-lg font-black text-blue-950 tracking-tight leading-tight">{data.name}</h3>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1">{data.designation}</p>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{data.subText}</p>
        </m.div>
      </div>

      {/* दायाँ कॉलम: गतिशील सूचना पत्रक */}
      <div className="lg:col-span-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 min-h-95 flex flex-col justify-between">
          {/* टैब चयनकर्ता हेडर */}
          <div className="flex border-b border-slate-100 pb-3 gap-2 overflow-x-auto">
            <Button
              onClick={() => setActiveTab('welcome')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'welcome' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>संदेश</span>
            </Button>
            <Button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'vision' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>हमारा दृष्टिकोण (Vision)</span>
            </Button>
            <Button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'mission' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>हमारा मिशन (Mission)</span>
            </Button>
          </div>

          {/* गतिशील टैब सामग्री */}
          <div className="py-6 flex-1">
            {activeTab === 'welcome' && (
              <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex items-start gap-3">
                  <Quote className="w-10 h-10 text-orange-500/20 shrink-0 rotate-180" />
                  <div>
                    <p className="text-sm font-bold text-slate-800 italic leading-relaxed">"{data.welcomeQuote}"</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.welcomeText1}</p>
                {data.welcomeText2 && <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.welcomeText2}</p>}
              </m.div>
            )}

            {activeTab === 'vision' && (
              <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex items-center gap-2 text-blue-950">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">{data.visionTitle}</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.visionDesc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {data.visionPoints.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <Award className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            )}

            {activeTab === 'mission' && (
              <m.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="flex items-center gap-2 text-blue-950">
                  <Target className="w-5 h-5 text-orange-500" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">प्रमुख लक्ष्य और उद्देश्य</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.missionDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {data.missionTargets.map((item) => (
                    <div key={item.title} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <h5 className="text-xs font-black text-blue-800">{item.title}</h5>
                      <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            )}
          </div>

          {/* आधिकारिक पाद लेख / पता */}
          <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>कार्यालय का पता: मुख्य बाजार, नगर पंचायत, अमीनगर सराय, बागपत,  UP- 250606</span>
            </div>
            <div className="text-left sm:text-right sm:border-l sm:border-slate-200 sm:pl-4">
              <p className="text-blue-950">नगर पंचायत, अमीनगर सराय</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                सरकारी पंजीकरण स्वीकृत
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Staff() {
  const leadersData: OfficerRowProps[] = [
    {
      id: 'chairman',
      roleTitle: 'निर्वाचित अध्यक्ष',
      designation: 'अध्यक्ष (Chairman)',
      name: 'श्रीमती सुनीता मलिक',
      subText: 'नगर पंचायत, अमीनगर सराय, बागपत',
      imgSrc: '', // <--- public/images/chairman.png फ़ोल्डर में फ़ोटो रखें
      term: '',
      status: '',
      welcomeQuote: 'अमीनगर सराय: विरासत को सहेजते, भविष्य को संवारते',
      welcomeText1: 'अमीनगर सराय का इतिहास और इसकी गौरवशाली पहचान—मेरठ कमिष्णरी क्षेत्र के सबसे पुराने शहर के रूप में—हम सभी निवासियों के लिए गर्व का विषय है। एक जन-प्रतिनिधि के रूप में, मेरा प्रयास रहा है कि हम न केवल अपनी समृद्ध विरासत को सुरक्षित रखें, बल्कि आधुनिक विकास के पथ पर भी उतनी ही तेजी से आगे बढ़ें।',
      welcomeText2: 'हमारा नगर पंचायत प्रशासन पूरी पारदर्शिता, ईमानदारी और जन-भागीदारी के साथ काम करने के लिए प्रतिबद्ध है। हमारी यह यात्रा आप सभी के सहयोग और विश्वास के बिना अधूरी है। हम मिलकर एक ऐसा अमीनगर सराय बनाएंगे जो न केवल स्वच्छ और हरा-भरा हो, बल्कि जहाँ हर नागरिक को सुविधाएँ और सम्मान मिले।',
      visionTitle: 'हमारा दृष्टिकोण (Our Vision)',
      visionDesc: 'हमारा विजन एक ऐसे आदर्श नगर पंचायत का निर्माण करना है जो आत्मनिर्भर, प्रगतिशील और आधुनिक हो।',
      visionPoints: [
        'समावेशी विकास: सभी नागरिकों को विकास की मुख्यधारा से जोड़ना।',
        'ऐतिहासिक गौरव और आधुनिकता का संतुलन बनाए रखना।',
        'सतत और हरित भविष्य: पर्यावरण के अनुकूल विकास मॉडल अपनाना।',
        'आने वाली पीढ़ियों के लिए स्वच्छ और सुरक्षित वातावरण तैयार करना।',
      ],
      missionDesc: 'हमारा मिशन जमीनी स्तर पर उन सुधारों को लागू करना है जो नागरिकों के दैनिक जीवन को सरल और बेहतर बनाते हैं।',
      missionTargets: [
        { title: 'बुनियादी सुविधाएँ', desc: '24/7 सुरक्षित पेयजल, सुव्यवस्थित जल निकासी और हर गली में स्ट्रीट लाइट।' },
        { title: 'स्वच्छता एवं पर्यावरण', desc: 'वैज्ञानिकी कचरा प्रबंधन के साथ "स्वच्छ अमीनगर, हरित अमीनगर" का लक्ष्य।' },
        { title: 'डिजिटल गवर्नेंस', desc: 'नगर पंचायत की सेवाओं को ऑनलाइन और पारदर्शी बनाकर जन-भागीदारी बढ़ाना।' },
      ],
    },
    {
      id: 'eo',
      roleTitle: 'प्रशासनिक प्रमुख',
      designation: 'अधिशासी अधिकारी (EO)',
      name: 'श्रीमती भावना सिंह',
      subText: 'नगर पंचायत, अमीनगर सराय, बागपत',
      imgSrc: '', // <--- public/images/eo.png फ़ोल्डर में फ़ोटो रखें
      term: 'शासकीय नियुक्ति',
      status: 'कार्यकारी प्रमुख',
      welcomeQuote: 'पारदर्शी प्रशासन - जवाबदेह नगर पंचायत',
      welcomeText1: 'नगर पंचायत अमीनगर सराय के कार्यकारी कार्यालय के रूप में, हमारा प्राथमिक लक्ष्य नगर पंचायत की सेवाओं को सरल, पारदर्शी and कुशल करना है। मेरा मानना है कि एक नगर पंचायत की सफलता केवल उसके विकास कार्यों से नहीं, बल्कि नागरिकों के साथ उसके जुड़ाव से मापी जाती है।',
      welcomeText2: 'हमारा यह कार्यालय इस बात के लिए प्रतिबद्ध है कि शासन की नीतियां बिना किसी विलंब के और पूरी निष्ठा के साथ आप तक पहुँचे। हम आपके सुझावों का स्वागत करते हैं और एक बेहतर अमीनगर सराय के निर्माण के लिए सदैव तत्पर हैं।',
      visionTitle: 'प्रशासनिक दृष्टिकोण',
      visionDesc: 'कार्यालय के कामकाज को पूरी तरह डिजिटल और पेपरलेस बनाना ताकि आवेदनों और शिकायतों का निस्तारण बिना किसी देरी के समयबद्ध तरीके से पूरा हो सके।',
      visionPoints: [
        'ई-ऑफिस प्रणालियों के माध्यम से 100% डिजिटल फाइल ट्रैकिंग।',
        'नागरिकों को पारदर्शी और समयबद्ध सेवाएं सुनिश्चित करना।',
        'सरकारी कल्याणकारी योजनाओं का सुचारू और निष्पक्ष क्रियान्वयन।',
        'जनता की शिकायतों के निवारण के लिए सिंगल-विंडो सिस्टम।',
      ],
      missionDesc: 'शहरी विकास योजनाओं को जमीनी स्तर पर कड़ाई से लागू करना और जन प्रतिनिधियों व प्रशासन के बीच बेहतर समन्वय स्थापित करना।',
      missionTargets: [
        { title: 'डिजिटल सेवाएं', desc: 'ई-नगरपालिका सेवाओं का शत-प्रतिशत एकीकरण।' },
        { title: 'पारदर्शिता', desc: 'सरकारी फंड का समय पर और पूरी पारदर्शिता के साथ सदुपयोग।' },
        { title: 'त्वरित निवारण', desc: 'नागरिकों की समस्याओं का त्वरित और कुशल समाधान।' },
      ],
    },
    {
      id: 'head-clerk',
      roleTitle: 'कार्यालय अधीक्षक',
      designation: 'मुख्य लिपिक (Head Clerk)',
      name: 'श्री अंकित शर्मा',
      subText: 'नगर पंचायत, अमीनगर सराय, बागपत',
      imgSrc: '', // <--- public/images/clerk.png फ़ोल्डर में फ़ोटो रखें
      term: 'वरिष्ठ प्रशासन',
      status: 'रजिस्ट्री प्रभारी',
      welcomeQuote: 'आपकी सेवा और सहयोग के लिए सदैव तत्पर',
      welcomeText1: 'नगर पंचायत अमीनगर सराय के कार्यालय में मुख्य लिपिक के रूप में, मेरा उद्देश्य यह सुनिश्चित करना है कि हमारे कार्यालय की कार्यप्रणाली व्यवस्थित, पारदर्शी और जनहितैषी बनी रहे। यह कार्यालय न केवल कागजी कार्यवाही का केंद्र है, बल्कि आप सभी नागरिकों की समस्याओं और जरूरतों के समाधान का एक सेतु है।',
      welcomeText2: 'हमारा प्रयास है कि नगर पंचायत की हर सेवा—चाहे वह जन्म-मृत्यु प्रमाण पत्र हो, कर (Tax) भुगतान हो या अन्य प्रशासनिक सेवाएं—आप तक बिना किसी असुविधा के पहुँचे। मेरी टीम और मैं कार्यालय के दैनिक कार्यों में सुगमता और गति लाने के लिए प्रतिबद्ध हैं। हम आपसे भी अपेक्षा करते हैं कि आप नियमों का पालन करें और विकास कार्यों में सहयोग दें।',
      visionTitle: 'त्रुटिहीन अभिलेख शासन',
      visionDesc: 'दशकों पुराने भौतिक सार्वजनिक रजिस्टरों और अभिलेखागारों को बिना किसी डेटा हानि के पूरी तरह से सुरक्षित डिजिटल और क्लाउड डेटाबेस में स्थानांतरित करना।',
      visionPoints: [
        'पुराने ऐतिहासिक सरकारी अभिलेखों का पूर्ण डिजिटलीकरण।',
        'त्वरित स्वीकृतियों के लिए सुव्यवस्थित सत्यापन प्रणाली।',
        'सत्यापित आवेदनों के निस्तारण में लगने वाले समय को न्यूनतम करना।',
        'टाउन हॉल के भीतर नागरिकों की सहायता के लिए बेहतर हेल्पडेस्क।',
      ],
      missionDesc: 'दैनिक कार्यों में सटीकता बनाए रखना, त्रुटिहीन रिकॉर्ड कीपिंग सुनिश्चित करना और बिना किसी आंतरिक देरी के नागरिक आवेदनों को संसाधित करना।',
      missionTargets: [
        { title: 'त्वरित प्रमाणपत्र', desc: 'जन्म/मृत्यु प्रमाणपत्रों का त्वरित और समयबद्ध प्रेषण।' },
        { title: 'नागरिक सहायता', desc: 'बुजुर्गों और दिव्यांगजनों के लिए विशेष ऑफलाइन मार्गदर्शन।' },
        { title: 'डेटा सुरक्षा', desc: 'कर (Tax) और भूमि से जुड़े सरकारी दस्तावेजों की पूर्ण सुरक्षा।' },
      ],
    },
  ];

  return (
    <section id="about-us" className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* पृष्ठभूमि सजावट */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* अनुभाग हेडर */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-orange-500/20">
            नेतृत्व एवं प्रशासन
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mt-3">
            अध्यक्ष एवं प्रशासनिक पटल
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            नगर पंचायत, अमीनगर सराय, बागपत के आधिकारिक प्रशासनिक पोर्टल पर आपका स्वागत है।
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* लंबवत सूची लेआउट */}
        <div className="space-y-16">
          {leadersData.map((leader) => (
            <OfficerRow key={leader.id} data={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
