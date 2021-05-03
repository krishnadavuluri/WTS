//Required options of charts.
export const costChartOptions={
    chart: {
      type: 'bar',
      toolbar:{
          show:false
      },
      events:{
        dataPointSelection:(e,cc,config)=>{
            window.location.href="#/cost/"+config.w.config.xaxis.categories[config.dataPointIndex]
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '100px',
        colors: ['#fff']
      }
    },
    lenged:{
       fontSize:'32px'
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
};
export const itemChartOptions=[
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
];