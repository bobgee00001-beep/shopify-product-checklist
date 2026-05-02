# 🛍️ Shopify Product Quality Checklist

A beautiful, interactive checklist tool for Shopify merchants to ensure product quality before going live.

![License](https://img.shields.io/badge/license-MIT-blue)
![Vercel](https://img.shields.io/badge/vercel-ready-black?logo=vercel)

---

## 📸 Screenshot

![Shopify Product Checklist Screenshot](assets/screenshot.png)

> *Screenshot placeholder - add your own screenshot image to `assets/screenshot.png`*

---

## ✨ Features

- **📊 Progress Tracking:** Visual progress bar with percentage completion
- **🌓 Dark Mode:** Automatic dark mode detection with manual toggle
- **💾 Auto-Save:** All progress saves to localStorage automatically
- **📤 Multiple Export Formats:** Export as TXT, JSON, or CSV
- **📱 Mobile-First:** Fully responsive design optimized for all devices
- **🎯 Interactive Status:** Mark items as Passed, Failed, or Pending
- **📋 Product Info:** Track product name and ID
- **🔄 Reset Function:** One-click reset with confirmation
- **🎨 Clean UI:** Modern Shopify-inspired design

---

## 🚀 Quick Start

### Development

```bash
# Clone the repository
git clone https://github.com/bobgee00001-beep/shopify-product-checklist.git

# Navigate to the directory
cd shopify-product-checklist

# Serve locally (any static server works)
# Option 1: Using Node.js serve
npx serve .

# Option 2: Using Python
python3 -m http.server 3000

# Option 3: Using PHP
php -S localhost:3000

# Option 4: Using Python 2
python -m SimpleHTTPServer 3000
```

Then open `http://localhost:3000` in your browser.

---

## ⚡ Deploy to Vercel

Click the button below to deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbobgee00001-beep%2Fshopify-product-checklist)

Or deploy via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd shopify-product-checklist
vercel --prod
```

---

## 📦 Project Structure

```
shopify-product-checklist/
│
├── 📄 index.html          # Main HTML structure
├── 🎨 styles.css          # Styling with CSS variables for theming
├── ⚙️ app.js              # Application logic & interactivity
├── 📋 vercel.json         # Vercel deployment configuration
├── 📦 package.json        # Package metadata
└── 📄 README.md           # This file
```

---

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --accent-primary: #008060;     /* Shopify Green */
  --accent-secondary: #95bf47;   /* Shopify Light Green */
  --status-pass: #008060;
  --status-fail: #d72c0d;
}
```

### Checklist Items

Modify the `checklistData` array in `app.js`:

```javascript
const checklistData = [
  {
    id: 'your-custom-id',
    title: 'Your Title',
    description: 'Your description here',
    metaInfo: 'Helper text',
    icon: 'title'
  },
  // ...more items
];
```

---

## 🔒 Data Storage

All data is stored in your browser's localStorage:

- `shopify-checklist-state` - Checklist item statuses
- `shopify-product-name` - Product name input
- `shopify-product-id` - Product ID input
- `shopify-checklist-theme` - Theme preference (light/dark)

No data is sent to any server. Your data stays private.

---

## 📱 Browser Support

- ✅ Chrome/Edge 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🙏 Credits

- Built with vanilla HTML, CSS, and JavaScript
- Icons from Feather Icons
- Font: Inter by Google Fonts
- Inspired by Shopify's design system

---

<div align="center">
  <sub>Built with ❤️ for Shopify merchants</sub>
</div>
