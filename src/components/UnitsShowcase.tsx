import React from 'react';
import { Compass, Tent, Flame, ArrowRight, ExternalLink } from 'lucide-react';
import { FoulardIcon } from './FoulardIcon';
import { OFFICIAL_INSCRIPTION_FORM_URL } from '../data/scoutData';

interface UnitsShowcaseProps {
  onSelectBranch?: (branchId: string) => void;
}

export const UnitsShowcase: React.FC<UnitsShowcaseProps> = ({ onSelectBranch }) => {
  const units = [
    {
      id: 'louvettes',
      branchId: 'meute',
      name: 'Louvettes',
      gender: 'Filles',
      age: '8 – 12 ans',
      headerBg: 'bg-[#FACC15]',
      badgeColor: 'bg-yellow-100 text-yellow-950 border-yellow-300',
      iconType: 'wolf',
      summary: 'La meute accueille les plus jeunes filles dans un univers de jeux, de découvertes et d’apprentissage de la vie en groupe.',
      anchor: '#section-meute',
    },
    {
      id: 'louveteaux',
      branchId: 'meute',
      name: 'Louveteaux',
      gender: 'Garçons',
      age: '8 – 12 ans',
      headerBg: 'bg-[#FACC15]',
      badgeColor: 'bg-yellow-100 text-yellow-950 border-yellow-300',
      iconType: 'wolf',
      summary: 'La meute accueille les plus jeunes garçons dans un univers de jeux, de découvertes et d’apprentissage de la vie en groupe.',
      anchor: '#section-meute',
    },
    {
      id: 'eclaireuses',
      branchId: 'troupe',
      name: 'Éclaireuses',
      gender: 'Guides',
      age: '13 – 17 ans',
      headerBg: 'bg-[#15803D]',
      badgeColor: 'bg-green-100 text-green-950 border-green-300',
      iconType: 'tent',
      summary: 'La troupe favorise l’esprit d’équipe, le sens des responsabilités et l’aventure en pleine nature.',
      anchor: '#section-troupe',
    },
    {
      id: 'eclaireurs',
      branchId: 'troupe',
      name: 'Éclaireurs',
      gender: 'Éclaireurs',
      age: '13 – 17 ans',
      headerBg: 'bg-[#15803D]',
      badgeColor: 'bg-green-100 text-green-950 border-green-300',
      iconType: 'tent',
      summary: 'La troupe favorise l’esprit d’équipe, le sens des responsabilités et l’aventure en pleine nature.',
      anchor: '#section-troupe',
    },
    {
      id: 'pionnieres',
      branchId: 'clan',
      name: 'Pionnières',
      gender: 'Caravelles',
      age: '17+ ans',
      headerBg: 'bg-[#DC2626]',
      badgeColor: 'bg-red-100 text-red-950 border-red-300',
      iconType: 'compass',
      summary: 'Le clan prépare les jeunes adultes à s’engager dans la société en réalisant des projets durables au service de la communauté.',
      anchor: '#section-clan',
    },
    {
      id: 'route',
      branchId: 'clan',
      name: 'Routier',
      gender: 'Routiers',
      age: '17+ ans',
      headerBg: 'bg-[#DC2626]',
      badgeColor: 'bg-red-100 text-red-950 border-red-300',
      iconType: 'compass',
      summary: 'Le clan prépare les jeunes adultes à s’engager dans la société en réalisant des projets durables au service de la communauté.',
      anchor: '#section-clan',
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'wolf':
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-[2.2]" viewBox="0 0 24 24">
            <path d="M4 8L8 4L12 7L16 4L20 8L18 17L12 21L6 17L4 8Z" strokeLinejoin="round" />
            <path d="M9 11L10 12" strokeLinecap="round" />
            <path d="M15 11L14 12" strokeLinecap="round" />
            <path d="M12 15V17" strokeLinecap="round" />
          </svg>
        );
      case 'tent':
        return <Tent className="w-6 h-6 stroke-[2.2]" />;
      case 'compass':
      default:
        return <Compass className="w-6 h-6 stroke-[2.2]" />;
    }
  };

  return (
    <section className="py-16 bg-[#FFFBEA] border-b-2 border-yellow-400/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-green-900 mb-2">
            <FoulardIcon size={20} />
            <span>Toutes nos Unités • Collège du Sacré-Cœur</span>
            <FoulardIcon size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Découvrez nos 6 Unités Scoutes
          </h2>
          <p className="text-sm sm:text-base text-stone-700">
            De 8 ans jusqu’à l’âge adulte, chaque jeune trouve sa place dans une progression adaptée, fraternelle et stimulante.
          </p>
        </div>

        {/* 6 Unit Cards Grid (Inspired directly by the official document) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Header Colored Block */}
              <div
                className={`${unit.headerBg} p-5 text-white flex flex-col items-start justify-between min-h-[140px] relative`}
              >
                <div
                  className={`p-2 rounded-xl bg-black/15 backdrop-blur-xs ${
                    unit.headerBg === 'bg-[#FACC15]' ? 'text-stone-950' : 'text-white'
                  }`}
                >
                  {renderIcon(unit.iconType)}
                </div>

                <div>
                  <h3
                    className={`text-xl font-black tracking-tight leading-tight ${
                      unit.headerBg === 'bg-[#FACC15]' ? 'text-stone-950 font-serif' : 'text-white font-serif'
                    }`}
                  >
                    {unit.name}
                  </h3>
                  <span
                    className={`text-xs font-bold block mt-1 ${
                      unit.headerBg === 'bg-[#FACC15]' ? 'text-stone-900' : 'text-stone-100'
                    }`}
                  >
                    {unit.age}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white text-stone-700">
                <p className="text-xs leading-relaxed text-stone-600 mb-4">
                  {unit.summary}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                  <a
                    href={unit.anchor}
                    onClick={() => onSelectBranch?.(unit.branchId)}
                    className="text-stone-900 group-hover:text-green-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href={OFFICIAL_INSCRIPTION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:text-red-800 transition-colors"
                    title="Inscrire à cette unité"
                  >
                    Inscrire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
