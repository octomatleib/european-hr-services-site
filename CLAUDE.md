# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static multilingual website for European HR Services GmbH, a German-based international recruitment consultancy. The site is deployed via GitHub Pages and features three language versions (German, English, Spanish) with synchronized navigation.

## Repository Structure

```
.
├── index.html              # Language selection landing page
├── de/index.html          # German version (most complete)
├── en/index.html          # English version
├── es/index.html          # Spanish version
└── assets/
    ├── css/style.css      # Shared stylesheet
    └── images/            # Logo and content images
```

## Architecture & Key Features

### Multi-Language Tab Synchronization

The site implements cross-language tab persistence using `sessionStorage` and a `tabMapping` object. Each language version contains identical JavaScript that maps tab names across languages:

- Welcome tabs: `willkommen` (DE) ↔ `welcome` (EN) ↔ `bienvenido` (ES)
- About tabs: `uber-uns` (DE) ↔ `about` (EN) ↔ `sobre-nosotros` (ES)
- Legal tabs: `impressum` / `imprint` / `aviso-legal` and `datenschutz` / `privacy` / `privacidad`

When users switch languages via the header navigation, the `saveCurrentTab()` function stores the current tab, and on page load, the site automatically opens the equivalent tab in the new language.

### Content Structure

**German version (`de/index.html`)** has three main tabs plus legal pages:
- Willkommen (Welcome)
- Über Uns (About Us)
- Offene Stellen (Open Positions) - unique to German version, displays internship images

**English and Spanish versions** have two main tabs plus legal pages:
- Welcome / Bienvenido
- About Us / Sobre Nosotros

All versions include footer-accessible legal tabs:
- Impressum/Imprint/Aviso Legal
- Datenschutz/Privacy/Privacidad

### Styling

The site uses a consistent color scheme defined in `assets/css/style.css`:
- Primary: `#075563` (dark teal)
- Accent: `#DBD700` (yellow)
- Background: `#f9f9f9` (light gray)

Tab navigation is responsive with mobile breakpoints at 600px and 768px.

## Development Workflow

### Viewing the Site Locally

Since this is a static site with no build process, simply open the HTML files in a browser:

```bash
# Open the landing page
open index.html

# Or serve with a local server to avoid CORS issues
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

The site is hosted on GitHub Pages. Changes pushed to the `main` branch are automatically deployed.

## Content Guidelines

### Adding New Content

1. **New Tabs**: Add to all three language versions to maintain consistency
2. **Update tabMapping**: Ensure the JavaScript `tabMapping` object includes new tab IDs across all language files
3. **Legal Content**: Keep Impressum/Privacy pages updated with current company information

### Language-Specific Features

The German version includes an "Offene Stellen" (Open Positions) tab that displays internship announcements via images (`Pflichtpraktikum_1.jpg` and `Pflichtpraktikum_2.jpg`). This tab is German-only and maps to the welcome page in other languages.

## Important Notes

- No build system or package manager required
- No dependencies beyond standard HTML/CSS/JavaScript
- All assets are relative-pathed from language subdirectories
- sessionStorage is used for tab persistence (no cookies or tracking)
- GDPR-compliant with no personal data collection

## Contact Information

Company: European HR Services GmbH
Email: info@european-hr-services.de
Registry: Munich HRB 218828
VAT ID: DE300436663
