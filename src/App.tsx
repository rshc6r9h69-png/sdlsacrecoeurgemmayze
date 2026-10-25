import React, { useState } from 'react';
import { SCOUT_BRANCHES } from './data/scoutData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UnitsShowcase } from './components/UnitsShowcase';
import { BranchSection } from './components/BranchSection';
import { ValuesBanner } from './components/ValuesBanner';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';

export default function App() {
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);
  const [selectedBranchForRegistration, setSelectedBranchForRegistration] = useState<string>('meute');

  const handleSelectBranch = (branchId: string) => {
    setSelectedBranchForRegistration(branchId);
    const element = document.getElementById(`section-${branchId}`) || document.getElementById('inscription');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF7D2] text-stone-900 flex flex-col selection:bg-green-700 selection:text-yellow-100 font-sans antialiased">
      {/* Navigation Header */}
      <Navbar onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 6 Scout Units Showcase (Louvettes, Louveteaux, Éclaireuses, Éclaireurs, Pionnières, Route) */}
        <UnitsShowcase onSelectBranch={handleSelectBranch} />

        {/* 3 Core Branch Sections with Authentic Videos & Information */}
        <div id="sections-branches" className="relative">
          {SCOUT_BRANCHES.map((branch, index) => (
            <BranchSection
              key={branch.id}
              branch={branch}
              index={index}
              onSelectForRegistration={handleSelectBranch}
            />
          ))}
        </div>

        {/* Scout Values, Heritage & Photo Gallery */}
        <ValuesBanner />

        {/* Official Member Registration Portal (Google Forms & Pre-registration) */}
        <RegistrationForm preselectedBranch={selectedBranchForRegistration} />
      </main>

      {/* Footer (Clean, elegant, with description paragraph removed as requested) */}
      <Footer onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)} />

      {/* Cloudflare Worker Deployment Modal */}
      <CloudflareGuideModal
        isOpen={isCloudflareGuideOpen}
        onClose={() => setIsCloudflareGuideOpen(false)}
      />
    </div>
  );
}
