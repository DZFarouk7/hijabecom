# dz hijab

A complete e-commerce website for women's hijabs built with Next.js, TypeScript, and Tailwind CSS. This project includes both a customer-facing store and an admin dashboard for managing products.

## 🚀 Features

### Frontend (Customer Store)
- **Landing Page**: Beautiful hero section with featured products and categories
- **Shop Page**: Product grid with advanced filtering and search functionality
- **Product Details**: Detailed product pages with image gallery, color/size selection, and reviews
- **Shopping Cart**: Full cart functionality with quantity management
- **Checkout Process**: Multi-step checkout with form validation
- **Responsive Design**: Mobile-first design that works on all devices

### Admin Dashboard
- **Product Management**: CRUD operations for products
- **Order Management**: View and manage customer orders
- **Customer Management**: Customer database and analytics
- **Dashboard Analytics**: Sales statistics and performance metrics

### Product Features
- **10 Sample Products**: Pre-loaded with realistic hijab data
- **Multiple Categories**: Silk, Cotton, Chiffon, and Jersey hijabs
- **Color Variants**: Multiple color options for each product
- **Price Management**: Regular and sale pricing
- **Stock Management**: Inventory tracking
- **Featured Products**: Highlight popular items

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks and context
- **Form Handling**: React forms with validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hijab-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Demo Features

This is a **UI-only demo** showcasing:

### Customer Experience
- Browse products by category
- Search and filter products
- View detailed product information
- Add items to cart
- Complete checkout process
- Responsive mobile experience

### Admin Experience
- Access admin dashboard at `/admin`
- View product management interface
- See order and customer management
- Dashboard with analytics and stats

## 📱 Pages Structure

```
/                    # Landing page with hero and featured products
/shop               # Product catalog with filters
/product/[id]       # Individual product pages
/cart               # Shopping cart
/checkout           # Checkout process
/admin              # Admin dashboard
/admin/products     # Product management
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with rose/pink color scheme
- **Responsive**: Mobile-first design that adapts to all screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading
- **User Experience**: Intuitive navigation and smooth interactions

## 🚀 Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Build for Production

```bash
npm run build
npm start
```

## 📊 Sample Data

The project includes 10 sample hijab products across 4 categories:

1. **Silk Hijabs** - Premium luxury hijabs
2. **Cotton Hijabs** - Comfortable everyday wear
3. **Chiffon Hijabs** - Lightweight and elegant
4. **Jersey Hijabs** - Active and sporty styles

Each product includes:
- Multiple color options
- Detailed descriptions
- Pricing (with sale prices)
- Stock status
- Customer ratings

## 🔧 Customization

### Adding New Products
1. Edit `src/lib/data.ts`
2. Add new product objects to the `sampleProducts` array
3. Include all required fields: name, description, price, images, colors, etc.

### Styling Changes
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in CSS variables

### Adding New Features
- Create new pages in `src/app/`
- Add components in `src/components/`
- Update types in `src/lib/types.ts`

## 📝 License

This project is created for demonstration purposes. Feel free to use it as a starting point for your own e-commerce projects.

## 🤝 Contributing

This is a demo project, but suggestions and improvements are welcome!

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Note**: This is a UI demo project. In a production environment, you would need to:
- Connect to a real database
- Implement payment processing
- Add user authentication
- Set up email notifications
- Add real product images
- Implement inventory management
- Add order tracking