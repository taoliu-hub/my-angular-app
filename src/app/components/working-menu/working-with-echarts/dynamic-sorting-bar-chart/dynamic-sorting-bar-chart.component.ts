import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dynamic-sorting-bar-chart',
  templateUrl: './dynamic-sorting-bar-chart.component.html',
  styleUrls: ['./dynamic-sorting-bar-chart.component.css']
})
export class DynamicSortingBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts() {
    type EChartsOption = echarts.EChartsOption;
    var chartDom = document.getElementById('dynamic-sorting-bar-chart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    const data: number[] = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }

    option = {
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        axisLabel: {color: 'green'},
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X SALE',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: 'red'
          }
        }
      ],
      legend: {
        show: true
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    function run() {
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      myChart.setOption<echarts.EChartsOption>({
        series: [
          {
            type: 'bar',
            data,
            color: '#1976d2'
          }
        ]
      });
    }
    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);
    option && myChart.setOption(option);
  }

}
