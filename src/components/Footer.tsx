import React from 'react';
import { Mail, MapPin, Phone, Cloud, ExternalLink, Calendar, UserCheck } from 'lucide-react';
import { FoulardIcon, GroupLogo, SdlNationalLogo } from './FoulardIcon';
import { OFFICIAL_INSCRIPTION_FORM_URL, GROUP_CONTACT } from '../data/scoutData';

interface FooterProps {
  onOpenCloudflareGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCloudflareGuide }) => {
  return (
    <footer className="bg-[#FAF2B5] text-stone-900 border-t-4 border-green-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Official Logos (Description removed as requested) */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GroupLogo sizeClass="h-16 w-auto" />
              <SdlNationalLogo sizeClass="h-12 w-auto" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-red-700 font-black flex items-center gap-1.5">
                <span>VII° Beyrouth • Scouts Du Liban</span>
                <FoulardIcon size={14} />
              </span>
              <h3 className="font-group-name text-lg font-black text-green-950 leading-tight">
                Groupe Sacré-Cœur Gemmayzé
              </h3>
            </div>
          </div>

          {/* Col 2: Branches Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-green-950 mb-3 flex items-center gap-2">
              <FoulardIcon size={16} />
              <span>Nos 3 Branches & Âges</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-800 font-semibold">
              <li>
                <a href="#section-meute" className="hover:text-yellow-800 transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FoulardIcon size={13} />
                    <span>01. La Meute (Louveteaux)</span>
                  </span>
                  <span className="text-yellow-900 font-mono">8 – 12 ans</span>
                </a>
              </li>
              <li>
                <a href="#section-troupe" className="hover:text-green-800 transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FoulardIcon size={13} />
                    <span>02. La Troupe (Éclaireurs)</span>
                  </span>
                  <span className="text-green-900 font-mono">13 – 17 ans</span>
                </a>
              </li>
              <li>
                <a href="#section-clan" className="hover:text-red-700 transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FoulardIcon size={13} />
                    <span>03. Le Clan</span>
                  </span>
                  <span className="text-red-700 font-mono">17+ ans</span>
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href={OFFICIAL_INSCRIPTION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-extrabold hover:underline inline-flex items-center gap-1.5"
                >
                  <FoulardIcon size={14} />
                  <span>→ Formulaire Google Forms</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localisation, Schedule & Cheftaine du Groupe */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-green-950 mb-3 flex items-center gap-2">
              <FoulardIcon size={16} />
              <span>Coordonnées & Réunions</span>
            </h4>
            <div className="space-y-2.5 text-xs text-stone-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-800 shrink-0 mt-0.5" />
                <span>
                  Collège du Sacré-Cœur, Rue Pasteur, Gemmayzé, Beyrouth.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-800 shrink-0" />
                <span className="font-bold text-stone-900">{GROUP_CONTACT.reunionsSchedule}</span>
              </div>

              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-red-700 shrink-0" />
                <div>
                  <span className="font-semibold block">{GROUP_CONTACT.cgRole} :</span>
                  <a
                    href={`tel:${GROUP_CONTACT.cgPhoneClean}`}
                    className="font-bold text-red-700 hover:text-green-900 underline"
                  >
                    {GROUP_CONTACT.cgName} ({GROUP_CONTACT.cgPhone})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a
                  href={`mailto:${GROUP_CONTACT.email}`}
                  className="font-bold text-red-700 hover:text-green-900 underline truncate"
                >
                  {GROUP_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Inscription & Cloudflare Guide */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-green-950 mb-3 flex items-center gap-2">
              <FoulardIcon size={16} />
              <span>Adhésion 2026 – 2027</span>
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed mb-3">
              Inscrivez vos enfants dès maintenant auprès de la maîtrise du Sacré-Cœur Gemmayzé.
            </p>

            <a
              href={OFFICIAL_INSCRIPTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-between mb-2.5 shadow-sm transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <FoulardIcon size={16} />
                <span>Formulaire Google Forms</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onOpenCloudflareGuide}
              className="w-full p-2 rounded-xl bg-white/80 hover:bg-white border border-green-700 text-[11px] text-stone-800 font-semibold flex items-center justify-between group transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-green-700" />
                <span>Cloudflare Worker Ready</span>
              </div>
              <span className="text-[10px] text-red-700 font-bold group-hover:underline">Guide</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Email */}
        <div className="pt-6 border-t border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-800">
          <div className="flex flex-wrap items-center gap-2">
            <FoulardIcon size={18} />
            <span>
              © {new Date().getFullYear()} Scouts Du Liban (SDL) •{' '}
              <strong className="font-group-name text-green-950">Groupe Sacré-Cœur Gemmayzé (VII° Beyrouth)</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-stone-700 font-medium">Contact officiel :</span>
            <a
              href={`mailto:${GROUP_CONTACT.email}`}
              className="px-3 py-1 rounded-lg bg-green-800 text-yellow-200 hover:bg-red-700 hover:text-white transition-colors font-mono font-bold"
            >
              {GROUP_CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
