import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { CategoriesSection } from '@/components/categories-section';
import { NewsletterSection } from '@/components/newsletter-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <NewsletterSection />
    </div>
  );
}