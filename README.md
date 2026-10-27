# Growing Thoughts 🌿

**Student:** Kellyn Rosso  
**Audience:** Students who want a gentle, manageable way to start journaling and reflect on their feelings.  
**Purpose:** Help users put a thought into words, identify one small next step, and see a virtual plant grow as they continue reflecting.

**GitHub Pages link:** [ADD YOUR LIVE GITHUB PAGES URL AFTER PUBLISHING]  
**Repository link:** [ADD YOUR PUBLIC GITHUB REPOSITORY URL AFTER CREATING IT]  
**Current prototype:** https://thought-greenhouse.exactseed7.chatgpt.site

The current prototype is a separate hosted version; it does not fulfill the assignment's GitHub Pages publishing requirement.

## How to use it

1. Open the published page in a modern browser. On a new browser, choose **Create profile**, make a password, and optionally enter a nickname. On that same browser later, choose **Log in**.
2. In **Reflect & grow**, select a topic, review or shuffle the prompt, optionally check in with a feeling, write a reflection and a small next step, then choose **Plant this thought**.
3. The active plant gains a growth stage and the entry is saved with its date on that browser. Users can optionally record how they feel afterward or download a reflection.
4. Open **My plant shelves** and tap a plant to revisit entries, name it, set its purpose, or move it to a highlighted spot. **My home map** opens the three room previews, and **My growth timeline** shows dated moments.

## Two main features

- **Interactive guided reflection:** choose a topic and prompt, write an entry, and press a button to grow the active plant and earn Leaf Coins.
- **Plant collection and customization:** select plants and pots, explore illustrated rooms, and tap plants to see dated reflection history or move them to another spot.

Additional features include optional mood check-ins, names and purposes, a growth timeline, room decoration, a local Leaf Coin shop, and an installable web-app shell. Plus rooms are free previews; no actual subscription or payments are implemented.

## Run locally

The repository is plain HTML, CSS, and JavaScript: `index.html` and its assets are at the repository root. Open `index.html` through a local web server or a secure hosted URL; no build step or API key is required. Profile creation relies on Web Crypto, so use HTTPS or localhost rather than an insecure remote connection.

## Sources and credits

- User-directed concept, layout ideas, and feedback: Kellyn Rosso. Code, original SVG illustrations, styling, and documentation were developed with ChatGPT/Codex assistance; see [AI_USE.md](AI_USE.md).
- Botanical shape and bloom references: [Royal Horticultural Society: Hoya](https://www.rhs.org.uk/plants/hoya/how-to-grow), [RHS: Echeveria](https://www.rhs.org.uk/plants/echeveria), [RHS: orchids](https://www.rhs.org.uk/plants/phalaenopsis), and [National Park Service: saguaro](https://www.nps.gov/orpi/learn/nature/saguaro-cactus.htm). Further references are in [BOTANICAL-ART-NOTES.md](BOTANICAL-ART-NOTES.md).
- Room arrangement was inspired by reference images supplied by the student. App illustrations were drawn as original SVG/CSS. The seven-entry flowering milestone is symbolic, not a plant-care timetable.

## Known limitations

- The profile is a **local convenience lock**, not a server account or encrypted journal protection. There is no email/password recovery or cross-device sync.
- Journal entries, plants, room preferences, and Leaf Coins are stored in the current browser or installed-app storage. Clearing it can delete them. Installation and a different browser may use separate storage.
- It is a reflection prototype, not therapy. Prompts are predefined; the running app does not use a live AI API.
- Mobile and keyboard behavior on the required live GitHub Pages site still need to be tested and recorded in [TEST_LOG.md](TEST_LOG.md). Plus is a free concept preview, with no paid subscription.

## Assignment evidence

See [AI_USE.md](AI_USE.md), [EVIDENCE.md](EVIDENCE.md), and [TEST_LOG.md](TEST_LOG.md). These contain clearly marked items that still need real screenshots, live test results, links, and student review.
