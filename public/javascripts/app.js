//Reference for Google-Chart:   https://developers.google.com/chart/interactive/docs/gallery/bubblechart
var app = angular.module('splashchart', []);
google.load("visualization", "1", {packages:["corechart"]});

// app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
//   $http.get('/').success(function(data){
    
//   var dataArray = formatDataForView(data);
//   var table = google.visualization.arrayToDataTable(dataArray, false);
  
//   var options = {
//      title: 'SplashBrothers vs Top 10 Three Point Shooters',
//      hAxis: {title: 'Threes Made'},
//      vAxis: {title: 'Threes Attempted'},
//      bubble: {textStyle: {fontSize: 11}}
//       //colors: ['#1b9e77', '#d95f02', '#7570b3', '#db9500']
//      };
//     var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
//     chart.draw(data, options);

//   });
// }]);

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
    var dataArray = formatDataForView(data);
  
    var table = google.visualization.arrayToDataTable(dataArray, false);
    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
    
    var options = {
     title: 'SplashBrothers vs Top 10 Three Point Shooters',
     hAxis: {title: 'Threes Made'},
     vAxis: {title: 'Threes Attempted'},
     bubble: {textStyle: {fontSize: 11}
     }
    };
    
    chart.draw(table, options);
  });
}]);



function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //get the keys
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
            if(prop == "id") {
             dataEntry.push(value[prop]);   
            } else {
             dataEntry.push(parseFloat(value[prop])); 
            }
          }
        
        dataArray.push(dataEntry);
    });
  
    //console.table(dataArray);
    return dataArray;
}