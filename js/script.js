/*-------------------------------------------------------------------------------------------------------------*/
/*-----------CHART 2------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Joueur?", "pourcentage"],
    ["Joueur", 82.9],
    ["Non Joueur", 17.1],
  ]);

  var options = {
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

  var chart = new google.visualization.PieChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
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
    title: "Pourcentage d’utilisateur jouant aux jeux vidéos en France",
    titleTextStyle: {},
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
/*-----------CHART 2------------------*/
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
