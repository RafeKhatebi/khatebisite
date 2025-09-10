# Personal Website

A modern, responsive personal website built with React, Vite, and Tailwind CSS featuring multi-language support (English, Persian, Pashto), SEO optimization, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS
- **Multi-language Support**: English, Persian (Farsi), and Pashto with i18next
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Interactive Pages**:
  - Home: Hero section with profile and quick navigation
  - About: Skills, experience, and professional background
  - CV: Downloadable resume with detailed work history
  - Portfolio: Project showcase with live demos and source code
  - Contact: Contact form with social media integration
- **Professional UI**: Clean, minimal design with smooth animations
- **API Ready**: Axios integration for backend communication

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **Internationalization**: i18next, react-i18next
- **HTTP Client**: Axios
- **SEO**: React Helmet Async
- **Icons**: Heroicons (via Tailwind)
- **Fonts**: Inter (Latin), Vazirmatn (Persian/Pashto)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Personal-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
Personal-Website/
├── public/
│   └── locales/           # Translation files
│       ├── en/
│       ├── fa/
│       └── ps/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── i18n/             # Internationalization config
│   │   └── config.js
│   ├── pages/            # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CV.jsx
│   │   ├── Home.jsx
│   │   └── Portfolio.jsx
│   ├── services/         # API services
│   │   └── api.js
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 Multi-language Support

The website supports three languages:

- **English** (en) - Default
- **Persian/Farsi** (fa) - RTL support
- **Pashto** (ps) - RTL support

Language files are located in `public/locales/{lang}/translation.json`. The language preference is automatically detected and stored in localStorage.

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize your brand colors
    900: '#1e3a8a',
  }
}
```

### Content
Update the following files to customize content:

- **Personal Information**: Update name, title, and contact details in all page components
- **Skills & Experience**: Modify the data arrays in `About.jsx` and `CV.jsx`
- **Projects**: Update the `mockProjects` array in `Portfolio.jsx`
- **Social Links**: Modify the `socialLinks` array in `Contact.jsx`

### Translations
Add or modify translations in the respective language files:
- `public/locales/en/translation.json`
- `public/locales/fa/translation.json`
- `public/locales/ps/translation.json`

## 🔌 API Integration

The project includes Axios configuration for API communication:

- **Portfolio API**: Fetch projects from backend
- **Contact API**: Send contact form submissions

Update the base URL in `src/services/api.js`:

```javascript
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api',
  // ...
})
```

## 📱 Responsive Design

The website is fully responsive with Tailwind CSS breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Dynamic page titles and meta descriptions
- OpenGraph tags for social media sharing
- Semantic HTML structure
- Language-specific meta tags
- Proper heading hierarchy

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing


### Traditional Hosting
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [i18next](https://www.i18next.com/) - Internationalization
- [Heroicons](https://heroicons.com/) - Icons
- [Unsplash](https://unsplash.com/) - Demo images

**Happy coding! 🎉**
