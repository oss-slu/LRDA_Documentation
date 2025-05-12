# Mobile App Contributions – Amar Hadzic

This document outlines the mobile features, fixes, and improvements contributed by Amar Hadzic to the `lrda_mobile` project. Each section includes the purpose and scope of the change, along with relevant notes for maintainers and developers.

---

## Improved Error Messaging for Login/Register

**PR:** [#248](https://github.com/oss-slu/lrda_mobile/pull/248)  
**Description:** Added toast notifications for error messages during login and registration. Including network errors, email errors, and login credential errors.

- Improves user feedback when login/register fails.
- Utilized `react-native-toast-message`.

---

## Font Styling Update

**PR:** [#244](https://github.com/oss-slu/lrda_mobile/pull/244)  
**Description:** Updated the application’s default font styling.

- Applied a global `defaultTextFont` used across all pages
- Applied a new global font (Inter) across the app.
- Adjusted layout where necessary to support new font spacing/metrics.

---

## Keyboard Dismiss Button

**PR:** [#237](https://github.com/oss-slu/lrda_mobile/pull/237)  
**Description:** Added a "Done" button to input fields for better UX when dismissing the keyboard.

- Made a custom `<TouchableOpacity>` done button.
- Uses a `keyBoardVisible` state to track whether or not the keyboard is visible.
- A `handleDonePress` function handles and dismisses the keyboard.
- Makes form interactions smoother for users.

---

## Register Page Redesign

**PR:** [#235](https://github.com/oss-slu/lrda_mobile/pull/235)  
**Description:** Redesigned the UI for the register page.

- Redesigned and refactoed the `RegisterScreen.tsx`
- Refactored layout and styling for better clarity and responsiveness.
- Improved accessibility and spacing.

---

## Wrote Unit Tests for HomePage

**PR:** [#228](https://github.com/oss-slu/lrda_mobile/pull/228)  
**Description:** Added unit tests for the `HomePage` component to verify key UI elements and interactions.

- Ensured rendering of note list, header, and action buttons.
- Simulated user interactions and validated expected behavior.
- Improved overall test coverage of core user-facing screens.

**Notes:**
- Tests implemented using Jest and React Native Testing Library.
- Helped catch UI regressions and verify navigation logic.


---

## More Page Redesign Based on Figma

**PR:** [#206](https://github.com/oss-slu/lrda_mobile/pull/206)  
**Description:** Fully redesigned the “More” screen UI to match the updated Figma design provided by the product/design team.

- Implemented new layout structure and spacing.
- Updated button styles, icons, and text to reflect the Figma spec.
- Ensured responsiveness across devices and visual consistency with the rest of the app.

**Notes:**
- Changes involved modifying multiple components and stylesheets.
- Work verified with design team before merge.


---

## Fixed Inline Audio Playback

**PR:** [#201](https://github.com/oss-slu/lrda_mobile/pull/201)  
**Description:** Fixed the audio playback functionality so users can now listen to their recorded audio notes via clickable inline URLs.

- Audio files now display as links within the note editor.
- Clicking the link opens the audio in a browser window (e.g., Chrome), using the device’s native audio player.
- Resolved a bug where recorded audio wouldn’t appear at all in the editor after being added.

**Why it was changed:**
- Users previously could not listen to recorded audio.
- Audio elements did not render in the editor, causing confusion and a poor user experience.
- This fix ensures that audio content is visible and accessible immediately after recording.

---

## Toggled Search Bar Implementation

**PR:** [#194](https://github.com/oss-slu/lrda_mobile/pull/194)  
**Description:** Refactored the search bar in the header so it only appears when toggled via a search icon.

- Added `isSearchVisible` state using the `useState` hook.
- Introduced a `TouchableOpacity` icon that toggles the visibility of the search bar.
- When active, a search bar appears with an "X" icon to close it.
- When inactive, only the search icon is displayed.

**Why it was changed:**
- Previously, the search bar was always visible, cluttering the interface.
- This update makes the UI cleaner and improves user focus by hiding the search bar when it's not needed.

**How it was changed:**
- Introduced stateful control for search bar visibility.
- Implemented conditional rendering for the search input and icons.
- Ensured a smooth toggle experience without breaking header layout.

---

## Fixed Photo Alignment in Preview Section

**PR:** [#176](https://github.com/oss-slu/lrda_mobile/pull/176)  
**Description:** Resolved the layout issue where preview photos overlapped each other. Photos now align correctly with adequate spacing between them.

**Why it was changed:**
- The previous layout had overlapping images and no spacing, resulting in a cluttered and broken visual experience.
- Improving layout clarity enhances usability and presentation of media.

**How it was changed:**
- Updated `styles.mediaContainer`:
  - Applied `flexDirection: 'row'` and `flexWrap: 'wrap'` to allow wrapping layout.
  - Added margin and spacing adjustments between images.
- Ensured compatibility across screen sizes and orientations.

---

## Enabled Login Button Functionality While Keyboard Is Visible

**PR:** [#164](https://github.com/oss-slu/lrda_mobile/pull/164)  
**Description:** Modified the login screen to ensure that the "Login" button remains functional even when the on-screen keyboard is active.

**Why it was changed:**
- Previously, when the keyboard was open, tapping the "Login" button had no effect, leading to a poor user experience.
- This issue hindered users from logging in without manually dismissing the keyboard.

**How it was changed:**
- Set the `keyboardShouldPersistTaps` property to `'handled'` on the `ScrollView` component.
- This adjustment allows taps on the "Login" button to register even when the keyboard is displayed.

---

## Fixed Add/Publish Button State After Navigating Back

**PR:** [#257](https://github.com/oss-slu/lrda_mobile/pull/257)  
**Description:** Fixed a navigation-related bug where the "Publish" button would incorrectly appear on the Home screen after navigating back from the Edit Note screen. Now, the "Add" button correctly reappears.

**Why it was changed:**
- This bug prevented users from creating new notes after editing an existing one.
- It did not display the current add/publish button depedning on the state the user was in
- It led to confusion and blocked expected user flows, harming the overall experience.

**How it was changed:**
- Replaced a basic screen name check (`state.routes[state.index].name === "HomeTab"`) with a full `useNavigationState` inspection of the nested stack.
- Introduced an `isHomeScreen` flag to determine the correct button state.
- Updated the `AddNoteBtnComponent` logic to use this new flag and conditionally render the "Add" or "Publish" button.

---

**Notes:**
- All work tested and merged into main via pull requests.

