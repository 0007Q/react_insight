import React from 'react'
import ReactApexChart from 'react-apexcharts'

class ApexChartSync extends React.Component {
    constructor(props) {
      super(props);

    function generateDayWiseTimeSeries(baseval, count, yrange) {
          var i = 0;
          var series = [];
          while (i < count) {
            var x = baseval;
            var y =
              Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
              yrange.min;
    
            series.push([x, y]);
            baseval += 86400000;
            i++;
          }
          return series;
        }

      this.state = {
      
        series: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        options: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
            height: 160
          },
          colors: ['#008FFB'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          }
        },
      
        seriesLine2: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
          })
        }],
        optionsLine2: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
            height: 160
          },
          colors: ['#546E7A'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          }
        },
      
        seriesArea: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        optionsArea: {
          chart: {
            id: 'yt',
            group: 'social',
            type: 'area',
            height: 160
          },
          colors: ['#00E396'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="wrapper">
<div id="chart-line">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={160} />
</div>
<div id="chart-line2">
<ReactApexChart options={this.state.optionsLine2} series={this.state.seriesLine2} type="area" height={360} />
</div>
<div id="chart-area">
<ReactApexChart options={this.state.optionsArea} series={this.state.seriesArea} type="bar" height={160} />
</div>
</div>


      );
    }
  }

  export default ApexChartSync;