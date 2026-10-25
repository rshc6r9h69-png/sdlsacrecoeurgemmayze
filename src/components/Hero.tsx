import React from 'react';
import { ArrowDown, Flame, ExternalLink, Calendar, MapPin, Phone } from 'lucide-react';
import { FoulardIcon, GroupLogo, SdlNationalLogo } from './FoulardIcon';
import { REAL_PHOTOS, OFFICIAL_INSCRIPTION_FORM_URL, GROUP_CONTACT } from '../data/scoutData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-[#FEF7D2] text-stone-900 border-b-2 border-yellow-400/80">
      {/* Decorative top ribbon: Green, Yellow, Red */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[60] flex">
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Logos, Title, Description, Quick Info & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Identity Line: National SDL + VII° Beyrouth */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-green-950 mb-5">
              <SdlNationalLogo sizeClass="h-9 w-auto" />
              <span>Les Scouts Du Liban (SDL)</span>
              <span aria-hidden="true" className="text-red-600">·</span>
              <span className="text-red-700 font-extrabold">Depuis 1955</span>
              <span aria-hidden="true" className="text-red-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-green-900 font-extrabold">
                <FoulardIcon size={20} />
                <span>VII° Beyrouth</span>
              </span>
            </div>

            {/* Aesthetic Logo + Title Lockup (Transparent PNG integrated organically) */}
            <div className="flex items-center gap-5 sm:gap-6 mb-6">
              {/* Diamond Group Logo with soft natural drop shadow, no boxy white border */}
              <div className="shrink-0 flex items-center justify-center p-1">
                <GroupLogo sizeClass="h-28 sm:h-36 w-auto" withShadow={true} />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-red-700 block mb-1">
                  Collège du Sacré-Cœur • Gemmayzé
                </span>
                <h1
                  className="font-group-name text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-green-950 leading-[1.08]"
                  style={{ textWrap: 'balance' }}
                >
                  Groupe Sacré-Cœur{' '}
                  <span className="text-red-700 underline decoration-yellow-400 decoration-4 underline-offset-4">
                    Gemmayzé
                  </span>
                </h1>
                <div className="flex items-center gap-2 mt-2 text-xs font-bold text-stone-700">
                  <FoulardIcon size={18} />
                  <span>Foulard Vert et Jaune • Sacré-Cœur à jamais</span>
                </div>
              </div>
            </div>

            {/* Official Description Paragraph (Kept on top as requested) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF0]/90 border border-yellow-400/90 shadow-sm mb-6 relative">
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
                Depuis 1955, le Groupe Sacré-Cœur Gemmayzé fait vivre l’esprit scout au cœur de Gemmayzé. À travers les camps, les services, les cérémonies et la vie en unité, des générations de jeunes y grandissent autour des valeurs qui nous unissent. Une histoire de transmission, d’engagement et de souvenirs, portée par un même foulard et un même esprit : <strong className="font-group-name text-red-700 font-bold">Sacré-Cœur à jamais</strong>.
              </p>
            </div>

            {/* Practical Quick Info Cards (Schedule 14h-16h30, CG Mira Harik) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white/70 border border-yellow-400 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-100 text-green-800 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-green-800" />
                </div>
                <div className="text-xs">
                  <strong className="block text-stone-900 font-bold">Réunions hebdomadaires</strong>
                  <span className="text-stone-700 font-semibold">{GROUP_CONTACT.reunionsSchedule}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/70 border border-yellow-400 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-red-700" />
                </div>
                <div className="text-xs">
                  <strong className="block text-stone-900 font-bold">Cheftaine du Groupe (CG)</strong>
                  <a
                    href={`tel:${GROUP_CONTACT.cgPhoneClean}`}
                    className="text-stone-700 hover:text-red-700 font-bold underline"
                  >
                    {GROUP_CONTACT.cgName} : {GROUP_CONTACT.cgPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={OFFICIAL_INSCRIPTION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-md transition-all duration-150 flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 hover:-translate-y-0.5"
              >
                <FoulardIcon size={22} />
                <span>Formulaire d’Inscription Officiel</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#sections-branches"
                className="px-5 py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-yellow-100 font-bold text-sm sm:text-base transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
              >
                <span>Explorer les branches & vidéos</span>
                <ArrowDown className="w-4 h-4 text-yellow-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Group Courtyard Photo with Scout Framing (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-3xl overflow-hidden border-4 border-green-800 shadow-2xl bg-green-950 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img
                src={REAL_PHOTOS.courtClock}
                alt="Les Scouts du Groupe Sacré-Cœur Gemmayzé dans la cour du collège devant l'horloge"
                className="w-full h-full object-cover object-[50%_62%]"
                style={{ objectPosition: '50% 62%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-300 mb-1">
                  <FoulardIcon size={20} />
                  <span>Cour d'Honneur du Collège du Sacré-Cœur</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-100 font-medium">
                  Rassemblement général des unités sous les arbres centenaires et l’horloge historique de Gemmayzé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
