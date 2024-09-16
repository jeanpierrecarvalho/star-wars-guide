# Solution

## Todo List

* [X] Installed next.js
* *Installed packages: npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-yarn

* [X] Added background with stars and twinkling

**Note:** I will implement the animation only on Chrome. Firefox and Safari will be ignored for this challenge.

* [X] Created Header and Footer components

- Created Header component
  - Added star wars logo
- Created Footer component
  - Dynamic year using Date
  - Add Star Wars rights
  - Add personal rights

* [X] Implemented vitest for unit tests and add test for Header and Footer

- Installed packages: yarn add -D vite vitest @vitejs/plugin-react vite-tsconfig-paths @testing-library/react jsdom @testing-library/dom
- Added new script to package.json (test and test:upd-snapshots)
- Added Header Snapshot Test
- Added Footer Snapshot Test

* [X] Created a service to get information from API

- Implemented fetchEntity
- Created mock response file
- Added types file
- Added unit tests for resolving and rejecting

* [X] Added star wars fonts
* [X] Created Page Title Component
* [X] Created dynamic page for rendering the tables
* [X] Created a table component
* [X] Created a dynamic page to get type as param
* [X] Table accepts type of entity to call the star wars api
* [X] Get the right information for each entity
* [X] Created menu grid component to be added in the home page
* [X] Created pagination

- Created new pagination component
- Added state for page and total pages
- Added two buttons for previous and next page

* [X] Created search box

- Installed packages: @material-tailwind/react
- Added new input for searching
- Added state searchTerm

* [ ] Created loading state and error state
* [ ] If I have time:

  * [ ] Add knip
  * [ ] Add husky with commit-message hook and pre-commit hook
  * [ ] Add lint-staged
  * [ ] Add prettier
