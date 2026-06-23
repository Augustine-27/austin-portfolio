# Austin Agu — Portfolio & CV Website

## Files
```
austin-portfolio/
├── index.html          ← Main page (all sections)
├── style.css           ← All styling
├── script.js           ← Interactions & animations
├── Austin_Agu_CV.docx  ← Place your CV here for download button
└── README.md
```

## To Add Your CV Download
Copy your `Austin_Agu_CV.docx` into this folder alongside `index.html`.

## To Add Project Screenshots
In `index.html`, find any project card and add an image like this:
```html
<img src="screenshots/your-image.png" alt="Project screenshot" class="project-img" />
```
Then create a `screenshots/` folder and drop your images in.

## Deploy on GitHub Pages (Free)
1. Create a GitHub account at github.com
2. Create a new repository (e.g. `portfolio`)
3. Upload all files (index.html, style.css, script.js, your docx)
4. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
5. Your site will be live at: `https://yourusername.github.io/portfolio`

## Deploy on Netlify (Free, Easiest)
1. Go to netlify.com and sign up free
2. Drag and drop the entire `austin-portfolio` folder onto the Netlify dashboard
3. Your site is instantly live with a URL like `https://random-name.netlify.app`
4. You can set a custom domain name later

## Update Your Email & Links
In `index.html`, search for:
- `chikezie.agu@email.com` → replace with your real email
- `linkedin.com/in/chikezie-agu` → replace with your LinkedIn URL
- Upwork profile link → replace `href="#"` with your real Upwork URL
- GitHub links on project cards → add your actual repo URLs

## Add Contact Form (Real Email Sending)
Replace the form simulation in `script.js` with Formspree (free):
1. Sign up at formspree.io
2. Create a form and get your endpoint URL
3. In `index.html`, change the form tag to:
   `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Remove the `id="contact-form"` submit handler from script.js
