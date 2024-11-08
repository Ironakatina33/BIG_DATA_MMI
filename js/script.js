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
    chartArea: { width: "150%", height: "75%" },
    pieSliceTextStyle: { color: "black" },

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
    pieSliceTextStyle: { color: "black" },
    chartArea: { width: "200%", height: "75%" },
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
    chartArea: { width: "150%", height: "75%" },
    pieSliceTextStyle: { color: "black" },

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
    ['Tranche d\'âge', '13 - 18 ans', '19 - 24 ans', '25 - 31 ans ','32 - 37 ans','38 - 44 ans','45 - 61 ans'],
    [' ', 417.1 , 825.5, 1798.2, 1248.6, 1663.2, 396.7],
  ]);


  var options = {
    colors:['#FDBDC4','#FA87A1','#F51B5C','#860028','#BB0038','#FED2FF'],
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
  console.log(data);
}

/*-------------------------------------------------------------------------------------------------------------*/
/*-----------Bar 2------------------*/
/*-------------------------------------------------------------------------------------------------------------*/



google.charts.setOnLoadCallback(drawChart6);

function drawChart6() {
  var databar = google.visualization.arrayToDataTable([
    ['Questions', 'Oui', 'Non'],
    ['acheté un jeu.', 185, 13],
    ['payer dans un jeu Free To Play', 113, 85],
    ['payer dans un jeu Pay To Play', 65, 133],
  ]);

  var options = {
    chart6: {
     colors:['#FDBDC4','#F8517F'],
    },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart6 = new google.charts.Bar(document.getElementById('barchart_material'));

  chart6.draw(databar, google.charts.Bar.convertOptions(options));
}


/*-------------------------------------------------------------------------------------------------------------*/
/*-----------CHART 4------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

google.charts.setOnLoadCallback(drawChart7);
function drawChart7() {
  var data7 = google.visualization.arrayToDataTable([
    ["part de l'argent moyen dépensés par type de jeu", "pourcentage"],
    ["Free 2 Play", 87],
    ["Abonnement", 100],
    ["Achat Unique", 60],
  ]);

  var options7 = {
    legend: {
      position: "bottom",
      textStyle: { color: "#000000", fontSize: 16 },
    },
    pieStartAngle: 90,
    pieSliceBorderColor: "none",
    chartArea: { width: "150%", height: "75%" },
    pieSliceTextStyle: { color: "black" },

    slices: {
      0: { color: "#F8517F" },
      1: { color: "FDBDC4" },
      2: { color: "F51B5C"} ,
    },
  };

  var chart7 = new google.visualization.PieChart(
    document.getElementById("myChart7")
  );
  chart7.draw(data7, options7);
}