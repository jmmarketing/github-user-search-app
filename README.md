# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.

### Screenshot

![](./preview.gif)

### Links

- GitHub Repo URL: [https://github.com/jmmarketing/github-user-search-app](https://github.com/jmmarketing/github-user-search-app)
- Live Site URL: [https://jmmarketing.github.io/github-user-search-app/](https://jmmarketing.github.io/github-user-search-app/)

## My process

- Review figma files strategize variables, UI states, typography, etc..
- Build out basic structure with SCSS and MVC in mind.
- Structure Index.html with elements needed.
- Create BEM naming conventions & start basic styling
- Move to states, interactions, etc..
- Start responisve break points, implement with mixins.
- Test and tweak
- Build out single JS file working on features from top down (light/dark --> search --> render).
- Comment and section JS file for MVC refactor down the line.
- Test and tweak.
- Move to refactor to MVC.
- Break it, obviously.
- Once working, review requirements, update/fix where needed.
- Test, test, find ways to break it and fix again.
- Deploy

### Built with

- Semantic HTML5 markup
- SCSS (Responsive Mixins)
- MVC
- [Parcel Bundler](https://parceljs.org/)
- Vanilla JS
- SVG Media
- Some ☕☕
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Deploying to GH Pages.

### What I learned

This was a great learning project. Starting, then taking 5-6weeks away from it, and coming back was a fun project in itself. From a feature stand point, there were a couple new challenges, including:

- Implementing a light/dark toggle
- Detecting a users preferred scheme setting
- SVG Manipulation techniques

For the ligh/dark toggle I used :root variables with a data-theme attribute to "switch" them:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
:root {
  --component-background: #fefefe;
  --account-text: #4b6a9b;
  --logo-title-number: #2b3442;
  --body-stats-background: #f6f8ff;
  --date-toggle: #697c9a;
  --toggleHover: #222731;
  --search-input-text: #222731;
  --box-shadow: 0px 16px 30px -10px #4660bb33;
}

[data-theme="dark"] {
  --component-background: #1e2a47;
  --account-text: #fff;
  --logo-title-number: #fff;
  --body-stats-background: #141d2f;
  --date-toggle: #fff;
  --toggleHover: #90a4d4;
  --search-input-text: #fff;
  --box-shadow: none;
}
```

```js
 changeTheme() {
    const isLight = !this._bodyElement.dataset.theme;

    if (isLight) {
      this._bodyElement.dataset.theme = "dark";
    } else {
      delete this._bodyElement.dataset.theme;
      delete this._modeToggle.dataset.theme;
    }

    this._state.mode = isLight ? "dark" : "light";
    this._state.switchTo = isLight ? "light" : "dark";

    this._updateToggleElement();
  }

// On init in my controller we fire this to check what the prefercen is.
  checkUserPreference() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.changeTheme();
    }
  }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Website - [Jeffrey McLean](https://jeffreymclean.com)
- Frontend Mentor - [JMMarketing](https://www.frontendmentor.io/profile/jmmarketing)
- Twitter - [@jeffe_mclean](https://www.twitter.com/jeffe_mclean)
