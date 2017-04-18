
var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();

$.get("./data.json", function(data){
    myChart.hideLoading();

    myChart.setOption(option = {
     title: {
         text: '4yp prject'
     },
     tooltip: {
         trigger: 'item',
         triggerOn: 'mousemove'
     },
     series: [
         {
             type: 'sankey',
             layout: 'none',
             data: data.nodes,
             links: data.links,
             itemStyle: {
                 normal: {
                     borderWidth: 1,
                     borderColor: '#aaa'
                 }
             },
             lineStyle: {
                 normal: {
                     color: 'source',
                     curveness: 0.5
                 }
             }
         }
     ]
 });
});
