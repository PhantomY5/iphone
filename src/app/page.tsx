import PromotionalBanner from '@/components/layout/PromotionalBanner';
import ProductHero from '@/components/layout/ProductHero';
import PricingSection from '@/components/layout/PricingSection';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PromotionalBanner />
      <ProductHero />
      <PricingSection />
    </div>
  );
}