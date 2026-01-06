GoldenRuppee Cafee

GoldenRuppee Cafee is a simple restaurant homepage built as part of The Odin Project curriculum.
The goal of this project is to practice JavaScript-based DOM manipulation, module bundling using Webpack, and tab-based navigation without page reloads.

All the main page content is dynamically rendered using JavaScript, while styling is handled separately using CSS.

Project Overview

This project demonstrates how a single-page restaurant website can be structured using JavaScript modules. Instead of switching between HTML files, the application dynamically updates the content area based on user interaction.

The website includes:

A landing (Home) page

An Outlets section

A Contacts section

Navigation between these sections is done using buttons placed inside a fixed header.

Technologies Used

HTML5

CSS3

JavaScript (ES6 Modules)

Webpack

npm

Features

Dynamic DOM rendering using JavaScript only

Tab-based navigation without page reloads

Modular code structure for scalability

How It Works

template.html contains the static structure (header, navigation, and an empty content div).

Each page section (Home, Outlets, Contacts) is defined inside its own JavaScript module.

Clicking a navigation button clears the existing content and loads the selected tab dynamically.

Webpack bundles JavaScript, CSS, fonts, and images into the dist folder.

Deployment

The project is deployed using GitHub Pages by pushing the contents of the dist folder to a dedicated gh-pages branch.

Webpack generates a production-ready build which GitHub Pages serves directly.

Learning Outcomes

Through this project, I practiced:

Structuring JavaScript applications using ES6 modules

Webpack configuration and asset management

DOM manipulation without relying on frameworks

Tab-based UI logic

Git and GitHub Pages deployment workflow

Acknowledgements

This project was built as part of The Odin Project – JavaScript Course.
All images used are for educational purposes only.

Asset handling (images and fonts) through Webpack

Responsive layout using Flexbox
