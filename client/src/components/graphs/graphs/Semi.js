import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Graph2D from '../components/Graph2D'

const logic = `
stat = import('Math/Statistics');

$board.setView([-3, 2, 1.5, -0.5]);

d = 2.5;

curve(function (t) {return 0.5*cos(t) - d;}, 
      function (t) {return 0.5 +0.5*sin(t);}, 
      -PI/2, PI/2) <<strokeColor: 'gray', strokeWidth: 1>>;
      
curve([-d, -d + 1, -d + 1, -d, -d], [0, 0, 1, 1, 0]) <<strokeColor: 'gray', strokeWidth: 1>>;

lefthandle = point(0.5, -0.25) <<id: 'lefthandle', color: 'tomato', withLabel: false>>;
righthandle = point(0.5, 1.25) <<id: 'righthandle', color: 'tomato', visible: false>>;
line(lefthandle, righthandle) <<strokeColor: 'gray', strokeWidth: 1>>;

segment([-d-0.5, 0], [-d+1.5, 0]) <<lastArrow: <<type: 1, size: 3>>, color: 'gray'>>; 
segment([-d, -0.5], [-d, 1.5]) <<lastArrow: <<type: 1, size: 3>>, color: 'gray'>>;      

// #6495ED = cornflower blue
segment([-d, 0], [-d, 1.0]) <<color: '#6495ED', lastArrow: <<type: 1, size: 3>>, strokeWidth: 4, fixed: true>>;
segment([-d, 0], [-d+1, 0]) <<color: 'green', lastArrow: <<type: 1, size: 3>>, strokeWidth: 4, fixed: true>>;

segment([-0.5, 0], [1.5, 0]) <<lastArrow: <<type: 1, size: 3>>, color: 'gray', fixed: true>>;
segment([0, -0.5], [0, 1.5]) <<lastArrow: <<type: 1, size: 3>>, color: 'gray', fixed: true>>;

mu = point(0, 0) <<id: 'mu', name: '$\\mathbf{b}$', color: 'black', withLabel: false>>;

headx = point(1, 0) <<id: 'headx', color: 'green', withLabel: false>>;
heady = point(0, 1) <<id: 'heady', color: '#6495ED', withLabel: false>>;

// button(-1, -1, 'reset', function() {
//   moveresult = $('headx').moveTo([1, 0]);
//   moveresult = $('heady').moveTo([0, 1]);
//   moveresult = $('mu').moveTo([0, 0]);
//   moveresult = $('lefthandle').moveTo([0.5, -0.25]);
//   moveresult = $('righthandle').moveTo([0.5, 1.25]);
// });

firstcol = point(function() {return headx.X() - mu.X();},
      function() {return headx.Y() - mu.Y();}) <<visible: false>>;
      
secondcol = point(function() {return heady.X() - mu.X();},
      function() {return  heady.Y() - mu.Y();}) <<visible: false>>;

segment(mu, headx) <<color: 'green', lastArrow: <<type: 1, size: 3>>, strokeWidth: 4>>;
segment(mu, heady) <<color: '#6495ED', lastArrow: <<type: 1, size: 3>>, strokeWidth: 4>>;

polygon(mu, headx, heady) <<hasInnerPoints: true, fillOpacity: 0, borders: <<strokeWidth: 0>>>>;
  
xs = [0.377, 0.458, 0.101, 0.2, 0.053, 0.105, 0.288, 0.387, 0.123, 0.17, 0.326, 0.48, 0.202, 0.352, 0.618, 0.385, 0.801, 0.817, 0.576, 0.463, 0.2, 0.598, 0.801, 0.856, 0.891, 0.547, 0.697, 0.256, 0.624, 0.656, 0.958, 0.505, 0.41, 0.983];
ys = [0.388, 0.646, 0.594, 0.076, 0.387, 0.101, 0.472, 0.208, 0.957, 0.8, 0.848, 0.501, 0.339, 0.68, 0.674, 0.947, 0.469, 0.045, 0.991, 0.714, 0.98, 0.476, 0.965, 0.758, 0.251, 0.235, 0.331, 0.029, 0.043, 0.849, 0.607, 0.39, 0.139, 0.98];

nn = 34;
gg = 14;

drawpreimage = function(i, attr) {
  if (i < gg) {
    attr.color = 'gold';
  } else {
    attr.color = 'purple';
  };
  return point(xs[i] - d, ys[i]) attr;
};


for(i = 0; i < nn; i = i + 1) {
  pt = drawpreimage(i, <<id: 'observation' + i, size: 2, withLabel: false, strokeOpacity: 0>>);
};


drawimage = function(ii, attr) {
  if (ii < gg) {
    attr.color = 'gold';
  } else {
    attr.color = 'purple';
  };
  pt = point(function() {
     obs = 'observation' + ii;
    return mu.X() + firstcol.X() * ($(obs).X() + d) + secondcol.X() * $(obs).Y();
  }, function() {
    obs = 'observation' + ii;
    return mu.Y() + firstcol.Y() * ($(obs).X() + d) + secondcol.Y() * $(obs).Y();
  }) attr;
  pt.id = 'image' + ii;
  pt.size = 1;
  pt.withLabel = false;
};

for(ii = 0; ii < nn; ii = ii + 1) {
  drawimage(ii, <<id: 'image' + ii, fillOpacity: 0.4, strokeOpacity: 0>>);
}

relu = function(x) {
  if (x > 0) {
    return x;
  } else {
    return 0;
  }
};

numCorrect = point(0, 0) <<id: 'numCorrect', visible: false>>;

drawsecondimage = function(ii, attr) {
  if (ii < gg) {
    attr.color = 'gold';
  } else {
    attr.color = 'purple';
  };
  pt = point(function() {
    return relu($('image' + ii).X());
  }, function() {
    return relu($('image' + ii).Y());
  }) attr;
  pt.withLabel = true;
};

sizefunction = function(ii) {
  return function() {
      xx = relu($('image' + ii).X());
      yy = relu($('image' + ii).Y());
      aa = xx - $('righthandle').X();
      bb = yy - $('righthandle').Y();
      cc = $('lefthandle').X() - $('righthandle').X();
      dd = $('lefthandle').Y() - $('righthandle').Y();
      if (ii < gg) {
        ss = -1;
      } else {
        ss = 1;
      };
      if (aa * dd - bb * cc > 0) {
        $('observation' + ii).color = 'gold'; 
      } else {
        $('observation' + ii).color = 'purple'; 
      };
      if (ss*(aa * dd - bb * cc) > 0) {
        return 3;
      } else {
        return 1;
      };
    };
};

for(ii = 0; ii < nn; ii = ii + 1) {
  drawsecondimage(ii, <<id: 'finalimage' + ii, strokeOpacity: 0>>);
};

for(ii = 0; ii < nn; ii = ii + 1) {
  $('finalimage' + ii).size = sizefunction(ii);
};
`

const Semi = props => {
  const [rerenders, setRerenders] = useState(0)
  useEffect(() => {
    setRerenders(rerenders + 1)
  }, [props.rerender])

  return <Graph2D key={rerenders} logic={logic} aspectRatio={0.55}/>
}

Semi.propTypes = {
  rerender: PropTypes.bool
}

export default Semi
