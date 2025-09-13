import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Sparkles className="h-6 w-6 text-rose-500 mr-2" />
              <span className="text-sm font-medium text-rose-600 uppercase tracking-wide">
                Premium Collection
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Beautiful Hijabs for
              <span className="text-rose-600 block">Every Occasion</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover our curated collection of premium hijabs in silk, cotton, chiffon, and jersey. 
              From everyday comfort to special occasions, find the perfect hijab for your style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="/shop" className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                <Link href="/categories">View Categories</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-rose-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">50+</div>
                <div className="text-sm text-gray-600">Hijab Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">4</div>
                <div className="text-sm text-gray-600">Premium Materials</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-rose-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="h-16 w-16 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Premium Quality</h3>
                    <p className="text-gray-600">Luxurious materials</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-200 to-pink-300 rounded-full translate-y-32 -translate-x-32 opacity-20"></div>
    </section>
  );
}
