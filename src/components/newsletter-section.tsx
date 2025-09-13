'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-600 to-pink-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay in Style
          </h2>
          
          <p className="text-lg text-rose-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new collections, 
            exclusive offers, and styling tips from our experts.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-rose-200 focus:bg-white/20"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 h-12 px-8"
              >
                Subscribe
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-white/20 rounded-lg p-6 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <span className="text-white font-medium">
                Thank you for subscribing! Check your email for confirmation.
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 text-rose-100">
          <p className="text-sm">
            Join over 10,000+ customers who trust us for their hijab needs.
          </p>
        </div>
      </div>
    </section>
  );
}
