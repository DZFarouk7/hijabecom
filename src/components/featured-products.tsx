'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { sampleProducts } from '@/lib/data';
import { formatPrice, calculateDiscount } from '@/lib/utils';

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const featuredProducts = sampleProducts.filter(product => product.featured);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular hijabs, carefully selected for their quality, style, and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-rose-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-rose-600" />
                    </div>
                    <p className="text-sm text-gray-600">Product Image</p>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.originalPrice && (
                    <Badge className="bg-red-500 text-white">
                      -{calculateDiscount(product.originalPrice, product.price)}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="secondary">Out of Stock</Badge>
                  )}
                </div>
                
                {/* Favorite button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(product.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-rose-600 font-medium uppercase tracking-wide">
                    {product.category.replace('-', ' ')}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.8)</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.colors.slice(0, 3).map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{product.colors.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Helper function to get color values for display
function getColorValue(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    'Navy Blue': '#1e3a8a',
    'Burgundy': '#7c2d12',
    'Forest Green': '#166534',
    'Charcoal': '#374151',
    'White': '#ffffff',
    'Black': '#000000',
    'Beige': '#f5f5dc',
    'Light Blue': '#93c5fd',
    'Rose Gold': '#e8b4b8',
    'Silver': '#c0c0c0',
    'Pearl White': '#f8f8ff',
    'Dusty Pink': '#d4a5a5',
    'Gray': '#6b7280',
    'Royal Blue': '#1d4ed8',
    'Deep Purple': '#7c3aed',
    'Emerald Green': '#059669',
    'Crimson': '#dc2626',
    'Cream': '#fef3c7',
    'Light Gray': '#d1d5db',
    'Powder Blue': '#bfdbfe',
    'Soft Pink': '#f9a8d4',
    'Ivory': '#fffbeb',
    'Lavender': '#c4b5fd',
    'Mint Green': '#6ee7b7',
    'Blush': '#fecaca',
    'Red': '#ef4444',
    'Gold': '#fbbf24',
    'Bronze': '#cd7f32',
    'Pearl': '#f3f4f6',
    'Brown': '#92400e',
    'Blue': '#3b82f6',
  };
  
  return colorMap[colorName] || '#6b7280';
}
