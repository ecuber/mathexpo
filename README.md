[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9ee03cfe-e34f-4508-acef-dab05f549055/deploy-status)](https://app.netlify.com/sites/some2021/deploys)

# Beautiful Data Science
This repository contains my submission for Grant Sanderson's Summer of Math Exposition, 2021. The website hosts an article that introduces the mathematical basis for machine learning and neural networks through interactive math graphics called "mathlets".

The site is hosted at http://beautifuldatascience.com.

## Technologies Used
* [create-react-app](https://create-react-app.dev/)
* [Chakra UI](https://chakra-ui.com/)
* [styled-components](https://styled-components.com/)
* [JSXGraph](https://github.com/sswatson/jsxgraph-react-js)
* [Plotly](https://plotly.com/javascript/react/)
* [math3d-component](https://github.com/ecuber/math3d-component/tree/master/client)
  * This component was developed for this project. It is a componentization of the fantastic [math3d.org](https://www.math3d.org/) graphing calculator. Check out [the repository](https://github.com/ecuber/math3d-component/tree/master/client) to see documentation on how you can use it in your own project!

## Repository Anatomy
* <b>`/client/`</b> - contains the create-react-app setup; client side code that renders the website.
* <b>`/dev-server/`</b> - contains the Node.js web server that runs in parallel with the CRA dev server while creating new Math3D graphs. This allows the Math3D scenes to be saved to a JSON file, forgoing the need for a database.

## Hey, this is neat. I want to make one!
If you'd like to make a math blog like this one, you can clone the repository and look at the [GUIDE.md](https://github.com/ecuber/mathexpo/blob/master/docs/GUIDE.md) for more information on the components and getting started.

## License
This project is distrubuted under the [MIT License](https://choosealicense.com/licenses/mit/).
