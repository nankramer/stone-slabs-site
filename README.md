# Stone Slabs Durban — Website

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher (download the LTS version)

### 1. Install dependencies
Open a terminal/command prompt in this folder and run:
```
npm install
```

### 2. Add your images
Copy your product images into the `public/images/` folder, matching this structure:
```
public/
  images/
    neolith/
      Abu_Dhabi_White.jpeg
      Amazonico.jpeg
      ... (44 files)
    infinity/
      MB10-Sahara-Noir_400x800.jpg
      ... (26 files)
    estrella/
      Absolute_White.png
      ... (25 files)
    lutum/
      Lutum-Griseo.jpg
      ... (10 files)
```
See `IMAGE_CHECKLIST.txt` for the complete list of required filenames.

### 3. Preview locally
```
npm start
```
Opens at http://localhost:3000

### 4. Build for production
```
npm run build
```
This creates a `build/` folder with optimised static files.

---

## Deploying to Your Hosting

### Option A: Traditional Hosting (cPanel / FTP)

1. Run `npm run build`
2. Connect to your hosting via FTP (FileZilla, Cyberduck, etc.) or use cPanel File Manager
3. Upload **everything inside the `build/` folder** to your domain's web root:
   - cPanel: usually `public_html/`
   - Plesk: usually `httpdocs/`
4. That's it — visit your domain

**Important:** Since this is a single-page app (SPA), you need to redirect all routes to `index.html`. Create or edit an `.htaccess` file in your web root:

```apache
# .htaccess — place in public_html/ alongside index.html
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Option B: Netlify (Free, Easiest)

1. Go to https://app.netlify.com
2. Drag and drop your `build/` folder onto the page
3. Your site is live instantly on a Netlify URL
4. To use your own domain: Go to Domain Settings → Add custom domain → Update your DNS:
   - Add a CNAME record pointing to your Netlify URL, or
   - Use Netlify DNS (they'll guide you through it)

### Option C: Vercel

1. Push your project to GitHub
2. Go to https://vercel.com → Import your repo
3. It builds and deploys automatically
4. Add your custom domain in the project settings

---

## Customisation Checklist

- [ ] Replace `031 XXX XXXX` with your real phone number (search the file for `XXX`)
- [ ] Replace `info@stoneslabs.co.za` with your real email if different
- [ ] Add a real favicon (`public/favicon.ico`)
- [ ] Add your Google Maps embed in the Contact page (replace the placeholder div)
- [ ] Connect the quote form to a backend (email service, Google Sheets, etc.)
- [ ] Add Google Analytics or similar tracking

## Tech Stack
- React 18
- No external UI framework — custom CSS-in-JS
- Fonts: Playfair Display + Instrument Sans (loaded from Google Fonts)
- Single-page app with client-side routing
