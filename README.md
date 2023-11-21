<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>RWD</h1>
<h3>◦ rwd: Revolutionizing Web Development, One Code at a Time!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
</p>
<img src="https://img.shields.io/github/license/matix7290/rwd?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/matix7290/rwd?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/matix7290/rwd?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/matix7290/rwd?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---


## 📍 Overview

The repository hosts a responsive portfolio website for artist Piotr Niewiadomski, showcasing his various design works such as illustrations, typography, posters, and box designs. Each category is on a different webpage featuring an image gallery with descriptions. The site also includes a search function that filters and displays content in real-time. Contact details and social media links are provided. The site adapts to different device sizes with multiple CSS stylesheets, ensuring an optimal viewing experience across platforms.

---


## 📂 Repository Structure

```sh
└── rwd/
    ├── css/
    │   ├── normalize.css
    │   ├── skeleton.css
    │   └── style.css
    ├── ilustracje.html
    ├── images/
    ├── index.html
    ├── opakowania.html
    ├── plakaty.html
    ├── search.js
    └── typografia.html

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [index.html](https://github.com/matix7290/rwd/blob/main/index.html)           | This is a portfolio website featuring art and designs by Piotr Niewiadomski. The website features a navigational menu leading to various HTML pages, each page possibly showing different categories of his work (illustrations, posters, typography, boxes). On the index page, numerous artworks are displayed as clickable images with accompanying descriptions. It includes a search field and the site is mobile responsive due to a viewport meta tag. The page also contains contact details and social media links.  |
| [opakowania.html](https://github.com/matix7290/rwd/blob/main/opakowania.html) | The code represents a mobile-responsive portfolio webpage in Polish which displays various categories of design works such as illustrations, posters, etc. Here, it primarily showcases box designs. The page incorporates a navigation menu, a search feature, and an image gallery with product descriptions. Contact details and social links are included in the page footer. Three CSS stylesheets and a JavaScript file enhance functionality and styling.                                                              |
| [ilustracje.html](https://github.com/matix7290/rwd/blob/main/ilustracje.html) | The code represents a portfolio webpage for an artist named Piotr Niewiadomski. It provides navigation through different categories (e.g., Illustrations, Posters, Typography, Boxes), a search function, and displays various images with descriptive captions. It also features a footer section with contact details and social media links. The design responsiveness is ensured with multiple CSS files (normalize.css, skeleton.css, and style.css).                                                                    |
| [plakaty.html](https://github.com/matix7290/rwd/blob/main/plakaty.html)       | The provided HTML file, "plakaty.html", represents a responsive portfolio webpage showcasing different types of works by an artist, Piotr Niewiadomski. The page includes a CSS-styled navigation menu for different portfolio categories and a search function. The body displays samples of the artist’s poster design work. Each poster's image is linked to its enlarged view. The webpage also includes a footer with contact information and social media links. Embedded JavaScript controls the search functionality. |
| [typografia.html](https://github.com/matix7290/rwd/blob/main/typografia.html) | The code is an HTML document representing a portfolio webpage. It contains typical meta tags, references to CSS stylesheets, and a responsive navigation menu. The page content includes sections for showcasing typography work, a search feature, and a footer with contact details and social media links. It includes a script, search.js, presumably for providing search functionality across the website.                                                                                                              |
| [search.js](https://github.com/matix7290/rwd/blob/main/search.js)             | The code selects HTML elements with specific ids and classes, then applies a real-time search filter function. As the user types into the search input, the function filters HTML elements (containing any text) that match the search string, using case-insensitive matching. The filtered results are then displayed in the "portfolio" section of the webpage by replacing its existing content.                                                                                                                          |

</details>

<details closed><summary>Css</summary>

| File                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [skeleton.css](https://github.com/matix7290/rwd/blob/main/css/skeleton.css)   | The provided code is a comprehensive CSS file used for styling a webpage. It contains classes for grid layout, typography, buttons, forms, lists, tables, code rendering, and utilities, with styles designed for responsiveness across multiple device sizes. The document's structural design is based on a grid system, which adjusts the page layout based on the device's screen width. It also includes media queries for different device widths, catering for mobile to desktop screen sizes.                                         |
| [style.css](https://github.com/matix7290/rwd/blob/main/css/style.css)         | The code is a CSS stylesheet defining the style for a responsive web layout. It sets styles for body text, images, menu, logo, navigation elements along with their alignment and spacing. It includes media queries for different screen widths, enabling a responsive grid view which rearranges based on device/screen size. It also styles a footer section, social media icon hover effects, and adjusts logos' backgrounds.                                                                                                             |
| [normalize.css](https://github.com/matix7290/rwd/blob/main/css/normalize.css) | The code is a CSS file named'normalize.css' used to remedy styling inconsistencies across different web browsers by resetting or normalizing default CSS styles. It modifies styles for HTML elements like fonts, margin, display, vertical alignment, backgrounds, and colors. It also contains specific style rules for forms, audio controls, images, and links to improve browser consistency and usability. Lastly, it defines styles for embedded content, text, and table elements to standardize visual presentation across browsers. |

</details>

---

### 🔧 Installation

1. Clone the rwd repository:
```sh
git clone https://github.com/matix7290/rwd
```

2. Enter the webpage folder
```sh
cd rwd
```

### 🤖 Running rwd

```sh
open index.html
```
---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/matix7290/rwd/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/matix7290/rwd/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/matix7290/rwd/issues)**: Submit bugs found or log feature requests for MATIX7290.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [MIT License](https://choosealicense.com/licenses/mit) License. For more details, refer to the [LICENSE](https://github.com/matix7290/rwd/blob/master/LICENSE/) file.

[**Return**](#Top)

---
