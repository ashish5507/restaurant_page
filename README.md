# GoldenRuppee Cafee

GoldenRuppee Cafee is a dynamic restaurant website created as part of
The Odin Project's JavaScript curriculum. The purpose of this project
is to practice DOM manipulation, ES6 modules, and Webpack by generating
all page content using JavaScript instead of static HTML.

The website uses tab-based navigation to switch between different
sections without reloading the page.

---

## Live Demo

https://<your-github-username>.github.io/<your-repo-name>/

---

## Project Goals

- Practice building a single-page application using vanilla JavaScript
- Learn how to structure a project using ES6 modules
- Use Webpack to bundle JavaScript, CSS, images, and fonts
- Dynamically render page content using DOM manipulation
- Implement tabbed navigation without page reloads

---

## Features

- Dynamic content rendering using JavaScript only
- Separate modules for Home, Outlets, and Contacts tabs
- Webpack asset handling for images and custom fonts
- Clean and responsive layout using Flexbox
- GitHub Pages deployment using the `gh-pages` branch

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Webpack
- npm

---

## Project Structure

restaurant_page/
├── src/
│   ├── images/            # Image assets
│   ├── fonts/             # Custom font files
│   ├── template.html      # Base HTML template
│   ├── styles.css         # Styling
│   ├── index.js           # Entry point and tab logic
│   ├── home.js            # Home tab module
│   ├── outlets.js         # Outlets tab module
│   └── contacts.js        # Contacts tab module
│
├── dist/                  # Webpack build output
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md

---

## How It Works

- `template.html` contains the static header and navigation buttons
- The `#content` div is kept empty and populated dynamically
- Each tab (Home, Outlets, Contacts) has its own JavaScript module
- Clicking a navigation button clears the current content and loads
  the selected section
- Webpack bundles all assets into the `dist` folder for deployment

---

## Running the Project Locally

1. Clone the repository
   git clone https://github.com/<your-username>/<repo-name>.git

2. Navigate into the project directory
   cd restaurant_page

3. Install dependencies
   npm install

4. Start the development server
   npx webpack serve

5. Open your browser and visit
   http://localhost:8080

---

## Deployment

The project is deployed using GitHub Pages.

The contents of the `dist` folder are pushed to a `gh-pages` branch,
which GitHub Pages serves as the live site.

---

## What I Learned

- How to structure a JavaScript project using modules
- Managing assets like images and fonts with Webpack
- Dynamically updating the DOM without frameworks
- Setting up and deploying a Webpack project to GitHub Pages

---

## Acknowledgements

This project was built as part of The Odin Project JavaScript course.

All images used are for educational purposes only.
