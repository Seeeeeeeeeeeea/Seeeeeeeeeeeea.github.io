# Personal Homepage

This repository contains a static personal academic homepage for GitHub Pages.
It uses plain HTML, CSS, and a small amount of vanilla JavaScript. No build
tool, framework, or package installation is required.

## Directory Structure

```text
.
├── index.html
├── README.md
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   └── images
│       └── .gitkeep
```

## Local Preview

You can open `index.html` directly in a browser.

For a closer GitHub Pages-like preview, run a simple local server from the
repository root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `seeeeeeeeeeea.github.io`.
2. Commit and push this project to the `main` branch.
3. Open the repository on GitHub.
4. Go to `Settings` -> `Pages`.
5. Under `Build and deployment`, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save the settings and wait for GitHub Pages to publish the site.

After deployment, the site should be available at:

```text
https://seeeeeeeeeeea.github.io
```

## Content to Update Later

Update these placeholders before publishing your final resume homepage:

- `index.html`: site name, page title, hero name, short introduction, about text.
- `index.html`: research interests, project cards, skill categories, contact links.
- `assets/images/my_photo.png`: replace this profile image with your own final photo if needed.
- `assets/images/profile-placeholder.svg`: backup placeholder image.
- `assets/images/`: add profile photos, project images, or other static assets if needed.
- `assets/css/style.css`: adjust colors, spacing, typography, or layout details.
- `README.md`: replace this template text with project-specific notes if desired.

## Notes

- The site is fully static and can be deployed directly by GitHub Pages.
- The mobile navigation menu is implemented in `assets/js/main.js`.
- Global colors, spacing, typography, border radius, and shadows are managed with
  CSS variables in `assets/css/style.css`.
