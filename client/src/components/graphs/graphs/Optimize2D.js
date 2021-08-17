import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Graph2D from '../components/Graph2D'

const initial = `
$board.setView([-0.5, 6, 8.5, -0.5]);

point(0, 0) <<id: 'origin', visible: false>>;
point(1, 0) <<id: 'east', visible: false>>;
point(0, 1) <<id: 'north', visible: false>>;
axis(origin, east) <<id: 'xaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorX: 'middle', offset: [0, -14]>>>>>>;
axis(origin, north) <<id: 'yaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorY: 'middle', offset: [14, 0]>>>>>>;

b = point(0, 2) <<withLabel: false, name: 'b', fillColor: 'white',strokeColor: 'black', strokeWidth: 0.5, label: <<offset: [-10, 10], anchorX: 'middle'>>>>;
b.glide(yaxis);

slope_control = point(8, 5) <<withLabel: false, name: 'slope adjuster', fillColor: 'white', strokeColor: 'black', strokeWidth: 0.5, label: <<offset: [0, 20], anchorX: 'middle'>>>>;
right_guide = line([8, 0], [8, 1]) <<visible: false>>;
slope_control.glide(right_guide);

m = point(function() {return (slope_control.Y() - b.Y())/8;}, 0) <<visible: false>>;

plot(function(x) {return m.X()*x + b.Y();}, -0.5, 8.5) <<color: 'teal'>>;

point(1, 4) <<id: 0, name: '', color: 'teal'>>;
point(2, 5) <<id: 1, name: '', color: 'teal'>>;
point(2.5, 3.5) <<id: 2, name: '', color: 'teal'>>;
point(5, 3.5) <<id: 3, name: '', color: 'teal'>>;
point(7, 4) <<id: 4, name: '', color: 'teal'>>;

square = function(corner, side, attr){
  return polygon(function() {return [corner()[0], corner()[1]];},
                  function() {return [corner()[0]+side(), corner()[1]];},
                  function() {return [corner()[0]+side(), corner()[1]+side()];},
                  function() {return [corner()[0], corner()[1]+side()];}) attr;
};

square(function() {return [$(0).X(), m.X()*$(0).X() + b.Y()];}, 
              function() {return $(0).Y() - m.X()*$(0).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(1).X(), m.X()*$(1).X() + b.Y()];}, 
              function() {return $(1).Y() - m.X()*$(1).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(2).X(), m.X()*$(2).X() + b.Y()];}, 
              function() {return $(2).Y() - m.X()*$(2).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(3).X(), m.X()*$(3).X() + b.Y()];}, 
              function() {return $(3).Y() - m.X()*$(3).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(4).X(), m.X()*$(4).X() + b.Y()];}, 
              function() {return $(4).Y() - m.X()*$(4).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);

segment(function() {return $(0);}, 
        function() {return [$(0).X(), m.X()*$(0).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(1);}, 
        function() {return [$(1).X(), m.X()*$(1).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(2);}, 
        function() {return [$(2).X(), m.X()*$(2).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(3);}, 
        function() {return [$(3).X(), m.X()*$(3).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(4);}, 
        function() {return [$(4).X(), m.X()*$(4).X() + b.Y()];}) <<color: 'red'>>;               
        
lossval = point(
function() {
  loss = 0;
  ii = 0;
  while (ii < 5) {
    loss = loss + ($(ii).Y() - m.X()*$(ii).X() - b.Y())^2;
    ii = ii + 1;
  }
  return loss;}, 0) <<visible: false>>;

text(5, 1.8, function() {return 'orange area = ' + round(1000*lossval.X())/1000;
}) <<fontSize: 20, cssStyle: "font-family: Palatino;">>;

segment([5, 1.5], function() {return [5 + lossval.X()/5, 1.5];}) <<strokeColor: 'orange', strokeWidth: 8>>;
`

const solution = `
$board.setView([-0.5, 6, 8.5, -0.5]);

point(0, 0) <<id: 'origin', visible: false>>;
point(1, 0) <<id: 'east', visible: false>>;
point(0, 1) <<id: 'north', visible: false>>;
axis(origin, east) <<id: 'xaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorX: 'middle', offset: [0, -14]>>>>>>;
axis(origin, north) <<id: 'yaxis', ticks: <<minorHeight: 5, majorHeight: 12, drawZero: false, label: <<anchorY: 'middle', offset: [14, 0]>>>>>>;

b = point(0, 4.23) <<withLabel: false, name: 'b', fillColor: 'white', strokeColor: 'black', strokeWidth: 0.5, label: <<offset: [-10, 10], anchorX: 'middle'>>>>;
b.glide(yaxis);

slope_control = point(8, 3.69) <<withLabel: false, name: 'slope adjuster', fillColor: 'white',strokeColor: 'black', strokeWidth: 0.5, label: <<offset: [0, 20], anchorX: 'middle'>>>>;
right_guide = line([8, 0], [8, 1]) <<visible: false>>;
slope_control.glide(right_guide);

m = point(function() {return (slope_control.Y() - b.Y())/8;}, 0) <<visible: false>>;

plot(function(x) {return m.X()*x + b.Y();}, -0.5, 8.5) <<color: 'teal'>>;

point(1, 4) <<id: 0, name: '', color: 'teal'>>;
point(2, 5) <<id: 1, name: '', color: 'teal'>>;
point(2.5, 3.5) <<id: 2, name: '', color: 'teal'>>;
point(5, 3.5) <<id: 3, name: '', color: 'teal'>>;
point(7, 4) <<id: 4, name: '', color: 'teal'>>;

square = function(corner, side, attr){
  return polygon(function() {return [corner()[0], corner()[1]];},
                 function() {return [corner()[0]+side(), corner()[1]];},
                 function() {return [corner()[0]+side(), corner()[1]+side()];},
                 function() {return [corner()[0], corner()[1]+side()];}) attr;
};

square(function() {return [$(0).X(), m.X()*$(0).X() + b.Y()];}, 
              function() {return $(0).Y() - m.X()*$(0).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(1).X(), m.X()*$(1).X() + b.Y()];}, 
              function() {return $(1).Y() - m.X()*$(1).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(2).X(), m.X()*$(2).X() + b.Y()];}, 
              function() {return $(2).Y() - m.X()*$(2).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(3).X(), m.X()*$(3).X() + b.Y()];}, 
              function() {return $(3).Y() - m.X()*$(3).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);
square(function() {return [$(4).X(), m.X()*$(4).X() + b.Y()];}, 
              function() {return $(4).Y() - m.X()*$(4).X() - b.Y();}, 
              <<fillColor: 'orange', borders: <<visible: false>>, vertices: <<visible: false>>>>);

segment(function() {return $(0);}, 
        function() {return [$(0).X(), m.X()*$(0).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(1);}, 
        function() {return [$(1).X(), m.X()*$(1).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(2);}, 
        function() {return [$(2).X(), m.X()*$(2).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(3);}, 
        function() {return [$(3).X(), m.X()*$(3).X() + b.Y()];}) <<color: 'red'>>;
segment(function() {return $(4);}, 
        function() {return [$(4).X(), m.X()*$(4).X() + b.Y()];}) <<color: 'red'>>;               
        
lossval = point(
function() {
  loss = 0;
  ii = 0;
  while (ii < 5) {
    loss = loss + ($(ii).Y() - m.X()*$(ii).X() - b.Y())^2;
    ii = ii + 1;
  }
  return loss;}, 0) <<visible: false>>;

text(5, 1.8, function() {return 'orange area = ' + round(1000*lossval.X())/1000;
}) <<fontSize: 20, cssStyle: "font-family: Palatino;">>;

segment([5, 1.5], function() {return [5 + lossval.X()/5, 1.5];}) <<strokeColor: 'orange', strokeWidth: 8>>;
`

const Optimize2D = props => {
  // Not sure why this is necessary but the JSXGraph wouldn't
  // rerender if I didn't force it to with the key prop
  const [rerenders, setRerenders] = useState(0)
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.solution])

  return <Graph2D key={rerenders} logic={props.solution ? solution : initial} aspectRatio={0.722}/>
}

Optimize2D.propTypes = {
  solution: PropTypes.bool
}

export default Optimize2D
