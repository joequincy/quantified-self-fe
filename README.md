## Quantified Self Front-end
Authored by: [Deonte Cooper](https://github.com/djc00p) and [Jon Peterson](https://github.com/joequincy)

A front-end for the [Quantified Self](https://github.com/joequincy/quantified-self-be) calorie tracker project. An existing repository with a pre-configured Webpack setup was provided, which utilizes out-of-date versions with security vulnerabilities. For the learning goals, scale, and timeframe of this project, those vulnerabilities are irrelevant and acceptable, however this repository should not be used as the base for any continued development.

This project is a Mod 4 paired assignment from the Turing School of Software and Design. [Assignment details are available](https://github.com/turingschool/backend-curriculum-site/blob/66a39813572f453700ab944948ecf698b0b75d42/module4/projects/quantified_self/qs_server_side.md) in the [@turingschool](https://github.com/turingschool) curriculum repository.

### Setup
- Clone down the [Quantified Self BE](https://github.com/joequincy/quantified-self-be) repo and follow its setup instructions, including starting the server.
- Clone down this repository
  - Run `npm install`
  - Run `npm start`
  - Visit `localhost:8080`

A demo version is also available on [GitHub Pages](https://joequincy.github.io/quantified-self-fe), however there is a timing issue with the API encountered in production. When adding a new Food, the API successfully creates the database entry but does not return the created food. This causes the page to need a reload before the food will appear. As this bug was discovered at the end of the project timeframe, it will not be fixed.
