# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| :---: | :---: | :---: | :---: |
| Main Page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fboderg.github.io%2Fyour-weather%2F) | ![screenshot](documentation/validation/nu-html-checker-warnings.png) | Section lacks header h2-h6 warning |
| Main Page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fboderg.github.io%2Fyour-weather%2F) | ![screenshot](documentation/validation/nu-html-checker-warnings.png) | Modal not allowed as child of body error |
| Main Page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fboderg.github.io%2Fyour-weather%2F) | ![screenshot](documentation/validation/nu-html-checker-no-errors.png) | Fixed by adding an h3 heading and changing modal to div - no errors or warnings to show |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| :---: | :---: | :---: | :---: |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fboderg.github.io%2Fyour-weather%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/validation/w3c-css-validator-results.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| :---: | :---: | :---: |
| main.js | ![screenshot](documentation/validation/jshint-validation-warnings.png) | Missing semicolons |
| main.js | ![screenshot](documentation/validation/jshint-validation-pass.png) | Pass: No Errors |

## Browser Compatibility

I have tested Your Weather on the following browsers to check for compatibility issues.

| Browser | Main | About | Displayed °C | Displayed °F | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [Chrome](https://www.google.com/chrome) | ![screenshot](documentation/browsers/chrome/chrome-main.png) | ![screenshot](documentation/browsers/chrome/chrome-modal.png) | ![screenshot](documentation/browsers/chrome/chrome-displayed-c.png) | ![screenshot](documentation/browsers/chrome/chrome-displayed-f.png) | Works as expected |
| [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-main.png) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-modal.png) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-displayed-c.png) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-displayed-f.png) | Works as expected |
| [Edge](https://www.microsoft.com/edge)| ![screenshot](documentation/browsers/edge/edge-main.png) | ![screenshot](documentation/browsers/edge/edge-modal.png) | ![screenshot](documentation/browsers/edge/edge-displayed-c.png) | ![screenshot](documentation/browsers/edge/edge-displayed-f.png) | Works as expected |
| [Safari](https://support.apple.com/downloads/safari) | ![screenshot](documentation/browsers/safari/safari-main.png) | ![screenshot](documentation/browsers/safari/safari-modal.png) | ![screenshot](documentation/browsers/safari/safari-displayed-c.png) | ![screenshot](documentation/browsers/safari/safari-displayed-f.png) | Works as expected |
| [Brave](https://brave.com/download) | ![screenshot](documentation/browsers/brave/brave-main.png) | ![screenshot](documentation/browsers/brave/brave-modal.png) | ![screenshot](documentation/browsers/brave/brave-displayed-c.png) | ![screenshot](documentation/browsers/brave/brave-displayed-f.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Main | About | Displayed °C | Displayed °F | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile-home.png) | ![screenshot](documentation/responsive-mobile-about.png) | ![screenshot](documentation/responsive-mobile-contact.png) | ![screenshot](documentation/responsive-mobile-etc.png) | Chrome dev tools were used and the site works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet-home.png) | ![screenshot](documentation/responsive-tablet-about.png) | ![screenshot](documentation/responsive-tablet-contact.png) | ![screenshot](documentation/responsive-tablet-etc.png) | Firefox dev tools were used and the site works as expected |
| 20" Desktop 1080p | ![screenshot](documentation/responsiveness/20-inch-desktop/safari-main.png) | ![screenshot](documentation/responsiveness/20-inch-desktop/safari-modal.png) | ![screenshot](documentation/responsiveness/20-inch-desktop/safari-displayed-c.png) | ![screenshot](documentation/responsiveness/20-inch-desktop/safari-displayed-f.png) | Safari was used and the site works as expected |
| 27" Desktop 1080p | ![screenshot](documentation/responsiveness/27-inch-desltop/edge-main.png) | ![screenshot](documentation/responsiveness/27-inch-desltop/edge-modal.png) | ![screenshot](documentation/responsiveness/27-inch-desltop/edge-displayed-c.png) | ![screenshot](documentation/responsiveness/27-inch-desltop/edge-displayed-f.png) | Edge was used and the site works as expected |
| 32" XL Monitor 1440p Ultrawide | ![screenshot](documentation/responsive-xl-home.png) | ![screenshot](documentation/responsive-xl-about.png) | ![screenshot](documentation/responsive-xl-contact.png) | ![screenshot](documentation/responsive-xl-etc.png) | Brave was used and the site works as expected |
| Samsung Galaxy S10 Plus | ![screenshot](documentation/responsiveness/galaxy-s10/chrome-main.jpg) | ![screenshot](documentation/responsiveness/galaxy-s10/firefox-dev-modal.jpg) | ![screenshot](documentation/responsiveness/galaxy-s10/edge-c.jpg) | ![screenshot](documentation/responsiveness/galaxy-s10/brave-forecast-f.jpg) | Chrome, Firefox (Developer Edition), Edge and Brave browsers were used and all work as expected |

## Lighthouse Audit

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Use this space to discuss testing the live/deployed site's Lighthouse Audit reports.
Avoid testing the local version (especially if developing in Gitpod), as this can have knock-on effects of performance.

If you don't have Lighthouse in your Developer Tools,
it can be added as an [extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk).

Don't just test the home page (unless it's a single-page application).
Make sure to test the Lighthouse Audit results for all of your pages.

**IMPORTANT**: You must provide screenshots of the results, to "prove" that you've actually tested them.

Sample Lighthouse testing documentation:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-home-mobile.png) | ![screenshot](documentation/lighthouse-home-desktop.png) | Some minor warnings |
| About | ![screenshot](documentation/lighthouse-about-mobile.png) | ![screenshot](documentation/lighthouse-about-desktop.png) | Some minor warnings |
| Gallery | ![screenshot](documentation/lighthouse-gallery-mobile.png) | ![screenshot](documentation/lighthouse-gallery-desktop.png) | Slow response time due to large images |
| x | x | x | repeat for any other tested pages/sizes |

## Defensive Programming

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Defensive programming (defensive design) is extremely important!

When building projects that accept user inputs or forms, you should always test the level of security for each.
Examples of this could include (not limited to):

Forms:
- Users cannot submit an empty form
- Users must enter valid email addresses

PP3 (Python-only):
- Users must enter a valid letter/word/string when prompted
- Users must choose from a specific list only

MS3 (Flask) | MS4/PP4/PP5 (Django):
- Users cannot brute-force a URL to navigate to a restricted page
- Users cannot perform CRUD functionality while logged-out
- User-A should not be able to manipulate data belonging to User-B, or vice versa
- Non-Authenticated users should not be able to access pages that require authentication
- Standard users should not be able to access pages intended for superusers

You'll want to test all functionality on your application, whether it's a standard form,
or uses CRUD functionality for data manipulation on a database.
Make sure to include the `required` attribute on any form-fields that should be mandatory.
Try to access various pages on your site as different user types (User-A, User-B, guest user, admin, superuser).

You should include any manual tests performed, and the expected results/outcome.

Testing should be replicable.
Ideally, tests cases should focus on each individual section of every page on the website.
Each test case should be specific, objective, and step-wise replicable.

Instead of adding a general overview saying that everything works fine,
consider documenting tests on each element of the page
(ie. button clicks, input box validation, navigation links, etc.) by testing them in their happy flow,
and also the bad/exception flow, mentioning the expected and observed results,
and drawing a parallel between them where applicable.

Consider using the following format for manual test cases:

Expected Outcome / Test Performed / Result Received / Fixes Implemented

- **Expected**: "Feature is expected to do X when the user does Y."
- **Testing**: "Tested the feature by doing Y."
- (either) **Result**: "The feature behaved as expected, and it did Y."
- (or) **Result**: "The feature did not respond to A, B, or C."
- **Fix**: "I did Z to the code because something was missing."

Use the table below as a basic start, and expand on it using the logic above.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature01.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature02.png) |
| About | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature03.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature04.png) |
| Gallery | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature05.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature06.png) |
| Contact | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature07.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature08.png) |
| repeat for all remaining pages | x | x | x | x | x |

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Another way of performing defensive testing is a simple Pass/Fail for each test.
The assessors prefer the above method, with the full test explained, but this is also acceptable in most cases.

When in doubt, use the above method instead, and delete the table below.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| Gallery | | | | |
| | Click on Gallery link in navbar | Redirection to Gallery page | Pass | |
| | Load gallery images | All images load as expected | Pass | |
| Contact | | | | |
| | Click on Contact link in navbar | Redirection to Contact page | Pass | |
| | Enter first/last name | Field will accept freeform text | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter message in textarea | Field will accept freeform text | Pass | |
| | Click the Submit button | Redirects user to form-dump | Pass | User must click 'Back' button to return |
| Sign Up | | | | |
| | Click on Sign Up button | Redirection to Sign Up page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password (twice) | Field will only accept password format | Pass | |
| | Click on Sign Up button | Asks user to confirm email page | Pass | Email sent to user |
| | Confirm email | Redirects user to blank Sign In page | Pass | |
| Log In | | | | |
| | Click on the Login link | Redirection to Login page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password | Field will only accept password format | Pass | |
| | Click Login button | Redirects user to home page | Pass | |
| Log Out | | | | |
| | Click Logout button | Redirects user to logout page | Pass | Confirms logout first |
| | Click Confirm Logout button | Redirects user to home page | Pass | |
| Profile | | | | |
| | Click on Profile button | User will be redirected to the Profile page | Pass | |
| | Click on the Edit button | User will be redirected to the edit profile page | Pass | |
| | Click on the My Orders link | User will be redirected to the My Orders page | Pass | |
| | Brute forcing the URL to get to another user's profile | User should be given an error | Pass | Redirects user back to own profile |
| repeat for all remaining pages | x | x | x | x |

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Repeat for all other tests, as applicable to your own site.
The aforementioned tests are just an example of a few different project scenarios.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

## User Story Testing

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature09.png) |
| repeat for all remaining user stories | x |

## Bugs

The following are bugs that I have come across while creating the Your Weather site.

- Timezone displayed instead of city - The data being displayed was pulled from the timezone and not the city name.

| Original image | Bug fixed image |
| :---: | :---: |
| ![screenshot](documentation/bugs/miami-new-york-timezone.png) | ![screenshot](documentation/bugs/miami-city.png) |
| ![screenshot](documentation/bugs/hendon-london-timezone.png) | ![screenshot](documentation/bugs/hendon-town.png)

- To fix this I removed the const variable that was calling that data from the api enabling the HTML to use the place name from the input field instead.

***

- Initial Sunrise and Sunset times displayed as GMT timezone.

| Original image | Bug fixed image |
| :---: | :---: |
| ![screenshot](documentation/bugs/sunrise-set-gmt-date.png) | ![screenshot](documentation/bugs/sunrise-set-timezone-offset.png)

- To fix this I added a timezone offset and formatted to 24hrs to display as the timezone of the city requested.

***

- Mixed content - This error prevented the deployed site from loading the weather data from the api.
- To fix this error I found he fix on MDN web docs and I edited all links that displayed as http:// to https://.

***

- Uncaught in promise error (network error) - This error was preventing the deployed site from fetching any data from the api but only while using Firefox, it was fine on other browsers.
- To fix this error I tried adding a catch to the geolocation api fetch but this broke the site. After a little research it turned out that by turning off the ad blocker extension I had on firefox the api was then able to fetch the data.

***

- Favicon would not display on GitHub pages deployed site, but would show locally.
- To fix this, I first tried changing the image, then changing the image name, but these did not fix the issue and after a little research I checked the link to where the image was located and found that I needed to put a '.' at the start of the link.

## Unfixed Bugs

There are no remaining bugs that I am aware of.
