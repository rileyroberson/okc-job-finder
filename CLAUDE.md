# OKC Paraprofessional & Teacher Assistant Job Finder

A fully static React web app — no backend, no API keys, no ongoing costs.
A job search toolkit for paraprofessional and teacher assistant positions in the OKC metro area.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Map:** Leaflet + react-leaflet v4 (OpenStreetMap tiles — free, no API key)
- **No backend, no API calls, no database**

## Six Tabs

| Tab | What's in it |
|---|---|
| Find Jobs | Curated links to OKC school districts + general job boards + private orgs. Interactive map with district pins. |
| Resume Tips | Top 10 rules, section-by-section guide, common mistakes, links to free tools |
| Cover Letter | 3-paragraph structure guide, do's/don'ts, phrases to avoid, starter template |
| Interview Prep | Q&A for common questions (expandable), what to bring, questions to ask them |
| App Checklist | Interactive checkbox tracker across 5 phases of the application process |
| Certs & Pay | Oklahoma eligibility requirements, ParaPro Assessment info, helpful certifications, pay ranges by district |

## Project Structure

```
okc-job-finder/
├── src/
│   ├── App.jsx                        # Tab shell
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── FindJobs/
│       │   ├── index.jsx              # District links + job board links
│       │   └── DistrictMap.jsx        # Leaflet map with district pins
│       ├── ResumeTips/
│       │   └── index.jsx
│       ├── CoverLetter/
│       │   └── index.jsx
│       ├── InterviewPrep/
│       │   └── index.jsx
│       ├── AppChecklist/
│       │   └── index.jsx              # Stateful checkbox tracker
│       └── CertsAndPay/
│           └── index.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Commands

```bash
npm run dev      # Start local dev server at localhost:5173
npm run build    # Build for production → dist/
npm run preview  # Preview production build locally
```

## Deployment

This is a pure static site — deploy the `dist/` folder to:
- **Netlify** (drag and drop `dist/` — free tier)
- **Vercel** (`vercel deploy`)
- **GitHub Pages**
- Any static file host

## Updating Content

All content is hardcoded in the component files — no CMS, no database.
To update job board links, pay ranges, certifications, etc., edit the relevant component's data arrays at the top of the file.

## Notes

- The Leaflet map uses OpenStreetMap tiles (completely free, no key required)
- react-leaflet is pinned to v4 for React 18 compatibility (v5 requires React 19)
- The App Checklist uses local React state — resets on page refresh (intentional; no persistence needed)
