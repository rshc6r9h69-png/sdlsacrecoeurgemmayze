import React, { useState } from 'react';
import { X, Cloud, Terminal, Check, Copy, ArrowRight, Shield, Zap } from 'lucide-react';

interface CloudflareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Générer le bundle statique de production',
      cmd: 'npm run build',
      desc: 'Compile le site web dans le répertoire /dist avec minification extrême et assets optimisés.',
    },
    {
      title: '2. Déployer sur Cloudflare Worker / Pages avec Wrangler',
      cmd: 'npx wrangler deploy',
      desc: 'Utilise le fichier wrangler.toml déjà configuré à la racine pour pousser le Worker instantanément.',
    },
    {
      title: '3. (Alternative) Déploiement Cloudflare Pages via GitHub',
      cmd: 'npx wrangler pages deploy dist --project-name=sdl-sacre-coeur-gemmayze',
      desc: 'Active le CDN mondial ultra-rapide avec certificats SSL automatiques et bande passante illimitée.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-100 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-950 border border-orange-500/40 text-orange-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Guide Déploiement Cloudflare Worker
              </h3>
              <p className="text-xs text-stone-400">
                Configuration prête à l'emploi (wrangler.toml & worker.js inclus)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cloudflare Worker benefits */}
        <div className="grid grid-cols-3 gap-2.5 my-5 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800">
            <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="font-semibold block text-white">&lt; 30ms Latence</span>
            <span className="text-[10px] text-stone-400">Point de présence Beyrouth</span>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800">
            <Shield className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="font-semibold block text-white">SSL & DDoS</span>
            <span className="text-[10px] text-stone-400">Protection native</span>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800">
            <Terminal className="w-4 h-4 text-orange-400 mx-auto mb-1" />
            <span className="font-semibold block text-white">Zero Config</span>
            <span className="text-[10px] text-stone-400">Wrangler Ready</span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 my-6">
          <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-600/40 text-xs text-amber-200">
            <strong>Résolution de l’erreur « Could not detect a directory containing static files » :</strong>
            <p className="mt-1 text-stone-300">
              Cette erreur se produit si la commande de build n’a pas été exécutée ou si le dossier de sortie n’est pas configuré sur <code className="bg-stone-900 px-1 py-0.5 rounded text-amber-300">dist</code>.
              Lancez simplement <code className="bg-stone-900 px-1 py-0.5 rounded text-amber-300 font-mono">npm run deploy</code> (qui compile automatiquement dans <code className="text-amber-300">dist</code> avant le déploiement) !
            </p>
          </div>

          {steps.map((s, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-stone-950 border border-stone-800">
              <span className="font-semibold text-xs text-stone-300 block mb-1">
                {s.title}
              </span>
              <p className="text-[11px] text-stone-400 mb-2">{s.desc}</p>
              <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-stone-900 font-mono text-xs text-amber-300">
                <span className="truncate">{s.cmd}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(s.cmd, idx)}
                  className="p-1 hover:text-white text-stone-400 transition-colors shrink-0"
                  title="Copier la commande"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end pt-3 border-t border-stone-800">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
          >
            Compris, fermer
          </button>
        </div>
      </div>
    </div>
  );
};
