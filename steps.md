# Car Sales Project Steps

-- _BEFORE_

> npm install packages, and then npm install Redux.
> npm start
> Create a new folder for reducers and create new JS file Reducer.js.
> Create the flow of the Redux project. - [flow](./flow.PNG)
> --

1. Move State from App.js to newly created Reducer.js
   -- Two actions ADD_FEATURE & REMOVE_FEATURE created.
2. Import Redux to index.js and create the store, and Provider around <App />
3. Import Redux into components.
4. Remove Props from components and connect to the Redux stored state. (state...)
   -- Added Feature & Additional Feature will still carry props from store.
5. Render App.js in browser.
6. Import and dispatch REMOVE_FEATURE to Added Feature component.
7. Import and dispatch ADD_FEATURE to Additional Feature component.
8. Make sure Total component is updating state.car.price and adding features updates the price properly.
9. Double-check all components and actions.
