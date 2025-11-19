# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static multilingual website for European HR Services GmbH, a German-based international recruitment consultancy. The site is deployed via GitHub Pages and features three language versions (German, English, Spanish) with a clean, SEO-optimized structure.

## Repository Structure

```
.
├── index.html              # Main landing page (English)
├── de/                     # German version
│   ├── index.html         # German homepage
│   ├── about.html         # About Us page
│   ├── careers.html       # Careers/Jobs page (with internship images)
│   ├── impressum.html     # Legal imprint
│   └── datenschutz.html   # Privacy policy
├── en/                     # English version
│   ├── index.html         # English homepage
│   ├── about.html         # About Us page
│   ├── imprint.html       # Legal imprint
│   └── privacy.html       # Privacy policy
├── es/                     # Spanish version
│   ├── index.html         # Spanish homepage
│   ├── about.html         # About Us page
│   ├── aviso-legal.html   # Legal imprint
│   └── privacidad.html    # Privacy policy
└── assets/
    ├── css/style.css          # Shared stylesheet (includes cookie banner styles)
    ├── js/
    │   └── cookie-consent.js  # GDPR-compliant cookie consent management
    └── images/                # Logo and content images
```

## Architecture & Key Features

### SEO-Optimized Multi-Language Structure

The site uses a clean, modern structure with separate pages instead of tab-based navigation:

- **Each language has its own directory** (`/de/`, `/en/`, `/es/`) with localized content
- **Clear URL structure** - every page has a unique, indexable URL
- **hreflang tags** on all pages for proper multilingual SEO
- **Canonical tags** to prevent duplicate content issues
- **Dedicated legal pages** that are directly accessible and indexable

### Page Structure

**Homepages** (`/de/`, `/en/`, `/es/`):
- Hero section with call-to-action
- Services overview (4 main service cards)
- Why Us section (4 value propositions)
- About preview section with link to full About page
- Target audience section
- Testimonials
- Contact section with email CTAs

**About Pages** (`about.html`):
- Full company information
- Mission and values
- What sets the company apart
- Team qualifications
- Link back to homepage

**Careers Page** (`de/careers.html`):
- German-only page for job listings
- Displays internship images (`Pflichtpraktikum_1.jpg`, `Pflichtpraktikum_2.jpg`)
- Contact information for applications

**Legal Pages**:
- Impressum/Imprint/Aviso Legal - Company registration details
- Datenschutz/Privacy/Privacidad - GDPR-compliant privacy policy

### Navigation

**Header Navigation** (consistent across all pages):
- Logo linking to homepage
- Service sections (anchor links on homepage)
- About Us link (to dedicated page)
- Careers link (German only)
- Contact section (anchor link on homepage)
- Language switcher with active state

**Footer Navigation**:
- Copyright notice
- Links to Impressum/Imprint
- Links to Datenschutz/Privacy
- Careers link (German only)
- Cookie Settings link (opens cookie consent banner)

### Styling

The site uses a consistent color scheme defined in `assets/css/style.css`:
- Primary: `#075563` (dark teal)
- Accent: `#DBD700` (yellow)
- Background: `#f9f9f9` (light gray)

Responsive design with mobile breakpoints at 600px and 768px. Mobile navigation uses a hamburger menu toggle.

### Google Analytics & Cookie Consent (GDPR/DSGVO Compliance)

The site implements **Google Analytics 4** (GA4) with full GDPR compliance using **Google Consent Mode v2**:

**Privacy-by-Default Approach**:
- All analytics tracking is **disabled by default** (Consent Mode v2 default state: denied)
- GA4 only loads after explicit user consent via cookie banner
- IP anonymization enabled (`anonymize_ip: true`)
- Google Signals disabled (`allow_google_signals: false`)

**Cookie Banner** (`assets/js/cookie-consent.js`):
- Multilingual support (DE/EN/ES) with automatic language detection
- Granular consent options: necessary cookies vs. analytics cookies
- Consent preferences stored in localStorage
- Real-time Google Consent Mode updates
- Reopenable via "Cookie Settings" footer link on all pages

**Privacy Policies**:
- All three language versions include detailed GA4 and Consent Mode v2 information
- Data retention: 14 months for event data, 2 years for cookies
- EU-US Data Privacy Framework (DPF) disclosure
- User rights under GDPR (Art. 15-21)

**Technical Implementation**:
- Google Consent Mode v2 script in `<head>` of all pages sets default consent to 'denied'
- GA4 tracking code (G-GYVLWB0C08) loads but remains inactive until consent
- Cookie banner appears on first visit and updates consent state dynamically
- No cookies set until user explicitly accepts analytics

## Development Workflow

### Viewing the Site Locally

Since this is a static site with no build process, simply open the HTML files in a browser:

```bash
# Serve with a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

The site is hosted on GitHub Pages. Changes pushed to the `main` branch are automatically deployed.

## Content Guidelines

### Adding New Content

1. **New Pages**: Create the page in all three language directories (`de/`, `en/`, `es/`) to maintain consistency
2. **Update Navigation**: Add links in header/footer across all language versions
3. **Add hreflang Tags**: Include proper hreflang and canonical tags in the `<head>` section
4. **Legal Content**: Keep Impressum/Privacy pages updated with current company information

### Language-Specific Features

The German version includes a **Careers page** (`de/careers.html`) that displays job openings and internship announcements via images. The English and Spanish versions do not currently have careers pages.

### hreflang Implementation

All pages include hreflang tags for proper multilingual SEO:

```html
<link rel="alternate" hreflang="de" href="https://european-hr-services.de/de/">
<link rel="alternate" hreflang="en" href="https://european-hr-services.de/en/">
<link rel="alternate" hreflang="es" href="https://european-hr-services.de/es/">
<link rel="alternate" hreflang="x-default" href="https://european-hr-services.de/en/">
```

Adjust the paths accordingly for each page (e.g., `/about.html`, `/imprint.html`, etc.).

## Important Notes

- No build system or package manager required
- No dependencies beyond standard HTML/CSS/JavaScript
- All assets are relative-pathed from language subdirectories
- **GDPR-compliant analytics**: Google Analytics 4 with Consent Mode v2 (tracking only with explicit user consent)
- **Privacy-by-default**: No cookies set until user accepts analytics via cookie banner
- JavaScript includes: mobile menu toggle, smooth scrolling, and cookie consent management
- Cookie banner automatically detects page language and displays appropriate translations

## Contact Information

Company: European HR Services GmbH
Email: info@european-hr-services.de
Registry: Munich HRB 218828
VAT ID: DE300436663
