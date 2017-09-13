## Project overview

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and then ejected in order to enable CSS modules. Sass was added to allow the use of cross stylesheet variables for site-wide styling. [Basscss](http://basscss.com/) was used for basic layout utils (e.g. a responsive grid).

Timezone handling is implemented with the `moment-timezone` package. Timezones are identified by their strings according to the [timezone list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) which is what is used by the `moment` library.

The project uses Redux for app state management.

## Prerequisites

Run npm install to get all the dependencies in place.

## Supported commands

`npm start` - starts a dev server and sass watch
`npm run build` - creates a dist version of the project
`npm test` - runs all the tests
`npm test -- --coverage` - to see test coverage
