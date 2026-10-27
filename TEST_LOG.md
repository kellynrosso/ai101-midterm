# Test Log — Growing Thoughts

**Required test environment:** The published GitHub Pages URL, tested in a private/incognito browser window and on a phone.  
**Live URL:** [ADD THE REAL GITHUB PAGES URL]  
**Tester/date/device/browser:** [COMPLETE AFTER TESTING]

Use fictional test writing. The results below are intentionally marked **Not run** until the test is actually performed on the live GitHub Pages site. Record what you saw, whether it passed, and a date/device for each one.

| Test | Steps | Expected | Actual result | Pass/fail |
| --- | --- | --- | --- | --- |
| Normal input | Create a local profile; choose a topic; enter a made-up reflection and a small next step; press **Plant this thought**. | The entry saves, the plant grows by one stage (up to seven), and the success screen appears. | Not yet observed on GitHub Pages. | Not run |
| Empty/invalid input | Leave reflection and next-step fields empty, then press **Plant this thought**. | A helpful error appears and no reflection or reward is added. | Not yet observed on GitHub Pages. | Not run |
| Repeated use | Submit two different fictional reflections for the same plant, then tap it in **My plant shelves**. | Both dated entries appear; progress increases until stage seven, and later entries can still be saved. | Not yet observed on GitHub Pages. | Not run |
| Keyboard access | Using Tab, Shift+Tab, Enter and Space, navigate the profile, choose a prompt, fill the fields, submit, and open a plant. | Controls can be reached and operated by keyboard with visible focus. | Not yet observed on GitHub Pages. | Not run |
| Narrow screen | Open the live link on an iPhone or Android phone; try writing, tapping **Plant this thought**, and opening the plant shelves. | Text and buttons are usable and the layout fits without unintended horizontal scrolling; the plant and prompt are visible in the mobile layout. | Not yet observed on GitHub Pages. | Not run |

## One fix and retest

**Development issue found:** During an October 23 local DOM simulation, changing a plant to a floor placement could leave the view on its old arrangement, so the test expected the floor spot but found a shelf spot instead.  
**Fix:** Updated the handler to find the plant's new arrangement and show it after the placement changes.  
**Local retest:** The DOM simulation passed when rerun during development and passed again on October 27. See `evidence/local-checks.txt`. This is not a live GitHub Pages or phone test.  
**Required live retest:** [NOT RUN — after publishing, change a plant's display position and record what happened on the live site.]
