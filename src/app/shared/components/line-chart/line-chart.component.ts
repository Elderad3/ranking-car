import { Component, Input, OnChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnChanges {

  @Input() data: any
  @Input() titulo: any
  public myChart: Chart | undefined

  constructor() { }

  ngOnChanges(): void {
    if(this.myChart){
      this.myChart.destroy()
    }
    this.myChart = new Chart("lineChart", {
      type: 'line',
      data: {
          labels: this.data.map((item: { label: any; }) => item.label),
          datasets: [{
            label: this.titulo,
            data: this.data.map((item: { valor: any; }) => item.valor),
            backgroundColor: '#3c8dbc',
      }]
      },
      options: {
          maintainAspectRatio: false,
          responsive: true, 
          plugins: {
            legend: {display: false}
          },
          scales: {
            x: {
              grid:{
               display:false
                   }
             },
              y: {
                  //beginAtZero: true,
                  grid:{
                    display:true
                        },
              },
          }
      }
  });
  }

}
