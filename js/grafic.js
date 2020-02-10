/* Morris.Area({
    element: 'myfirstchart',
    behaveLikeLine: true,
    data: [
      {x: '2011 Q1', y: 3, z: 3},
      {x: '2011 Q2', y: 2, z: 1},
      {x: '2011 Q3', y: 2, z: 4},
      {x: '2011 Q4', y: 3, z: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    resize:true
  }); */

  // Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'myfirstchart',
    data: [
      {x: '2010 Q4', y: 3, z: 7},
      {x: '2011 Q1', y: 3, z: 4},
      {x: '2011 Q2', y: null, z: 1},
      {x: '2011 Q3', y: 2, z: 5},
      {x: '2011 Q4', y: 8, z: 2},
      {x: '2012 Q1', y: 4, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    resize:true
  }).on('click', function(i, row){
    console.log(i, row);
  });