# CODECRAFT | Freeman C. Wisdom Portfolio

A modern frontend portfolio built with React, Vite, and Tailwind CSS. It showcases personal branding, an experience timeline, technical skills, featured projects, and a responsive contact flow in a polished recruiter-friendly layout.

## Overview

This project is a personal developer portfolio designed to present:
- A strong hero and personal introduction
- A responsive About section
- A growth-focused Experience Timeline
- Technical and professional skills
- Featured projects with detail views
- Contact and social links
- Smooth section-based navigation with active scroll tracking

## Features

- Responsive desktop sidebar and mobile navigation
- Scroll-aware active navigation
- Experience Timeline section for learning and growth milestones
- Project cards with dedicated detail views
- Smooth scroll navigation between sections
- Animated reveal effects
- Optimized logo and project images for better loading performance
- Clean UI built for portfolio presentation and recruiter review

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Icons
- PostCSS
- ESLint

## Main Sections

- Home
- About
- Experience
- Skills
- Projects
- Contact

## Getting Started

### 1. Install dependencies

```bash
npm install
2. Start the development server
bash

npm run dev
3. Build for production
bash

npm run build
4. Preview the production build
bash

npm run preview
Available Scripts
npm run dev - Starts the local development server
npm run build - Creates the production build
npm run preview - Previews the production build locally
npm run lint - Runs ESLint
Project Structure
bash

src/
  assets/         # Static imports and asset helpers
  backgrounds/    # Background visuals and effects
  components/     # Reusable UI components
  data/           # Profile, skills, projects, and other content data
  pages/          # Page-level views such as Projects and Contact
  sections/       # Main homepage sections
public/
  assets/
    images/       # Logos, profile image, skill images
    projects/     # Project screenshots
Content Management
Most of the portfolio content is easy to update from the data files:

src/data/profile.js - Personal profile information
src/data/projects.js - Featured projects and project detail content
src/data/skills.js - Technical and professional skills
src/sections/ExperienceTimeline.jsx - Timeline milestones
src/components/Sidebar.jsx - Desktop navigation
src/components/MobileNav.jsx - Mobile navigation
Performance Notes
This project includes image optimization improvements such as:

A lighter optimized logo
Reduced project screenshot sizes
Eager loading for priority visual assets
Lazy loading for non-critical images

Author
Freeman C. Wisdom
Frontend Developer | Graphic Designer
Port Harcourt, Rivers State, Nigeria

License
This project is for personal portfolio use.


