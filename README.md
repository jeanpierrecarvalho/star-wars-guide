# Star Wars Guide Challenge

**Demo** : [Live Demo](https://star-wars-guide.vercel.app/)

## Overview

This project is a Star Wars character guide built using **Next.js** and **React** . It features data fetched from the Star Wars API (SWAPI), with a strong focus on UI/UX and performance optimizations.

### API:

- **SWAPI Documentation** : [Official SWAPI Documentation](https://swapi.dev/documentation)

## Functional Requirements

- Display a **paginated list** of Star Wars characters.
- Implement a **search feature** to find characters by name using the SWAPI search parameter.
- Ensure **error handling** for failed API requests.
- Prioritize an **intuitive and responsive UI/UX** experience.

## Non-Functional Requirements

- Utilize **modern JavaScript frameworks** , specifically **React** and **Next.js** .
- Provide the solution via a **Git repository** link.

## Time Investment

- Initially planned: **2 hours 30 minutes** .
- Final effort: Additional time was allocated for improving features and polish for portfolio inclusion.
  - **Start Time** : 10:40 AM, 16th September 2024.

## Tooling Priority

- Linters and other tooling (e.g., formatters) will be implemented if time permits.
- The project is intended to be part of my **portfolio** .

## Platform Focus

- Targeted testing environment: **Google Chrome** on **Desktop** .
- Optimization for **Safari** and **Firefox** is deferred for future iterations.

## Code Quality

To ensure code consistency and catch potential issues, the following tools are utilized:

- **ESLint** : Enforces coding standards.
- **Prettier** : Automatically formats code.
- **Knip** : Detects unused code and files.
- **Lint-staged** : Runs linters on staged files.
- **Husky** : Automates Git hooks (e.g., pre-commit checks).

## Next Steps

### Code Enhancements

- TBD (based on further feedback and requirements).

### UX Improvements

- Improve **accessibility** .
- Optimize for **mobile devices** .
- Extend support for **Firefox** and **Safari** browsers.

## Getting Started

To run the project:

- **Development** : `yarn run dev`
- **Production build** : `yarn run build`

## Solution Walkthrough

### Completed Tasks

- [X] Set up **Next.js** project using:
  - `npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/_" --use-yarn`.
- [X] Added **Starry Background** with a twinkling effect (Chrome only).
- [X] Built **Header** and **Footer** components:
  - **Header** includes the Star Wars logo.
  - **Footer** displays the dynamic year and copyright.
- [X] Wrote **unit tests** for Header and Footer using **Vitest** .
  - Installed testing dependencies: yarn add -D vite vitest @vitejs/plugin-react vite-tsconfig-paths @testing-library/react jsdom @testing-library/dom
  - Snapshot tests for Header and Footer.
- [X] Created **API Service** for fetching Star Wars data.
  - Implemented `fetchEntity()` for API calls.
  - Added unit tests for both successful and failed API responses.
- [X] Integrated **Star Wars Fonts** for theming.
- [X] Built dynamic **Page Title** and **Table** components for rendering Star Wars data.
- [X] Designed a **Menu Grid** for the home page.
- [X] Implemented **Pagination** with previous/next navigation.
- [X] Added **Search Box** functionality:
  - Installed `@material-tailwind/react` for UI components.
  - Search input connected to SWAPI search endpoint.
- [X] Handled **Loading** and **Error** states for API requests.
- [X] Sourced images for the homepage.
- [X] Generated the **first production build** and resolved any issues.
- [X] Configured project tooling:
  - Integrated **Knip** , **Husky** , and **lint-staged** for code quality checks.
  - Set up **Prettier** for consistent formatting.
- [X] Performed **performance optimizations** :
  - Debounced API calls to minimize redundant requests.
  - Modularized components and used memoization to enhance rendering efficiency.
- [X] Implemented **snapshot tests** for all components.
- [X] Used **Context API** for global state management.
