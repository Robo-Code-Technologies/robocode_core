import { useState } from 'react';

import { Ecosystem } from '@/components/rcc/Ecosystem';
import { EcosystemBanner } from '@/components/rcc/EcosystemBanner';
import { Footer } from '@/components/rcc/Footer';
import InAction from '@/components/rcc/InAction';
import { TargetAudience } from '@/components/rcc/TargetAudience';
import { DocumentHead } from '../components/rcc/DocumentHead';
import { HeroSection } from '../components/rcc/HeroSection';
import { Navigation } from '../components/rcc/Navigation';
import { SubHero } from '../components/rcc/SubHero';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <DocumentHead />
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <HeroSection />
            <SubHero />
            <Ecosystem />
            <TargetAudience />
            <InAction />
            <div className="bg-white py-16"></div>
            <EcosystemBanner />
            <Footer />
        </div>
    );
}
