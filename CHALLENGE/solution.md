# Solution

## Todo List

-   [x] Installed next.js
-   _Installed packages: npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/_" --use-yarn

-   [x] Added background with stars and twinkling

**Note:** I will implement the animation only on Chrome. Firefox and Safari will be ignored for this challenge.

-   [x] Created Header and Footer components

*   Created Header component
    -   Added star wars logo
*   Created Footer component
    -   Dynamic year using Date
    -   Add Star Wars rights
    -   Add personal rights

-   [x] Implemented vitest for unit tests and add test for Header and Footer

*   Installed packages: yarn add -D vite vitest @vitejs/plugin-react vite-tsconfig-paths @testing-library/react jsdom @testing-library/dom
*   Added new script to package.json (test and test:upd-snapshots)
*   Added Header Snapshot Test
*   Added Footer Snapshot Test

-   [x] Created a service to get information from API

*   Implemented fetchEntity
*   Created mock response file
*   Added types file
*   Added unit tests for resolving and rejecting

-   [x] Added star wars fonts
-   [x] Created Page Title Component
-   [x] Created dynamic page for rendering the tables
-   [x] Created a table component
-   [x] Created a dynamic page to get type as param
-   [x] Table accepts type of entity to call the star wars api
-   [x] Get the right information for each entity
-   [x] Created menu grid component to be added in the home page
-   [x] Created pagination

*   Created new pagination component
*   Added state for page and total pages
*   Added two buttons for previous and next page

-   [x] Created search box

*   Installed packages: @material-tailwind/react
*   Added new input for searching
*   Added state searchTerm

-   [x] Created loading state and error state
-   [x] Search and implement some images to be added to homepage
-   [ ] If I have time:

    -   [ ] Add knip
    -   [ ] Add husky with commit-message hook and pre-commit hook
    -   [ ] Add lint-staged
    -   [ ] Add prettier
