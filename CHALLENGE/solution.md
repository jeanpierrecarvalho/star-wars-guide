## Todo List

* [X] Install next.js

*npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-yarn

* [X] Added background with stars and twinkling

**Note:** I will implement the animation only on Chrome. Firefox and Safari will be ignored for this challenge.

* [X] Created Header and Footer components

- Created Header component
  - Added star wars logo
- Created Footer component
  - Dynamic year using Date
  - Add Star Wars rights
  - Add personal rights

* [ ] Implement vitest for unit tests and add test for Header and Footer

- Installed packages: yarn add -D vite vitest @vitejs/plugin-react vite-tsconfig-paths @testing-library/react jsdom @testing-library/dom
- Added new script to package.json (test and test:upd-snapshots)
- Added Header Snapshot Test
- Added Footer Snapshot Test

* [ ] Create a service to get information from API
* [ ] Use star wars fonts for titles e.g
* [ ] Create menu grid component to be added in the home page
* [ ] Create a characters page
* [ ] Create a table component
* [ ] If I have time:
  * [ ] Add knip
  * [ ] Add husky with commit-message hook and pre-commit hook
  * [ ] Add lint-staged
  * [ ] Add prettier
