# Learning C++ — Game Development Academy

A responsive, W3Schools-inspired learning website for the Learning-Cpp curriculum. It is built with plain HTML, CSS and JavaScript so there is no frontend build toolchain to maintain.

## Features

- Responsive course layout with collapsible topic navigation.
- Twenty-module C++20 curriculum, ordered from fundamentals to game-engine engineering.
- Lesson pages rendered from the repository's module README files.
- Topic search across module titles, descriptions, tracks and keywords.
- Copy buttons for code examples.
- Browser-local module completion tracking.
- Links to each module's theory, examples, exercises, assessment and project folders.
- GitHub Pages deployment using GitHub Actions.

## Local preview

From the repository root, run:

```powershell
python -m http.server 8000
```

Open http://localhost:8000/website/ .

The site loads module documentation from the adjacent `modules/` directory when the generated content copy is not present. If Python is not installed, use another static HTTP server. Do not open `index.html` directly with a `file://` URL; browsers restrict local fetch requests.

## How content is connected

- `content/course.json` contains the website navigation metadata and search keywords.
- `app.js` loads the matching `modules/<module-folder>/README.md` at runtime.
- The Pages workflow copies the complete `modules/` directory into the deploy artifact at `content/modules/`.
- Module resource links point back to the corresponding source folders in GitHub.

The repository documentation remains the source of truth. Update a module's README and the website displays the updated lesson after deployment.

## Deployment

The workflow at `.github/workflows/deploy-pages.yml` deploys the website when changes are pushed to `main`.

One-time repository setup:

1. Open **Settings → Pages** in the GitHub repository.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Merge the curriculum and website pull request into `main`.
4. Open the **Actions** tab and inspect the **Deploy Learning C++ website** workflow.
5. Once deployment succeeds, the Pages URL is shown in the workflow deployment summary and repository Pages settings.

The workflow does not deploy from this working branch. It deploys from `main` after the pull request is merged.

## Technical notes

- Markdown rendering uses markdown-it from a CDN.
- Code highlighting uses highlight.js from a CDN.
- The website does not execute C++ in the browser. Code examples are educational source snippets; compile them with the documented GCC, Clang or MSVC toolchain.
- Completion state is stored in the visitor's browser and is not synchronized between devices or GitHub accounts.
- This site is a learning resource, not an accredited qualification.
