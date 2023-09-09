<a name="readme-top"></a>

<p align="center">
<img src="https://github.com/ladunjexa/nike-landing-page/blob/main/public/vite.svg?raw=true" width="10%" />
</p>
<p align="center">
<!-- Badges -->
  <a href="https://github.com/ladunjexa">
    <img src="https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?style=flat-square&logo=github&logoColor=white&labelColor=101827" alt="made by @ladunjexa" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ladunjexa/nike-landing-page" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/ladunjexa/nike-landing-page" alt="last update" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/network/members">
    <img src="https://img.shields.io/github/forks/ladunjexa/nike-landing-page" alt="forks" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/stargazers">
    <img src="https://img.shields.io/github/stars/ladunjexa/nike-landing-page" alt="stars" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/issues/">
    <img src="https://img.shields.io/github/issues/ladunjexa/nike-landing-page" alt="open issues" />
  </a>
  <a href="https://github.com/ladunjexa/nike-landing-page/issues/">
    <img src="https://img.shields.io/badge/PRs-welcome-pink.svg" alt="prs welcome" />
  </a>
</p>

<h1 align="center">Nike Website</h1>

Dive into the world of Tailwind CSS, Incredible Frontend Nike website built with Vite.js using TypeScript & React 🪐

#### [View Demo](https://nike-web-x.vercel.app/)

## Table of Contents

- [Introduction](#star2-introduction)
  - [Folder Structure](#folder-structure)
- [Technologies Used](#space_invader-technologies-used)
- [Getting Started](#toolbox-getting-started)
  - [Installation and Run Locally](#gear-installation-and-run-locally)
  - [React + TypeScript + Vite](#react--typescript--vite)
    - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
- [Screenshots](#camera-screenshots)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)

## :star2: Introduction

Nike Website is a web application built with Vite.js using TypeScript & React. The application is a landing page for Nike website. The application is responsive and works great on mobile devices and tablets. The application is designed using Tailwind CSS and it is deployed on Vercel.

### Folder Structure

<b>Nike Website</b> code folder structure is as follows:

```
nike-landing-page/
├── src/
├   ├── assets/
├   ├   ├── icons/
├   ├   ├   ├── [[...]].svg
├   ├   ├   └── index.ts
├   ├   ├── images/
├   ├   ├   ├── [[...]].{svg/png/jpeg}
├   ├   ├   └── index.ts
├   ├   └── react.svg
├   ├── components/
├   ├   ├── Button.tsx
├   ├   ├── Nav.tsx
├   ├   ├── PopularProductCard.tsx
├   ├   ├── ReviewCard.tsx
├   ├   ├── ServiceCard.tsx
├   ├   └── ShoeCard.tsx
├   ├── sections/
├   ├   ├── CustomerReviews.tsx
├   ├   ├── Footer.tsx
├   ├   ├── Hero.tsx
├   ├   ├── PopularProducts.tsx
├   ├   ├── Services.tsx
├   ├   ├── SpecialOffer.tsx
├   ├   ├── Subscribe.tsx
├   ├   ├── SuperQuality.tsx
├   ├   └── index.ts
├   └── constants/
├       └── index.ts
├── public/
├   ├── favicon.ico
├   └── vite.svg
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.ts
├── tsconfig.node.json
└── vite.config.ts
```

Now let's dive into the `src/` folder and see what it contains.

#### sections

`CustomerReviews.tsx` - `Footer.tsx` - `Hero.tsx` - `PopularProducts.tsx` - `Services.tsx` - `SpecialOffer.tsx` - `Subscribe.tsx` - `SuperQuality.tsx`

The sections directory contains all the sections used in the application. Each section is a React component. The sections are imported in `src/App.tsx` and rendered in the application.

#### components

`Button.tsx` - `Nav.tsx` -`PopularProductCard.tsx` - `ReviewCard.tsx` - `ServiceCard.tsx` - `ShoeCard.tsx`

The components directory contains all the components used in the application.

#### constants

`index.ts`

This is a TypeScript code contains all the constants used in the application, specifically the Navbar & Footer Links (`navbarLinks`, `footerLinks`), the Hero Section' Shoes and Statistics (`shoes`, `statistics`), the Products (`products`), the Services (`services`), the reviews (`reviews`), the social links (`socialLinks`) constants.

#### assets

`icons/` - `images/` `react.svg`

The public directory contains the media used in the application. The assets folder contains all the images and icons used in the application.

#### files

`App.tsx` - The App component is the root component of the application. It renders all the sections.

`index.css` - The index.css file contains the global styles of the application.

`main.tsx` - The main.tsx file is the entry point of the application.

`type.ts` - The type.ts file contains all the types used in the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :space_invader: Technologies Used

Nike web application is built using the following technologies:

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Vite.js](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [React](https://reactjs.org/): React is an open-source, front end, JavaScript library for building user interfaces or UI components.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

[![tech](https://skillicons.dev/icons?i=ts,vite,react,tailwind,vercel)](https://skillicons.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :toolbox: Getting Started

<!-- Installation -->

### :gear: Installation and Run Locally

#### Step 1:

Download or clone this repo by using the link below:

```bash
 https://github.com/ladunjexa/nike-landing-page.git
```

#### Step 2:

**Nike Website** using NPM (Node Package Manager), therefore, make sure that Node.js is installed by execute the following command in consle

```bash
  node -v
```

#### Step 3:

Go to root folder and execute the following command in console to get nodemon the required packages:

```bash
npm install
```

#### Step 4:

Go to root folder and execute the following command in console to start the application locally:

```bash
npm run dev
```

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :camera: Screenshots

![Mockup](.github/assets/nike-landing-page-mockup.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :wave: Contributing

<a href="https://github.com/ladunjexa/Rainblur-Portfolio-Showcase/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/Job-Platform-App" />
</a>

Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :warning: License

_Nike_ web application is open source and distributed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :handshake: Contact

If you want to contact me, you can reach me at [@ladunjexa](https://t.me/ladunjexa).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
