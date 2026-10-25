import React from 'react';
import { MapPin, Clock, HeartHandshake, Camera, Phone, UserCheck } from 'lucide-react';
import { FoulardIcon, GroupLogo, SdlNationalLogo } from './FoulardIcon';
import { REAL_PHOTOS, GROUP_CONTACT } from '../data/scoutData';

export const ValuesBanner: React.FC = () => {
  const values = [
    {
      title: 'Honneur & Parole Scoute',
      desc: 'La parole du scout est sacrée. Il agit avec droiture, franchise et loyauté envers tous.',
      badgeBg: 'bg-green-700 text-yellow-300',
      borderClass: 'border-green-600/50',
    },
    {
      title: 'Service & Entraide',
      desc: 'Un dévouement sincère pour la paroisse, le quartier de Gemmayzé et le Liban tout entier.',
      badgeBg: 'bg-red-600 text-white',
      borderClass: 'border-red-500/50',
    },
    {
      title: 'Fraternité du Foulard',
      desc: 'Sous le foulard vert et jaune, filles et garçons partagent une même aventure humaine inoubliable.',
      badgeBg: 'bg-yellow-400 text-stone-950',
      borderClass: 'border-yellow-500',
    },
    {
      title: 'Transmission & Campisme',
      desc: 'Des grands feux de camp aux nuits sous tente, des traditions transmises depuis 1955.',
      badgeBg: 'bg-green-800 text-yellow-300',
      borderClass: 'border-green-700/50',
    },
    {
      title: 'Spiritualité & Foi',
      desc: 'Ancrée dans la prière et l’Évangile, la foi illumine le quotidien scout, le recueillement en nature et le service du prochain.',
      badgeBg: 'bg-red-800 text-yellow-300',
      borderClass: 'border-red-700/50',
    },
  ];

  const photoGallery = [
    {
      src: REAL_PHOTOS.grandRassemblement,
      title: 'Grand Rassemblement',
      subtitle: "Ouverture de l'Année (2025-2026)",
    },
    {
      src: REAL_PHOTOS.massCeremony,
      title: 'Messe & Cérémonie des Promesses',
      subtitle: 'Bénédiction solennelle dans la chapelle du Sacré-Cœur',
    },
    {
      src: REAL_PHOTOS.courtArches,
      title: 'Camp BP',
      subtitle: 'Les unités et les chefs réunis pour fêter BP',
    },
  ];

  return (
    <section id="valeurs-scoutes" className="py-20 bg-[#FEF7D2] border-b-2 border-yellow-400/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-black tracking-widest text-green-900 uppercase mb-3">
            <FoulardIcon size={22} />
            <span>Tradition & Héritage • Depuis 1955</span>
            <FoulardIcon size={22} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            L’Esprit du{' '}
            <span className="font-group-name text-red-700">
              Groupe Sacré-Cœur Gemmayzé
            </span>
          </h2>
          <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
            Une grande famille éducative guidée par l’amour de la nature, l’esprit de service et la fraternité scoute sous le même foulard vert et jaune.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {values.map((val, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white border-2 ${val.borderClass} shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${val.badgeBg} flex items-center justify-center font-black tabular-nums shadow-sm`}>
                    0{idx + 1}
                  </div>
                  <FoulardIcon size={26} />
                </div>
                <h3 className="font-bold text-stone-900 text-lg mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Photos Showcase Gallery */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-red-600" />
              <h3 className="text-xl sm:text-2xl font-black text-green-950">
                La Vie Scoute au Sacré-Cœur en Images
              </h3>
            </div>
            <span className="text-xs font-bold text-green-800 hidden sm:inline-block">
              Photographies réelles des rassemblements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photoGallery.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border-2 border-yellow-500 bg-white shadow-md flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs p-1.5 rounded-lg">
                    <FoulardIcon size={18} />
                  </div>
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Board (Location, Schedule 14h-16h30, CG Mira Harik) */}
        <div className="rounded-3xl bg-green-950 border-4 border-yellow-400 text-white p-7 sm:p-9 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-yellow-300 mb-1 flex items-center gap-2">
                  <span>Localisation</span>
                  <FoulardIcon size={18} />
                </h4>
                <p className="text-xs text-stone-200 leading-relaxed">
                  {GROUP_CONTACT.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-yellow-300 mb-1">
                  Horaires des Réunions
                </h4>
                <p className="text-xs text-stone-200 leading-relaxed font-bold">
                  {GROUP_CONTACT.reunionsSchedule}
                </p>
                <span className="text-[11px] text-stone-400 block mt-0.5">
                  Tous les samedis dans la cour du collège.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex items-center gap-2 shrink-0">
                <GroupLogo sizeClass="h-12 w-auto" />
              </div>
              <div>
                <h4 className="font-bold text-base text-yellow-300 mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-red-400" />
                  <span>{GROUP_CONTACT.cgRole}</span>
                </h4>
                <p className="text-xs text-stone-200 leading-relaxed">
                  <a
                    href={`tel:${GROUP_CONTACT.cgPhoneClean}`}
                    className="text-white hover:text-yellow-300 font-bold underline"
                  >
                    {GROUP_CONTACT.cgName} : {GROUP_CONTACT.cgPhone}
                  </a>
                </p>
                <a
                  href={`mailto:${GROUP_CONTACT.email}`}
                  className="text-[11px] text-stone-400 hover:text-yellow-300 block font-mono mt-0.5"
                >
                  {GROUP_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
