/*-------------------------------------------------------------------------------------------------------------*/
/*-----------CHART 1------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
  var data3 = google.visualization.arrayToDataTable([
    ["Joueur?", "pourcentage"],
    ["Joueur", 82.9],
    ["Non Joueur", 17.1],
  ]);

  var options3 = {
    legend: {
      position: "bottom",
      textStyle: { color: "#000000", fontSize: 16 },
    },
    pieStartAngle: 90,
    pieSliceBorderColor: "none",
    pieSliceTextStyle: { color: "red" },

    slices: {
      0: { color: "#F8517F" },
      1: { color: "FDBDC4" },
    },
  };

  var chart3 = new google.visualization.PieChart(
    document.getElementById("myChart")
  );
  chart3.draw(data3, options3);
}


/*-------------------------------------------------------------------------------------------------------------*/
/*-----------CHART 2------------------*/
/*-------------------------------------------------------------------------------------------------------------*/


google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data1 = google.visualization.arrayToDataTable([
    ["Joueur?", "pourcentage"],
    ["Joueur", 80.8],
    ["Non Joueur", 19.2],
  ]);

  var options1 = {
    legend: {
      position: "bottom",
      textStyle: { color: "#000000", fontSize: 16 },
    },
    pieStartAngle: 90,
    pieSliceBorderColor: "none",
    pieSliceTextStyle: { color: "red" },
    chartArea: { width: "150%", height: "75%" },
    slices: {
      0: { color: "#F8517F" },
      1: { color: "FDBDC4" },
    },
  };

  var chart1 = new google.visualization.PieChart(
    document.getElementById("myChart1")
  );
  chart1.draw(data1, options1);
}




/*-------------------------------------------------------------------------------------------------------------*/
/*-----------CHART 3------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data2 = google.visualization.arrayToDataTable([
    ["Joueur?", "pourcentage"],
    ["Joueur", 66.4],
    ["Non Joueur", 33.6],
  ]);

  var options2 = {
    legend: {
      position: "bottom",
      textStyle: { color: "#000000", fontSize: 16 },
    },
    pieStartAngle: 90,
    pieSliceBorderColor: "none",
    pieSliceTextStyle: { color: "red" },

    slices: {
      0: { color: "#F8517F" },
      1: { color: "FDBDC4" },
    },
  };

  var chart2 = new google.visualization.PieChart(
    document.getElementById("myChart2")
  );
  chart2.draw(data2, options2);
}



/*-------------------------------------------------------------------------------------------------------------*/
/*-----------Bar 1------------------*/
/*-------------------------------------------------------------------------------------------------------------*/


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age', '13 - 18', '19 - 24', '25 - 31','32 - 37','38 - 44','45 - 61'],
    ['Tranches d`ages', 417.1 , 825.5, 1798.2, 1248.6, 1663.2, 396.7],
  ]);


  var options = {
    colors:['#FDBDC4','#FA87A1','#F51B5C','#860028','#BB0038','#FED2FF'],
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
  console.log(data);
}
