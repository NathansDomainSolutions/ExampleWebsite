# Restaurant Website Demo

A live sales demo for restaurant websites. It's one page with five complete designs, each with real food photos. Swipe on a phone, or use the arrows or the ← → keys, to change the whole look.

| # | Style | Fictional restaurant |
|---|-------|----------------------|
| 1 | Pizzeria & Sports Bar | Vinnie's Pizza & Pub |
| 2 | Italian Trattoria | Trattoria Fiorella |
| 3 | Family Kitchen & Catering | Mama Rosa's Kitchen |
| 4 | Taquería | Taquería El Faro |
| 5 | Breakfast Café | Bluebird Café |

**Features shown:**
- A menu with category tabs, dietary filters and three layouts (List, Cards, Compact)
- A live "Open now" badge that updates from the hours
- Tap-to-call phone number
- A spot for a map
- Sample reviews
- A feedback form that shows how messages get emailed to the owner, including a preview of the email
- A photo gallery with a full-size viewer
- Mobile navigation
- A "Show notes" toggle for the 💡 sales notes

## Customize
- **Your contact info:** edit `window.SELLER` at the top of `js/themes.js`.
- **Restaurants and menus:** each restaurant's content lives in `js/themes.js`. Colors and fonts live in `css/styles.css` under `THEMES`.
- **Linking to a specific style:** add the theme id to the URL, for example `…/#taqueria` or `…/#cafe`.

## Hosting
The site is plain HTML, CSS and JS, so there's no build step. To publish it, go to Settings → Pages → Deploy from a branch and pick `main` / root. It will then be live at
`https://carriestelekinesis.github.io/ExampleWebsite/`.

The feedback form is only a demo and sends nothing. For a real client, connect it to Formspree, Netlify Forms, or a small serverless function that emails the owner.
