var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function() {

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/').success(function(data){
    
  var dataArray = formatDataForView(data);
  
  dataArray.splice(1,1);

  var table = google.visualization.arrayToDataTable(dataArray, false);
  
   var options = {
      title: 'Ball Stuff',
      hAxis: {title: 'Threes Made'},
      vAxis: {title: 'Threes Attempted'},
      bubble: {textStyle: {fontSize: 11}}
      //colors: ['#1b9e77', '#d95f02', '#7570b3', '#db9500']
      };
  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
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
          dataEntry.push(parseInt(value[prop], 0));
          }
        
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}