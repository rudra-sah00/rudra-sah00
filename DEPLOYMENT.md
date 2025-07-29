# Portfolio Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## 📁 Project Structure

```
rudra-sah00/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── package.json        # Node.js dependencies
├── .gitignore         # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── README.md          # Original README
└── DEPLOYMENT.md      # This file
```

## 🚀 Deployment Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `rudra-sah00` (or your desired name)
4. Make it public
5. Don't initialize with README (since we already have files)

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/rudra-sah00.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically trigger

### 5. Access Your Live Site

After the deployment completes, your site will be available at:
```
https://YOUR_USERNAME.github.io/rudra-sah00/
```

## 🔧 Local Development

### Prerequisites

- Node.js (for development server)
- Python 3 (alternative server option)

### Run Locally

Option 1: Using Node.js
```bash
npm install
npm run dev
```

Option 2: Using Python
```bash
npm run serve
```

Option 3: Simple HTTP server
```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Customization

### Update Personal Information

1. **HTML Content**: Edit `index.html` to update:
   - Name and title
   - About me section
   - Contact information
   - Social media links

2. **Styling**: Modify `styles.css` to:
   - Change color schemes
   - Adjust animations
   - Modify layouts

3. **Functionality**: Update `script.js` to:
   - Add new interactive features
   - Modify animations
   - Change theme options

### Update GitHub Stats

Replace `rudra-sah00` with your GitHub username in the following URLs in `index.html`:

- GitHub stats
- Contribution graphs
- Language statistics
- Activity graphs

## 🎨 Features

### Interactive Elements

- **Smooth Scrolling**: Automatic smooth scrolling between sections
- **Parallax Effects**: Header and footer waves move with scroll
- **Hover Animations**: Tech badges and cards have hover effects
- **Theme Toggle**: Light/dark theme switching
- **Loading Animation**: Initial loading screen
- **Progress Bar**: Scroll progress indicator
- **Particle Effects**: Floating background particles

### Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Responsive grid layouts
- **Desktop Enhanced**: Full-featured desktop experience

### Performance Optimizations

- **CSS Animations**: Hardware-accelerated animations
- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed and optimized resources

## 🛠️ Troubleshooting

### Common Issues

1. **404 Error**: Make sure GitHub Pages is enabled and the repository is public
2. **Images Not Loading**: Check image URLs and ensure they're accessible
3. **Styling Issues**: Verify CSS file paths are correct
4. **JavaScript Errors**: Check browser console for error messages

### GitHub Actions Deployment Issues

1. Check the Actions tab in your repository
2. Look for failed workflow runs
3. Check the workflow file syntax
4. Ensure repository permissions are correct

## 📈 Monitoring

### Analytics Setup

To track your website visitors, you can add:

1. **Google Analytics**: Add tracking code to `index.html`
2. **GitHub Insights**: Use repository insights for basic stats
3. **Custom Analytics**: Implement custom tracking solutions

## 🔄 Updates

### Making Changes

1. Edit files locally
2. Test changes locally
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
```

4. GitHub Actions will automatically deploy the updates

## 📞 Support

If you encounter any issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [GitHub Actions documentation](https://docs.github.com/en/actions)
3. Open an issue in this repository

## 🎉 Congratulations!

Your portfolio is now live and automatically deploys with every commit to the main branch!

---

**Happy Coding!** 🚀
