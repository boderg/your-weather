# [YOUR WEATHER](https://boderg.github.io/your-weather "Click to view the deployed site")

- Your weather is a simple weather information page that uses the OpenWeatherMap api.
- Your Weather has been designed so that users worldwide can view the weather not only where they are but also in other countries.
- Your Weather is especially handy for those who travel and wish to know what the weather is like were they are travelling to.
- Your Weather displays the time and date of the area in which your weather search is for.
- Your Weather has a toggle to display the weather in either Celcius or Fahrenheit along with wind speed in Meters per Second or Miles per Hour.
- Your weather has a range of weather details displayed for those that want a little more information than just the temperature and weather description.
- Your Weather is a weather app for everyone.

## Table of Contents

[Mockup Screenshots](#mockup-screenshots)

[UX](#ux)

- [Colour Scheme](#colour-scheme)
- [Typography](#typography)

[User Stories](#user-stories)

- [New site Users](#new-site-users)
- [Returning Site Users](#returning-site-users)

[Wireframes](#wireframes)

- [Mobile Wireframes](#mobile-wireframes)
- [Tablet Wireframes](#tablet-wireframes)
- [Desktop Wireframes](#desktop-wireframes)

[Features](#features)

- [Existing Features](#existing-features)
- [Future Features](#future-features)

[Testing](#testing)

[Deployment](#deployment)

- [Local Deployment](#local-deployment)

  - [Cloning](#cloning)
  - [Forking](#forking)

- [Local vs Deployment](#local-vs-deployment)

[Credits](#credits)

- [Content](#content)

- [Media](#media)

- [Acknowledgments](#acknowledgements)

## Mockup Screenshots

Below are two mockup images of the Your Weather website created using the "Am I Responsive" website.

| Screenshot 1 | Screenshot 2 |
| :---: | :---: |
| ![screenshot](documentation/mockups/Am%20I%20Responsive1.png) | ![screenshot](documentation/mockups/Am%20I%20Responsive2.png) |

## UX

- The design for Your Weather was created as a series of wireframes covering mobile, tablet and desktop to determine the initial design and layout of the site.
- The Your Weather site was designed with ease of use and simplicity in mind.
- A simple clean look was built so that all a user needs to do is enter their city or town name and click search.

### Colour Scheme

- The chosen colour scheme for Your Weather is designed to be inviting and have a neutral aesthetic while giving a nice splash of colour.
- The colours used are as follows:-

- `#9ecffa` used for primary text.
- `#9ecffa` used for primary highlights.
- `#fafafa` used for secondary text.
- `#fafafa` used for secondary highlights.
- `#7f0ffb and #c27b6f` combined to create a linear gradient background.
- `#000` used for box shadows and modal background.

I used [coolors.co](https://coolors.co/7f0ffb-c27b6f-9ecffa-fafafa-000000) to generate my colour palette.

![screenshot](documentation/ux/Create%20a%20Palette%20-%20Coolors.png)

I have used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.

```css
:root {
  --display-background: linear-gradient(135deg, #7f0ffb, #c27b6f);
  --text-color: #9ecffa;
  --text-hover-color: #fafafa;
  --box-shadow-color: #000;
  --drop-shadow-color: #9ecffa;
  --modal-background: rgba(0, 0, 0, 0.4);
}
```

### Typography

- I used the Google Font called 'Play' for the Your Weather site.
- I felt that this font had a nice modern style that is easy to read and that it fitted well with the Your Weather site.

- [Play](https://fonts.google.com/specimen/Play) was used for all text within the site.

- [Font Awesome](https://fontawesome.com) icons were used in the Your Weather site, for GitHub links in the footer and modal and for the search icon in the main weather card.

## User Stories

### New Site Users

- As a new site user, I would like to search my local area, so that I can see what the weather is today.
- As a new site user, I would like to search my local area, so that I can see the forecast for the next few days.
- As a new site user, I would like to search other areas, so that I can see the weather in those areas.
- As a new site user, I would like to search other areas, so that I can se the forecast for those areas.
- As a new site user, I would like to search a place I am visiting, so that I can see the weather and plan accordingly.
- As a new site user, I would like to be able to change the format, so that I can view the weather in my native measurements.

### Returning Site Users

- As a returning site user, I would like to ____________, so that I can ____________.
- As a returning site user, I would like to ____________, so that I can ____________.
- As a returning site user, I would like to ____________, so that I can ____________.
- As a returning site user, I would like to ____________, so that I can ____________.
- As a returning site user, I would like to ____________, so that I can ____________.

## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Mobile Wireframes

<details>
<summary> Click here to see the Mobile Wireframes</summary>

| Main page | About modal | Displayed weather |
| :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/mobile-main-page.png) | ![screenshot](documentation/wireframes/mobile-about-modal.png) | ![screenshot](documentation/wireframes/mobile-displayed-weather.png) |

</details>

### Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

| Main page | About modal | Displayed weather |
| :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/tablet-main-page.png) | ![screenshot](documentation/wireframes/tablet-about-modal.png) | ![screenshot](documentation/wireframes/tablet-displayed-weather.png) |

</details>

### Desktop Wireframes

<details>
<summary> Click here to see the Desktop Wireframes </summary>

| Main page | About modal | Displayed weather |
| :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/desktop-main-page.png) | ![screenshot](documentation/wireframes/desktop-about-modal.png) | ![screenshot](documentation/wireframes/desktop-displayed-weather.png) |

</details>

## Features

### Existing Features

| Feature | Description | Screenshot |
| :---: | :---: | :---: |
| **About Your Weather** | The 'About Your Weather' button opens a modal that gives a little information about the site and it's creator. | ![screenshot](documentation/features/modal-button.png) |
| **About Your Weather Modal** | The 'About Your Weather Modal' displays what the site is about, what you can do on the site and why the site was created. It also contains links to the repository and where it is hosted. | ![screenshot](documentation/features/modal.png) |
| **City Input Box** | Details about this particular feature, including the value to the site, and benefit for the user. Be as detailed as possible! | ![screenshot](documentation/features/input-box.png) |
| **Search Button** | Details about this particular feature, including the value to the site, and benefit for the user. Be as detailed as possible! | ![screenshot](documentation/features/search-button.png) |
| **Metric / Imperial Toggle** | Details about this particular feature, including the value to the site, and benefit for the user. Be as detailed as possible! | ![screenshot](documentation/features/temp-toggle-c.png) ![screenshot](documentation/features/temp-toggle-f.png) |
| **Footer** | Details about this particular feature, including the value to the site, and benefit for the user. Be as detailed as possible! | ![screenshot](documentation/features/footer.png) |

### Future Features

- Moonrise and Moonset Times
  - A feature to display what time the moon is visible in the searched area.
- Moonphase
  - A feature to display the current phase of the moon in the searched area.
- Wind direction
  - A feature to display the direction of the wind in the searched area.

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS :root variables](https://www.w3schools.com/css/css3_variables.asp) used for reusable styles throughout the site.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [VSCode](https://code.visualstudio.com/) used as a local IDE for development.
- [Krita](https://krita.org/en/) used for editing images, screenshots and favicon.
- [Favicon.cc](https://www.favicon.cc/) used to create the favicon.
- [Google Fonts](https://fonts.google.com/) used to search a suitable font and obtain a download link for that font.
- [Font Awesome](https://fontawesome.com/) used to add GitHub icon to the footer and modal and search icon to the search button.

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/boderg/your-weather), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://boderg.github.io/your-weather)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/boderg/your-weather)
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
    - `git clone https://github.com/boderg/your-weather.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/boderg/your-weather)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/boderg/your-weather)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local vs Deployment

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Use this space to discuss any differences between the local version you've developed, and the live deployment site on GitHub Pages.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

## Credits

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

### Content

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Use this space to provide attribution links to any borrowed code snippets, elements, or resources.
A few examples have been provided below to give you some ideas.

Ideally, you should provide an actual link to every resource used, not just a generic link to the main site!

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |
| [strftime](https://strftime.org) | CRUD functionality | helpful tool to format date/time from string |
| [WhiteNoise](http://whitenoise.evans.io) | entire site | hosting static files on Heroku temporarily |

### Media

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Use this space to provide attribution links to any images, videos, or audio files borrowed from online.
A few examples have been provided below to give you some ideas.

If you're the owner (or a close acquaintance) of all media files, then make sure to specify this.
Let the assessors know that you have explicit rights to use the media files within your project.

Ideally, you should provide an actual link to every media file used, not just a generic link to the main site!
The list below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links
by sending yourself the following command: `!freemedia`.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Lorem Picsum](https://picsum.photos) | home page | image | hero image background |
| [Unsplash](https://unsplash.com) | product page | image | sample of fake products |
| [Pixabay](https://pixabay.com) | gallery page | image | group of photos for gallery |
| [Wallhere](https://wallhere.com) | footer | image | background wallpaper image in the footer |
| [This Person Does Not Exist](https://thispersondoesnotexist.com) | testimonials | image | headshots of fake testimonial images |
| [Audio Micro](https://www.audiomicro.com/free-sound-effects) | game page | audio | free audio files to generate the game sounds |
| [Videvo](https://www.videvo.net/) | home page | video | background video on the hero section |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |

### Acknowledgements

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Use this space to provide attribution to any supports that helped, encouraged, or supported you throughout the development stages of this project.
A few examples have been provided below to give you some ideas.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my partner (John/Jane), for believing in me, and allowing me to make this transition into software development.
- I would like to thank my employer, for supporting me in my career development change towards becoming a software developer.
