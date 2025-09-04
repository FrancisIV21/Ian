# Alex Rodriguez - Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Performance**: Optimized with Next.js App Router
- **Animations**: Smooth page transitions and micro-interactions with Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
my-portfolio/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── .gitignore
├── .env.local
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
│       └── projects/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── projects/
│   │   │   └── page.js
│   │   ├── blog/
│   │   │   └── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navigation.js
│   │   ├── ui/
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   └── Section.js
│   │   └── sections/
│   │       ├── Hero.js
│   │       ├── About.js
│   │       ├── Projects.js
│   │       └── Contact.js
│   ├── lib/
│   │   ├── data.js
│   │   └── utils.js
│   └── styles/
│       └── components.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Personal Information

Edit `src/lib/data.js` to update:
- Personal information
- Project data
- Blog posts
- Skills and experience

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Custom color scheme defined in Tailwind config

### Images

- Add project images to `public/images/projects/`
- Update image paths in `src/lib/data.js`

## 📱 Pages

- **Home**: Hero section with featured projects
- **About**: Personal information, skills, and experience
- **Projects**: Filterable project gallery
- **Blog**: Article listings with tags and metadata

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary: `#f53003` (Red)
- Secondary: `#f0ede6` (Cream)
- Text: `#000000` (Black)

### Fonts

Custom font classes defined in `globals.css`:
- `.font-viola`: Headers and titles
- `.font-suisse-mono`: Body text and code
- `.font-suisse-bold`: Bold text

### Animations

Animation variants are defined in `src/lib/utils.js` and used throughout components.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

Build the project:
```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Alex Rodriguez - [alex.rodriguez@email.com](mailto:alex.rodriguez@email.com)

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)