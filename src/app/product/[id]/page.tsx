'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
// import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Star, ArrowLeft, Minus, Plus, Share2 } from 'lucide-react';
import { sampleProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const foundProduct = sampleProducts.find(p => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would add to cart context
    console.log('Added to cart:', {
      product,
      selectedColor,
      selectedSize,
      quantity,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/shop" className="flex items-center text-rose-600 hover:text-rose-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-rose-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-rose-600" />
                  </div>
                  <p className="text-gray-600">Product Image</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index - 1)}
                  className={`aspect-square bg-gradient-to-br from-rose-100 to-pink-200 rounded-md overflow-hidden border-2 ${
                    selectedImageIndex === index - 1 ? 'border-rose-500' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-rose-300 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-rose-600" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-rose-100 text-rose-800">
                  {product.category.replace('-', ' ')}
                </Badge>
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    -{calculateDiscount(product.originalPrice, product.price)}% OFF
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8) • 127 reviews</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: getColorValue(color) }}
                    />
                    <span className="text-sm font-medium">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedSize === size
                        ? 'border-rose-500 bg-rose-50 text-rose-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={toggleFavorite}
                  className={isFavorite ? 'border-rose-500 text-rose-600' : ''}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium capitalize">{product.category.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Colors:</span>
                    <span className="font-medium">{product.colors.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock Status:</span>
                    <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SKU:</span>
                    <span className="font-medium">HH-{product.id.toUpperCase()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
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
