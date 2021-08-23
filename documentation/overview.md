# About the Project

The [original project]([https://github.com/ecuber/mathexpo](https://github.com/ecuber/mathexpo)) that applied the concepts of this framework was created with `create-react-app` and bundles a clean default UI setup (using [chakra-ui]([https://chakra-ui.com/](https://chakra-ui.com/)) components) to minimize the friction when creating a math blog post.

## Features

- JSXGraph component built-in for making interactive 2D graphs
    - Supports both JessieCode and Javascript [graph logic](#using-jsxgraph)
- `math3d-component` for easy drop-in 3D graph creation
    - (Fairly) intuitive drag-and-drop UI
    - Flexible scene-saving mechanism
- `plotly.js` for more granular control over 3D graphs
- `chakra-ui` for themeable, accessible, and design system agnostic UI components
    - Also uses `@emotion/styled` for styling components with specific use-cases

### Using JSXGraph

The JSXGraph component provides flexible options for "coding" your graphs. Their API is [thoroughly documented here]([https://jsxgraph.org/](https://jsxgraph.org/)).

To create graphs, you have a couple options. The first is to use their proprietary language called JessieCode, which has documentation [here]([https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/](https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/)). The second, far more robust option, is to code your graphs directly in javascript.

#### JessieCode

This is a regular JessieCode example with static logic (that is, the code for the logic will stay the same).

```jsx
// src/app.js
import React from 'react'
import { Graph2D } from './components/graphs'

const jessieLogic = `
// setting left, top, right, and bottom limits:
$board.setView([-0.1, 1.2, 1.2, -0.1]);

// axes
point(0, 0) <<id: 'origin', visible: false>>;
point(1, 0) <<id: 'east', visible: false>>;
point(0, 1) <<id: 'north', visible: false>>;
axis(origin, east) <<id: 'xaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorX: 'middle', offset: [0, -14]>>>>>>;
axis(origin, north) <<id: 'yaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorY: 'middle', offset: [14, 0]>>>>>>;
                            
pts = <<color: '#DDD',
        withLabel: false,
        strokeWidth: 2,
        strokeOpacity: 0.5,
        fixed: true>>;

c1 = <<color: 'teal'>>;
c2 = <<color: 'tomato'>>;

point(0.6, 0.6) pts, c1;
point(0.45, 0.5) pts, c1;
point(0.6, 0.45) pts, c1;
point(0.4, 0.45) pts, c1;

point(0.2, 0.7) pts, c2;
point(0.7, 0.1) pts, c2;
point(0.8, 0.9) pts, c2;
point(0.1, 0.1) pts, c2;
`

// have to pass jessieCode={true} like so to parse JessieCode
const App = props => <Graph2D jessieCode logic={logic} aspectRatio={1}/>

export default App
```

#### JavaScript

When defining a graph with JavaScript, you write a function that takes in the [board object]([https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html))

```jsx
// src/app.js
import React from 'react'
import { Graph2D } from './components/graphs'

// To see methods and properties available on the brd1 object, see its
// type definition here: https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html
const logic = brd1 => {
	// function code from https://www.npmjs.com/package/@sswatson/jsxgraph-react-js
	brd.suspendUpdate();
  var a = brd.create('slider', [[2, 8], [6, 8], [0, 3, 6]], { name: 'a' });
  var b = brd.create('slider', [[2, 7], [6, 7], [0, 2, 6]], { name: 'b' });
  var A = brd.create('slider', [[2, 6], [6, 6], [0, 3, 6]], { name: 'A' });
  var B = brd.create('slider', [[2, 5], [6, 5], [0, 3, 6]], { name: 'B' });
  var delta = brd.create('slider', [[2, 4], [6, 4], [0, 0, Math.PI]], { name: '&delta;' });

  brd.create('curve', [
    function (t) { return A.Value() * Math.sin(a.Value() * t + delta.Value()); },
    function (t) { return B.Value() * Math.sin(b.Value() * t); },
    0, 2 * Math.PI], { strokeColor: '#aa2233', strokeWidth: 3 });
  brd.unsuspendUpdate();
}

// Omit jessieCode prop to default to JavaScript logic
const App = props => <Graph2D logic={logic} aspectRatio={1}/>

export default App
```

#### Dynamically-Set Logic

There are some scenarios in which you will need to update the logic of a graph dynamically (e.g. the reader clicks a button that reveals the solution to a question posed in the text). To accomplish this, we can use a slick React trick to force a re-render even though the JSXGraph won't register the change in the props. 

```jsx
// src/app.js
import React from 'react'
import PropTypes from 'prop-types'
import { Graph2D } from './components/graphs'

const initialLogic = `
...jessiecode logic goes here...
`

const solutionLogic = `
...solution logic goes here...
`

// If props.solution is true, then we render solutionLogic.
// Otherwise, render intialLogic.

const App = props => {
	const [rerenders, setRerenders] = useState(0)
	// Side-effect hook runs every rerender when props.solution changes.
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.solution])
	
	<Graph2D
		key={rerenders}
		jessieCode
		logic={props.solution ? solutionLogic : initialLogic}
		aspectRatio={1}
	/>
}

App.propTypes = {
	solution: PropTypes.bool
}

export default App
```