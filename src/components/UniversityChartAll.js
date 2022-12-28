import React from "react";
import { ReactDOM } from "react";
import ReactApexChart from "react-apexcharts";
 
class ApexChartUnpayed extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          series: [{
            data: [10, 22]
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors:   ['#008FFB', '#FF4560'],
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['PAYED', ''],
                ['UNPAYED', 'Smith'] 
              ],
              labels: {
                style: {
                  colors:  ['#008FFB', '#FF4560'],
                  fontSize: '12px'
                }
              }
            }
          },
        
        
        };
      }

    

      render() {
        return (
          

<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

  

        );
      }

}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);


export default ApexChartUnpayed;