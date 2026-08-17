# Suraj — Professional Classical Data Analyst Portfolio

An editorial, classical, and human-crafted personal portfolio website built with **100% pure HTML5, CSS3, and Vanilla JavaScript**.

Designed specifically for **Suraj (MCA Student & Aspiring Data Analyst)** with a **warm light theme by default**, a dedicated **Dark Mode toggle**, refined editorial typography, and live **Web3Forms contact integration**.

---

## 🌟 Key Highlights & Design Philosophy

* **🎨 Warm Light Theme Default:** Built on an ivory/warm off-white foundation (`#F7F5F0`), deep charcoal typography (`#18212B`), and a muted bronze/gold accent (`#8A6A3E`). Avoids generic AI gradients in favor of intentional, handcrafted editorial design.
* **☼ / ☾ Dark Mode Switch:** Built-in navigation toggle with smooth color transitions, `localStorage` preference persistence, and automatic system preference detection.
* **📖 Editorial Typography:** Refined Google Fonts pairing featuring an editorial serif for headings (*Newsreader*) and a high-legibility modern sans-serif (*Plus Jakarta Sans*) for body copy.
* **✉️ Working Web3Forms Contact Form:** Asynchronous `fetch()` submission directly to Web3Forms (`https://api.web3forms.com/submit`) with access key `2ce485c9-c6ff-4b2c-b7aa-99a9f2144345`. Includes client validation, loading state, verified success banner, error retry, and duplicate submission prevention.
* **⚡ Pure Native Web Stack:** Strictly no React, Vue, Angular, Bootstrap, Tailwind, or runtime dependencies. Loads in under 1 second.
* **🎯 Focused Recruiter Positioning:** Visually elevates Data Analytics (SQL, Python, Power BI, Excel, Tableau) as the primary career focus while demonstrating supporting capabilities in Salesforce Administration and UI/UX design.
* **🔍 Project Category Filtering & Modals:** Filter projects by category with smooth CSS transitions and open accessible modal dialogs for in-depth technical breakdowns.
* **📄 Direct Resume Distribution:** Direct `Download Resume` and `View in Tab` actions pointing to `assets/resume/Suraj_Resume.pdf`.
* **♿ Accessible & SEO-Optimized:** Semantic HTML5 structure, ARIA roles, Open Graph metadata, keyboard focus states, and comprehensive `@media (prefers-reduced-motion: reduce)` support.

---

## 📂 Project Directory Structure

```text
portfolio/
│
├── index.html              # Semantic HTML5 page (all 8 sections + Web3Forms form)
├── style.css               # Vanilla CSS3 stylesheet (Light theme, Dark mode, Editorial layout)
├── script.js               # Vanilla JavaScript (Theme switch, Web3Forms fetch, Modals, Filters)
├── README.md               # Complete project documentation & deployment guide
├── MANUAL_CHANGES.md       # Exact search & replace checklist & personalization guide
│
└── assets/
    ├── images/
    │   ├── profile.svg     # Profile placeholder graphic
    │   ├── project-1.svg   # Retail Sales Dashboard preview graphic
    │   ├── project-2.svg   # Semiconductor Quality Analysis preview graphic
    │   ├── project-3.svg   # Data Extraction Pipeline preview graphic
    │   └── project-4.svg   # Salesforce CRM Architecture preview graphic
    │
    └── resume/
        └── Suraj_Resume.pdf # Valid placeholder PDF ready to be replaced
```

---

## 💻 How to Run Locally

Because this project uses standard browser technologies, there are **no build tools, no `npm install`, and no dependencies to compile**.

### Method 1: Instant Browser Preview (Fastest)
1. Open the `portfolio` folder on your computer.
2. Double-click `index.html` (or right-click $\rightarrow$ **Open with** $\rightarrow$ Google Chrome / Microsoft Edge / Safari / Firefox).

### Method 2: VS Code Live Server (Recommended for Editing)
1. Open the project folder in **Visual Studio Code**.
2. Install the **"Live Server"** extension by *Ritwick Dey* (from the Extensions tab `Ctrl + Shift + X`).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. Your browser will open `http://127.0.0.1:5500/index.html` and automatically reload whenever you make edits.

### Method 3: Local Python HTTP Server
If you have Python installed, open your command line in the `portfolio` folder and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## ✏️ How to Customize Your Details

Refer to [`MANUAL_CHANGES.md`](file:///c:/Users/sg022/OneDrive/Desktop/Portfolio/MANUAL_CHANGES.md) for the exact search terms and locations.

### 1. Update Contact Information & Links
In `index.html`, replace:
* `YOUR_EMAIL_HERE` $\rightarrow$ Your email (e.g. `suraj.analytics@gmail.com`)
* `YOUR_LINKEDIN_URL` $\rightarrow$ Your LinkedIn slug (e.g. `suraj-data-analyst`)
* `YOUR_GITHUB_URL` $\rightarrow$ Your GitHub username (e.g. `suraj-codes`)
* `YOUR_LOCATION_HERE` $\rightarrow$ Your city & state (e.g. `Bengaluru, India`)
* `YOUR_COLLEGE_NAME` $\rightarrow$ Your MCA college/university name

### 2. Add Your Resume PDF
1. Export your resume as a standard PDF.
2. Name the file **`Suraj_Resume.pdf`**.
3. Place it in `assets/resume/`, replacing the placeholder file.

### 3. Add Your Photo & Project Screenshots
* **Profile Image:** Save your headshot as `profile.jpg` in `assets/images/`, then in `index.html` change `src="assets/images/profile.svg"` to `src="assets/images/profile.jpg"`.
* **Project Screenshots:** Replace `project-1.svg` through `project-4.svg` with actual screenshots of your dashboards or notebooks.

---

## ✉️ How Web3Forms Contact Works

The contact form is pre-configured with the **Web3Forms** service:
* **Access Key:** `2ce485c9-c6ff-4b2c-b7aa-99a9f2144345`
* **AJAX Endpoint:** `https://api.web3forms.com/submit`

When a visitor submits the form, `script.js` sends the data via `fetch()`, displays a loading state, and renders a success message upon delivery without leaving the page.

If you ever want to change the recipient email in the future:
1. Go to [Web3Forms.com](https://web3forms.com) and generate a new access key with your email.
2. Replace the `access_key` input value on Line ~460 in `index.html`.

---

## 🚀 Free Deployment Guide (1-Click Hosting)

### Option A: GitHub Pages (Recommended)
1. Create a new repository on [GitHub](https://github.com) named `portfolio` (or `yourusername.github.io`).
2. Push your project files:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Suraj portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** $\rightarrow$ **Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your website will be live at `https://YOUR_USERNAME.github.io/portfolio/` within 1–2 minutes!

---

### Option B: Netlify (Drag & Drop — No Git Required)
1. Sign in at [Netlify.com](https://app.netlify.com/).
2. Go to the **Sites** tab and drag & drop your entire `portfolio` folder directly into the upload area.
3. Netlify will deploy your site instantly with a free SSL certificate.

---

### Option C: Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or sign in at [Vercel.com](https://vercel.com).
2. Run `vercel` in the project directory and follow the simple prompts.
