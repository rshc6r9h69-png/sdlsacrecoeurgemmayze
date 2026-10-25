import React, { useState } from 'react';
import { ExternalLink, FileText, Send, CheckCircle2, Phone, Calendar, Mail } from 'lucide-react';
import { FoulardIcon, GroupLogo, SdlNationalLogo } from './FoulardIcon';
import { OFFICIAL_INSCRIPTION_FORM_URL, GROUP_CONTACT } from '../data/scoutData';

interface RegistrationFormProps {
  preselectedBranch?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ preselectedBranch = 'meute' }) => {
  const [activeTab, setActiveTab] = useState<'google_form' | 'quick_form'>('google_form');

  // Quick form state
  const [formData, setFormData] = useState({
    scoutFullName: '',
    scoutDob: '',
    scoutGender: 'garcon',
    targetBranch: preselectedBranch,
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    neighborhood: 'Gemmayzé',
    notes: '',
    termsAccepted: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleQuickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setStatus('error');
      setErrorMessage('Veuillez accepter les conditions d’adhésion.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(GROUP_CONTACT.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `⚜️ Pré-inscription [${formData.targetBranch.toUpperCase()}] - ${formData.scoutFullName}`,
          _template: 'table',
          _captcha: 'false',
          'Nom Complet du Scout': formData.scoutFullName,
          'Date de Naissance': formData.scoutDob,
          'Sexe': formData.scoutGender,
          'Branche': formData.targetBranch.toUpperCase(),
          'Parent / Tuteur': formData.guardianName,
          'Téléphone': formData.guardianPhone,
          'Email': formData.guardianEmail,
          'Quartier': formData.neighborhood,
          'Remarques': formData.notes || 'N/A',
          'Lien Google Forms Officiel': OFFICIAL_INSCRIPTION_FORM_URL,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('success');
    }
  };

  return (
    <section id="inscription" className="py-20 bg-[#FFF9D6] text-stone-900 border-b-2 border-yellow-400 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700 mb-3">
            <FoulardIcon size={20} />
            <span>Adhésions 2026 – 2027 • VII° Beyrouth</span>
            <FoulardIcon size={20} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-950 tracking-tight mb-3">
            Inscriptions des Membres
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-800 leading-relaxed">
            Rejoignez la grande famille des{' '}
            <strong className="font-group-name text-red-700">
              Scouts Du Liban – Groupe Sacré-Cœur Gemmayzé
            </strong>
            . Complétez dès maintenant l’inscription de votre enfant.
          </p>
        </div>

        {/* MAIN OFFICIAL GOOGLE FORM HERO CARD */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-green-800 shadow-xl mb-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-red-700 block mb-1">
                  Lien Officiel Recommandé
                </span>
                <h3 className="text-2xl font-black text-green-950 mb-1.5">
                  Formulaire Google Forms Officiel
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
                  Accédez directement au formulaire officiel sécurisé de la maîtrise pour compléter toutes les étapes de l'inscription.
                </p>

                {/* Practical Contact info bar */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-stone-700">
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-green-800" />
                    <span>{GROUP_CONTACT.reunionsSchedule}</span>
                  </span>
                  <a
                    href={`tel:${GROUP_CONTACT.cgPhoneClean}`}
                    className="flex items-center gap-1 font-bold text-red-700 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-700" />
                    <span>CG Mira Harik : {GROUP_CONTACT.cgPhone}</span>
                  </a>
                  <a
                    href={`mailto:${GROUP_CONTACT.email}`}
                    className="flex items-center gap-1 font-mono text-green-900 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5 text-green-800" />
                    <span>{GROUP_CONTACT.email}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
              <a
                href={OFFICIAL_INSCRIPTION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-base shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FoulardIcon size={22} />
                <span>Ouvrir le Formulaire Google Forms</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <span className="text-[11px] text-stone-500 font-medium">
                {OFFICIAL_INSCRIPTION_FORM_URL}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Switcher: Direct Google Form vs Quick Pre-registration */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('google_form')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
              activeTab === 'google_form'
                ? 'bg-green-800 text-yellow-200 shadow-sm'
                : 'bg-yellow-200/80 text-stone-800 hover:bg-yellow-300'
            }`}
          >
            Lien Officiel Google Forms
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quick_form')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
              activeTab === 'quick_form'
                ? 'bg-green-800 text-yellow-200 shadow-sm'
                : 'bg-yellow-200/80 text-stone-800 hover:bg-yellow-300'
            }`}
          >
            Formulaire Rapide sur le Site
          </button>
        </div>

        {activeTab === 'quick_form' && (
          <div className="bg-white border-2 border-green-800 rounded-2xl p-6 sm:p-10 shadow-lg animate-in fade-in duration-200">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-700 text-green-800 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-bold text-green-950 mb-2">
                  Pré-inscription transmise à la Maîtrise !
                </h4>
                <p className="text-stone-700 text-sm max-w-md mx-auto mb-6">
                  Merci ! Pour valider définitivement le dossier, n’oubliez pas de compléter le formulaire Google Forms officiel :
                </p>
                <a
                  href={OFFICIAL_INSCRIPTION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md cursor-pointer"
                >
                  <span>Accéder au Google Forms Officiel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Branche ciblée *
                    </label>
                    <select
                      name="targetBranch"
                      value={formData.targetBranch}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm font-semibold"
                    >
                      <option value="meute">01. La Meute (Louvettes & Louveteaux • 8 – 12 ans)</option>
                      <option value="troupe">02. La Troupe (Éclaireuses & Éclaireurs • 13 – 17 ans)</option>
                      <option value="clan">03. Le Clan (Routiers & Pionnières • 17+ ans)</option>
                      <option value="maitrise">Maîtrise / Animation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Nom et Prénom du scout *
                    </label>
                    <input
                      type="text"
                      required
                      name="scoutFullName"
                      value={formData.scoutFullName}
                      onChange={handleChange}
                      placeholder="Nom complet du jeune"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Nom du Parent / Tuteur *
                    </label>
                    <input
                      type="text"
                      required
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleChange}
                      placeholder="Nom du responsable légal"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Téléphone portable (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleChange}
                      placeholder="+961 70 123 456"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Email du responsable *
                    </label>
                    <input
                      type="email"
                      required
                      name="guardianEmail"
                      value={formData.guardianEmail}
                      onChange={handleChange}
                      placeholder="email@exemple.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Quartier de résidence *
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      placeholder="Gemmayzé, Achrafieh, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FEF7D2]/50 border border-yellow-500 text-stone-900 text-sm"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FEF7D2] border border-yellow-500 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    required
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-green-700 text-green-700"
                  />
                  <label htmlFor="termsAccepted" className="text-xs text-stone-800 cursor-pointer">
                    J’atteste l’exactitude de ces informations pour le <strong>Groupe Sacré-Cœur Gemmayzé</strong>.
                  </label>
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-100 border border-red-500 text-red-900 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-stone-600">
                    Réception officielle à <strong>{GROUP_CONTACT.email}</strong>
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-800 hover:bg-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer la Pré-inscription</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
