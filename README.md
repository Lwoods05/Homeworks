# LWS Tech Skills — Homeworks

Portfolio website homework submission by **Lemar Woods**.

---

## Pages

| Page | Description |
|------|-------------|
| [Home](index.html) | Hero introduction, navigation cards, a brain-data/privacy discussion, and an interactive diagnostics panel |
| [Projects](projects.html) | Creative project write-ups and sources of inspiration |
| [About](about.html) | Personal bio, quick facts, story, and a contact form |

---

## Features

- Responsive layout using CSS Flexbox and Grid
- Custom CSS variables for consistent light/dark color theming
- Light/dark mode toggle with the preference saved in `localStorage`
- Collapsible mobile navigation menu with a clear current-page indicator
- A "Toggle highlight" button on every page that lets readers turn a featured card's highlight on or off, with the choice remembered across pages
- Expandable "Read more" sections for extra detail without cluttering the page
- Click-to-select cards (`initializeCardSelectors`) for quick visual focus
- Contact-style form with inline validation, error messages, and a confirmation state on submit
- A GitHub stats lookup and a status-word color preview on the Home page's interactive diagnostics panel
- A "Back to top" button that appears after scrolling
- Google Fonts: Pacifico and Quicksand
- Gestalt design principles (proximity and similarity)
- Fully accessible — passes WAVE with 0 errors, AIM Score 10/10

## Project Note

This homework project is a portfolio site for LWS Tech Skills and is intended to showcase creative work, personal goals, and a contact form.

## File Structure

```
Homeworks/
├── index.html          # Home page
├── projects.html       # Projects page
├── about.html          # About page
└── assets/
    ├── css/
    │   └── style.css   # Main stylesheet
    ├── images/
    │   ├── Lemars_Life_Story_Cover_Page.png
    │   ├── black_super_heroes.jpg
    │   └── csi_tech.svg
    └── js/
        ├── site.js        # Shared behavior: theme toggle, nav, forms, highlight toggle, back-to-top
        └── interactive.js # Home page extras: GitHub stats lookup and status preview
```

---

*Created by Lemar Woods — 2026*
