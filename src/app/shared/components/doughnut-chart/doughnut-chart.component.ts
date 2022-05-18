import { Component, Input, OnChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {CHART_COLLORS} from 'src/app/shared/services/util.service'
Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnChanges {

  @Input() data: any
  @Input() titulo: any
  public myChart: Chart | undefined

  constructor() { }

  ngOnChanges(): void {
    if(this.myChart){
      this.myChart.destroy()
    }
    this.myChart = new Chart("doughnutChart", {
      type: 'doughnut',
      data: {
          labels: this.data.map((item: { label: string; }) => item.label),
          datasets: [{
            label: this.titulo,
            data: this.data.map((item: { valor: number; }) => item.valor),
            backgroundColor: CHART_COLLORS.map(item => item),
      }]
      },
      options: {
          maintainAspectRatio: false,
          responsive: true, 
          plugins: {
            legend: {display: true, position: 'top'}
          },
          scales: {
            x: {
              display: false,
              grid:{
               display:false
                   }
             },
            y: {
                  display: false,
                  grid:{
                    display:false
                        },
              },
          }
      }
  });
  }

}
