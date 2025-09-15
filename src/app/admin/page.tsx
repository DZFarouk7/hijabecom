'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign,
  TrendingUp,
  Eye,
  Plus
} from 'lucide-react';
import Link from 'next/link';

// Mock data for dashboard
const stats = [
  {
    title: 'Total Products',
    value: '24',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Package,
  },
  {
    title: 'Total Orders',
    value: '156',
    change: '+8%',
    changeType: 'positive' as const,
    icon: ShoppingCart,
  },
  {
    title: 'Total Customers',
    value: '89',
    change: '+15%',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    title: 'Revenue',
    value: '$12,450',
    change: '+23%',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Sarah Ahmed', amount: '$89.99', status: 'Completed', date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Fatima Ali', amount: '$45.50', status: 'Processing', date: '2024-01-14' },
  { id: 'ORD-003', customer: 'Aisha Khan', amount: '$67.25', status: 'Shipped', date: '2024-01-13' },
  { id: 'ORD-004', customer: 'Zainab Hassan', amount: '$123.75', status: 'Pending', date: '2024-01-12' },
];

const topProducts = [
  { name: 'Elegant Silk Scarf', sales: 45, revenue: '$4,050' },
  { name: 'Comfort Cotton Wrap', sales: 38, revenue: '$950' },
  { name: 'Flowing Chiffon Shawl', sales: 32, revenue: '$1,120' },
  { name: 'Active Jersey Hijab', sales: 28, revenue: '$560' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your store.</p>
        </div>
        <Link href="/admin/products/new">
          <Button className="bg-rose-600 hover:bg-rose-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="inline h-3 w-3 mr-1" />
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-rose-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Orders
              <Link href="/admin/orders">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <p className={`text-sm ${
                      order.status === 'Completed' ? 'text-green-600' :
                      order.status === 'Processing' ? 'text-blue-600' :
                      order.status === 'Shipped' ? 'text-purple-600' :
                      'text-yellow-600'
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Top Products
              <Link href="/admin/products">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-rose-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/products/new">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <Package className="h-6 w-6 mb-2" />
                Add New Product
              </Button>
            </Link>
            <Link href="/admin/orders">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <ShoppingCart className="h-6 w-6 mb-2" />
                Manage Orders
              </Button>
            </Link>
            <Link href="/admin/customers">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                View Customers
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
