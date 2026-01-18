# Deployment Guide

This website is a **Static Site**, meaning it consists purely of HTML, CSS, and JavaScript files. It can be hosted for free on almost any web hosting platform.

## Option 1: GitHub Pages (Recommended)

This is the easiest way if you are already using GitHub.

1. Create a new repository on GitHub.
2. Upload all files (`index.html`, `css/`, `js/`) to the repository.
3. Go to **Settings** > **Pages**.
4. Under **Source**, select `main` branch and `/root` folder.
5. Click **Save**. Your site will be live at `https://yourusername.github.io/repo-name`.

## Option 2: Netlify (Drag & Drop)

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag the **entire folder** (`musicschoolrank`) into the browser window.
3. Netlify will automatically upload and host it.
4. You will get a public URL (e.g., `https://amiable-musician.netlify.app`).

## Option 3: Vercel

1. Install Vercel CLI or use the web dashboard.
2. Import your GitHub repository just like Option 1.
3. Vercel will detect it as a static site and deploy it instantly.

## Custom Domain

For a professional finish, you can buy a domain (e.g., `globalmusicrankings.com`) from Namecheap or GoDaddy and connect it using the DNS settings provided by GitHub Pages, Netlify, or Vercel.
