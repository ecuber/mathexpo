import React from 'react'
import Graph2D from '../components/Graph2D'

const logic = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

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
const ScatterNN = props => <Graph2D jessieCode logic={logic} aspectRatio={1}/>

export default ScatterNN
