import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Graph2D from '../components/Graph2D'

const initial = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-0.2, 1.2, 1.2, -0.2]);

handle = <<color: 'midnightblue', withLabel: false>>;

k = 0.5;

center = point(0.4, 0.3) handle;
slabvechead = point(0.5, 0.4) handle;
slabvec = arrow(center, slabvechead) handle;
samesidepoint = point(function() {
  return center.X() + k*(slabvechead.X() - center.X());
}, function() {
  return center.Y() + k*(slabvechead.Y() - center.Y());
}) <<visible: false>>;
oppositepoint = point(function() {
  return center.X() - k*(slabvechead.X() - center.X());
}, function() {
  return center.Y() - k*(slabvechead.Y() - center.Y());
}) <<visible: false>>;
perpendicular(slabvec, samesidepoint);
perpendicular(slabvec, oppositepoint);


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
point(0.4, 0.7) pts, c1;
point(0.9, 0.5) pts, c1;
point(0.5, 0.8) pts, c1;

point(0.2, 0.7) pts, c2;
point(0.9, 0.1) pts, c2;
point(0.3, 0.2) pts, c2;
point(0.7, 0.3) pts, c2;
                     

curve([0, 1, 1, 0, 0], [0, 0, 1, 1, 0]) <<highlightStrokeColor: '#777', strokeColor: '#777', strokeWidth: 3, layer: 7>>;
`

const solution = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-0.2, 1.2, 1.2, -0.2]);

handle = <<color: 'midnightblue', withLabel: false>>;

k = 0.5;

center = point(0.615, 0.445) handle;
slabvechead = point(0.6825, 0.53) handle;
slabvec = arrow(center, slabvechead) handle;
samesidepoint = point(function() {
  return center.X() + k*(slabvechead.X() - center.X());
}, function() {
  return center.Y() + k*(slabvechead.Y() - center.Y());
}) <<visible: false>>;
oppositepoint = point(function() {
  return center.X() - k*(slabvechead.X() - center.X());
}, function() {
  return center.Y() - k*(slabvechead.Y() - center.Y());
}) <<visible: false>>;
perpendicular(slabvec, samesidepoint);
perpendicular(slabvec, oppositepoint);


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
point(0.4, 0.7) pts, c1;
point(0.9, 0.5) pts, c1;
point(0.5, 0.8) pts, c1;

point(0.2, 0.7) pts, c2;
point(0.9, 0.1) pts, c2;
point(0.3, 0.2) pts, c2;
point(0.7, 0.3) pts, c2;
                     

curve([0, 1, 1, 0, 0], [0, 0, 1, 1, 0]) <<highlightStrokeColor: '#777', strokeColor: '#777', strokeWidth: 3, layer: 7>>;

`

const Slab = props => {
  const [rerenders, setRerenders] = useState(0)
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.solution])

  return <Graph2D jessieCode key={rerenders} logic={props.solution ? solution : initial} aspectRatio={1}/>
}

Slab.propTypes = {
  solution: PropTypes.bool
}

export default Slab
