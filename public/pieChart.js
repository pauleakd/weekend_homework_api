var PieChart = function(title, series, container_id){
  var container = document.querySelector(container_id)

  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container
    },
    title: {
      text: title
    },
    series: series
  });
}
