import React from 'react';
import { ScoutBranch, OFFICIAL_INSCRIPTION_FORM_URL } from '../data/scoutData';
import { VideoPlayer } from './VideoPlayer';
import { FoulardIcon } from './FoulardIcon';
import { Compass, CheckCircle2, ExternalLink } from 'lucide-react';

interface BranchSectionProps {
  branch: ScoutBranch;
  index: number;
  onSelectForRegistration: (branchId: string) => void;
}

export const BranchSection: React.FC<BranchSectionProps> = ({
  branch,
  index,
}) => {
  const isEven = index % 2 === 1;

  return (
    <section
      id={`section-${branch.id}`}
      className={`py-16 sm:py-24 border-b border-yellow-400/80 scroll-mt-20 ${
        isEven ? 'bg-[#FFF9D6]' : 'bg-[#FEF6C9]'
      }`}
      aria-labelledby={`heading-${branch.id}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            {/* Unboxed metadata line with Foulard mini logo */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold">
              <FoulardIcon size={22} />
              <span className={`font-mono tracking-wider uppercase ${branch.color.primary}`}>
                {branch.badgeNumber}. Branche Scoute
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-red-700 font-extrabold tabular-nums">
                {branch.ageRange}
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-green-900">
                Devise : <strong>{branch.motto}</strong>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2
                id={`heading-${branch.id}`}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight flex items-center gap-3"
              >
                <span>{branch.name}</span>
                <FoulardIcon size={32} />
              </h2>
              <p className={`text-base sm:text-lg font-bold mt-1 ${branch.color.primary}`}>
                {branch.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout: Video on one side, Rich Introduction on the other */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Video Player Column (7 cols) */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <VideoPlayer
              src={branch.video.src}
              youtubeId={branch.video.youtubeId}
              youtubeUrl={branch.video.youtubeUrl}
              poster={branch.video.poster}
              title={branch.video.title}
              duration={branch.video.duration}
              isPending={branch.video.isPending}
            />

            {/* Video description footer note */}
            <div className="mt-3 p-4 rounded-xl bg-[#FFFDF0] border border-yellow-400 text-xs text-stone-700 flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block">{branch.video.title}</strong>
                <span>{branch.video.description}</span>
              </div>
            </div>
          </div>

          {/* Introduction & Highlights Column (5 cols) */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-between`}>
            <div>
              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-stone-900 font-bold leading-relaxed mb-4">
                {branch.introduction.lead}
              </p>

              {/* Detail Paragraphs */}
              <div className="space-y-3 text-sm text-stone-800 leading-relaxed mb-6">
                {branch.introduction.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Core Pillars / Bullet points */}
              <div className="space-y-3 mb-6 pt-4 border-t border-yellow-400/80">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-green-900 flex items-center gap-2">
                  <FoulardIcon size={18} />
                  <span>Piliers pédagogiques ({branch.ageRange}) :</span>
                </h4>
                {branch.introduction.pillars.map((pillar, pilIdx) => (
                  <div key={pilIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-stone-900">
                        {pillar.title} :{' '}
                      </span>
                      <span className="text-xs text-stone-700">
                        {pillar.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scout Quote */}
              <blockquote className="p-4 rounded-xl bg-[#FFFDF0] border border-yellow-500/80 mb-6 italic text-xs text-stone-800">
                <p className="mb-1.5 font-medium">« {branch.quote.text} »</p>
                <cite className="not-italic text-[11px] font-bold text-red-700 flex items-center gap-1.5">
                  <FoulardIcon size={15} />
                  <span>— {branch.quote.author}</span>
                </cite>
              </blockquote>
            </div>

            {/* Direct CTA to enroll in this specific branch using the official Google Form */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={OFFICIAL_INSCRIPTION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 ${branch.color.button}`}
              >
                <FoulardIcon size={18} />
                <span>Inscrire à {branch.name} ({branch.ageRange})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#inscription"
                className="text-xs font-bold text-stone-700 hover:text-green-900 underline underline-offset-2 py-2"
              >
                Détails de l’inscription
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
