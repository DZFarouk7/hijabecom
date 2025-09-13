import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart, Zap, Crown } from 'lucide-react';
import { categories } from '@/lib/data';

export function CategoriesSection() {
  const categoryIcons = {
    'silk-hijabs': Crown,
    'cotton-hijabs': Heart,
    'chiffon-hijabs': Sparkles,
    'jersey-hijabs': Zap,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of hijabs, each crafted with different materials 
            to suit your style and comfort needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons] || Heart;
            
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <IconComponent className="h-10 w-10 text-rose-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 capitalize">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        <Link href={`/shop?category=${category.slug}`} className="flex items-center">
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-rose-600">
                        View Collection
                      </span>
                      <ArrowRight className="h-4 w-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our hijabs are made from the finest materials with attention to detail and comfort.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Free shipping on orders over $50. Express delivery available for urgent needs.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                30-day return policy. If you're not satisfied, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
