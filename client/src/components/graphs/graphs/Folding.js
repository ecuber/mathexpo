import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Graph2D from '../components/Graph2D'

const logic = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-0.1, 1.1, 1.1, -0.1]);

svmhandle = <<color: 'midnightblue', withLabel: false>>;

PP1 = point(0.05, 0.95) svmhandle;
QQ1 = point(0.95, 0.95) svmhandle;
separatingline = line(PP1, QQ1) svmhandle; 

handle = <<color: 'gray', withLabel: false>>;

PP = point(0.05, 0.05) handle;
QQ = point(0.95, 0.05) handle;
reflectionline = line(PP, QQ) handle; 

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
invisible = <<visible: false>>;

orientation = function(A, B, C) {
  if ((C.X()-A.X())*(B.Y()-A.Y())-(B.X()-A.X())*(C.Y()-A.Y()) > 0) {
    return 1;
  } else {
    return -1;
  }
};

highside = function(RR) {
  return orientation(PP, QQ, RR) == -1;
};

AA = point(0.6, 0.6) pts, c1;
AA.visible = function() {return highside(AA);};
BB = point(0.45, 0.5) pts, c1;
BB.visible = function() {return highside(BB);};
CC = point(0.6, 0.45) pts, c1;
CC.visible = function() {return highside(CC);};
DD = point(0.4, 0.45) pts, c1;
DD.visible = function() {return highside(DD);};

EE = point(0.2, 0.7) pts, c2;
EE.visible = function() {return highside(EE);};
FF = point(0.7, 0.1) pts, c2;
FF.visible = function() {return highside(FF);};
GG = point(0.8, 0.9) pts, c2;
GG.visible = function() {return highside(GG);};
HH = point(0.1, 0.1) pts, c2;
HH.visible = function() {return highside(HH);};

AAr = reflection(AA, reflectionline) pts, c1;
AAr.visible = function() {return !highside(AA);};
BBr = reflection(BB, reflectionline) pts, c1;
BBr.visible = function() {return !highside(BB);};
CCr = reflection(CC, reflectionline) pts, c1;
CCr.visible = function() {return !highside(CC);};
DDr = reflection(DD, reflectionline) pts, c1;
DDr.visible = function() {return !highside(DD);};

EEr = reflection(EE, reflectionline) pts, c2;
EEr.visible = function() {return !highside(EE);};
FFr = reflection(FF, reflectionline) pts, c2;
FFr.visible = function() {return !highside(FF);};
GGr = reflection(GG, reflectionline) pts, c2;
GGr.visible = function() {return !highside(GG);};
HHr = reflection(HH, reflectionline) pts, c2;
HHr.visible = function() {return !highside(HH);};
`

const solution = `
// To make a mathlet without coding:
//   - visit https://start.sketchometry.org
//   - save to JessieCode and paste here
// JessieCode Reference: https://jsxgraph.uni-bayreuth.de/wp/docs_jessiecode/

// setting left, top, right, and bottom limits:
$board.setView([-0.1, 1.1, 1.1, -0.1]);

svmhandle = <<color: 'midnightblue', withLabel: false>>;

PP1 = point(0.1, 0.42) svmhandle;
QQ1 = point(0.86, 0.8) svmhandle;
separatingline = line(PP1, QQ1) svmhandle; 

handle = <<color: 'gray', withLabel: false>>;

PP = point(0.32, 0.30) handle;
QQ = point(0.85, 0.48) handle;
reflectionline = line(PP, QQ) handle; 

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
invisible = <<visible: false>>;

orientation = function(A, B, C) {
  if ((C.X()-A.X())*(B.Y()-A.Y())-(B.X()-A.X())*(C.Y()-A.Y()) > 0) {
    return 1;
  } else {
    return -1;
  }
};

highside = function(RR) {
  return orientation(PP, QQ, RR) == -1;
};

AA = point(0.6, 0.6) pts, c1;
AA.visible = function() {return highside(AA);};
BB = point(0.45, 0.5) pts, c1;
BB.visible = function() {return highside(BB);};
CC = point(0.6, 0.45) pts, c1;
CC.visible = function() {return highside(CC);};
DD = point(0.4, 0.45) pts, c1;
DD.visible = function() {return highside(DD);};

EE = point(0.2, 0.7) pts, c2;
EE.visible = function() {return highside(EE);};
FF = point(0.7, 0.1) pts, c2;
FF.visible = function() {return highside(FF);};
GG = point(0.8, 0.9) pts, c2;
GG.visible = function() {return highside(GG);};
HH = point(0.1, 0.1) pts, c2;
HH.visible = function() {return highside(HH);};

AAr = reflection(AA, reflectionline) pts, c1;
AAr.visible = function() {return !highside(AA);};
BBr = reflection(BB, reflectionline) pts, c1;
BBr.visible = function() {return !highside(BB);};
CCr = reflection(CC, reflectionline) pts, c1;
CCr.visible = function() {return !highside(CC);};
DDr = reflection(DD, reflectionline) pts, c1;
DDr.visible = function() {return !highside(DD);};

EEr = reflection(EE, reflectionline) pts, c2;
EEr.visible = function() {return !highside(EE);};
FFr = reflection(FF, reflectionline) pts, c2;
FFr.visible = function() {return !highside(FF);};
GGr = reflection(GG, reflectionline) pts, c2;
GGr.visible = function() {return !highside(GG);};
HHr = reflection(HH, reflectionline) pts, c2;
HHr.visible = function() {return !highside(HH);};
`

const Folding = props => {
  const [rerenders, setRerenders] = useState(0)
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.solution])

  return <Graph2D key={rerenders} logic={props.solution ? solution : logic} aspectRatio={1}/>
}

Folding.propTypes = {
  solution: PropTypes.bool
}

export default Folding
