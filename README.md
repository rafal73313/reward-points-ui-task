# Customer Reward Points UI

- React
- Vite
- Jest
- ESlint
- Prettier
- Node (tested on v19.8.1)

**sample transactions dataset with reward points is contained inside `/public/data.json`**

> !! TO PREVIEW THE SOLUTION TO THE ASSIGNMENT TASK -> follow step `1.` on your local machine

## 1. how to run prod preview on your local machine

1. clone the repositiory
2. navigate to the project dir
3. install all dependencies:

   `npm install`

4. run prod preview on your local machine with:

   `npm run serve`

5. open your browser and navigate to:

   `http://localhost:4173/`

## 2a. how to run dev build locally

1. repeat steps: `1.`, `2.`, `3.` from previous section

2. run dev build on your local machine:

   `npm run dev`

3. open you browser and navigate to:

   `http://localhost:5173/`

## 2b. additonal dev tasks

1. run unit tests

`npm run test`

2. run unit tests with coverage

`npm run test:coverage`

3. linting

`npm run lint`

## 3. deploy to prod

1. build prod version

   `npm run build`

2. deploy the resulting `/dist` folder to prod and serve `dist/index.html`
