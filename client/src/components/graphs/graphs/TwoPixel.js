import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Graph2D from '../components/Graph2D'

const initial = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-1, 1.2, 1.2, -0.2]);

point(0, 0) <<id: 'origin', visible: false>>;
point(1, 0) <<id: 'east', visible: false>>;
point(0, 1) <<id: 'north', visible: false>>;
axis(origin, east) <<id: 'xaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorX: 'middle', offset: [0, -14]>>>>>>;
axis(origin, north) <<id: 'yaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorY: 'middle', offset: [14, 0]>>>>>>;

PP = point(0.72, 0.1) <<color: '#DDD',
                       withLabel: false,
                       strokeWidth: 2,
                       strokeOpacity: 0.5>>;
                                   
curve([0, 1, 1, 0, 0], [0, 0, 1, 1, 0]) <<highlightStrokeColor: '#777', strokeColor: '#777', strokeWidth: 3>>;

colorFunc = function(t) {
  colorvalue = round(16777216 * t);
  bb = (colorvalue % 65536)/256;
  return 'hsl(' + 
            string(round(360*t)) + 
            ', 100%, ' + 
            string(50+0*round(100*bb/255)) + 
            '%)';
};

hh = 0.01; 
ww = 0.33;
leftedge = -0.9;
bottomedge = 0.35;

text(leftedge + ww/2, bottomedge, 'pixel 1') <<anchorX: 'middle', anchorY: 'top', offset: [0, -15]>>;
text(leftedge + 3*ww/2, bottomedge, 'pixel 2') <<anchorX: 'middle', anchorY: 'top', offset: [0, -15]>>;

polygon([leftedge, bottomedge], [leftedge +ww, bottomedge], 
        [leftedge +ww, bottomedge +ww], [leftedge, bottomedge +ww]) 
        <<borders: <<strokeColor: '#777', highlightStrokeColor: '#777'>>,
          vertices: <<visible: false>>,
          color: function() {return colorFunc(PP.X());},
          highlightFillColor: function() {return colorFunc(PP.X());}>>;

                                             
polygon([leftedge+hh+ww, bottomedge], [leftedge +hh+2*ww, bottomedge], 
        [leftedge+hh+2*ww, bottomedge +ww], [leftedge +hh+ww, bottomedge +ww])
        <<borders: <<strokeColor: '#777', highlightStrokeColor: '#777'>>,
          vertices: <<visible: false>>,
          color: function() {return colorFunc(PP.Y());}, 
          highlightFillColor: function() {return colorFunc(PP.Y());}>>;
`

const diagonal = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-1, 1.2, 1.2, -0.2]);

// axes
point(0, 0) <<id: 'origin', visible: false>>;
point(1, 0) <<id: 'east', visible: false>>;
point(0, 1) <<id: 'north', visible: false>>;
axis(origin, east) <<id: 'xaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorX: 'middle', offset: [0, -14]>>>>>>;
axis(origin, north) <<id: 'yaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorY: 'middle', offset: [14, 0]>>>>>>;
                                 

diag = segment([0,0], [1,1]) <<color: '#DDD'>>;

PP = point(0.6, 0.6) <<color: '#DDD',
                       withLabel: false,
                       strokeWidth: 2,
                       strokeOpacity: 0.5>>;
                       
PP.glide(diag);   

curve([0, 1, 1, 0, 0], [0, 0, 1, 1, 0]) <<highlightStrokeColor: '#777', strokeColor: '#777', strokeWidth: 3, layer: 7>>;

colorFunc = function(t) {
  colorvalue = round(16777216 * t);
  bb = (colorvalue % 65536)/256;
  return 'hsl(' + 
            string(round(360*t)) + 
            ', 100%, ' + 
            string(50+0*round(100*bb/255)) + 
            '%)';
};

hh = 0.01; 
ww = 0.33;
leftedge = -0.9;
bottomedge = 0.35;

text(leftedge + ww/2, bottomedge, 'pixel 1') <<anchorX: 'middle', anchorY: 'top', offset: [0, -15]>>;
text(leftedge + 3*ww/2, bottomedge, 'pixel 2') <<anchorX: 'middle', anchorY: 'top', offset: [0, -15]>>;

polygon([leftedge, bottomedge], [leftedge +ww, bottomedge], 
        [leftedge +ww, bottomedge +ww], [leftedge, bottomedge +ww]) 
        <<borders: <<strokeColor: '#777', highlightStrokeColor: '#777'>>,
          vertices: <<visible: false>>,
          color: function() {return colorFunc(PP.X());},
          highlightFillColor: function() {return colorFunc(PP.X());}>>;

                                             
polygon([leftedge+hh+ww, bottomedge], [leftedge +hh+2*ww, bottomedge], 
        [leftedge+hh+2*ww, bottomedge +ww], [leftedge +hh+ww, bottomedge +ww])
        <<borders: <<strokeColor: '#777', highlightStrokeColor: '#777'>>,
          vertices: <<visible: false>>,
          color: function() {return colorFunc(PP.Y());}, 
          highlightFillColor: function() {return colorFunc(PP.Y());}>>;
`

const TwoPixel = props => {
  const [rerenders, setRerenders] = useState(0)
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.diagonal])

  return <Graph2D jessieCode key={rerenders} logic={props.diagonal ? diagonal : initial} aspectRatio={0.636}/>
}

TwoPixel.propTypes = {
  diagonal: PropTypes.bool
}

export default TwoPixel
