'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Product } from '@/lib/types';
import { categories } from '@/lib/data';

interface FilterSidebarProps {
  filters: {
    category: string;
    priceRange: [number, number];
    colors: string[];
    inStock: boolean;
  };
  onFiltersChange: (filters: any) => void;
  products: Product[];
}

export function FilterSidebar({ filters, onFiltersChange, products }: FilterSidebarProps) {
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(filters.priceRange);

  // Get unique colors from products
  const allColors = Array.from(new Set(products.flatMap(product => product.colors)));

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: filters.category === category ? '' : category,
    });
  };

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    
    onFiltersChange({
      ...filters,
      colors: newColors,
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setLocalPriceRange([value[0], value[1]]);
  };

  const handlePriceRangeCommit = (value: number[]) => {
    onFiltersChange({
      ...filters,
      priceRange: [value[0], value[1]],
    });
  };

  const handleStockChange = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      inStock: checked,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: '',
      priceRange: [0, 200],
      colors: [],
      inStock: false,
    });
    setLocalPriceRange([0, 200]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.category === category.slug}
                onCheckedChange={() => handleCategoryChange(category.slug)}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize cursor-pointer"
              >
                {category.name}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={localPriceRange}
              onValueChange={handlePriceRangeChange}
              onValueCommit={handlePriceRangeCommit}
              max={200}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${localPriceRange[0]}</span>
              <span>${localPriceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {allColors.slice(0, 10).map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={filters.colors.includes(color)}
                onCheckedChange={() => handleColorChange(color)}
              />
              <label
                htmlFor={`color-${color}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center space-x-2"
              >
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: getColorValue(color) }}
                />
                <span>{color}</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.inStock}
              onCheckedChange={handleStockChange}
            />
            <label
              htmlFor="in-stock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              In Stock Only
            </label>
          </div>
        </CardContent>
      </Card>
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
