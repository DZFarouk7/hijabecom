import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Settings,
  LogOut,
  Home
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">dz hijab</h1>
            </div>
            
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="space-y-2">
              <Link href="/">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="mr-3 h-4 w-4" />
                  View Store
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start text-gray-700">
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white shadow-sm border-b">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h2>
            </div>
          </div>
          
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
