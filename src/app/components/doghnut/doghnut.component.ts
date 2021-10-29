import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doghnut',
  templateUrl: './doghnut.component.html',
  styles: [
  ]
})
export class DoghnutComponent {

  @Input() title:string = "Grafica"   

  @Input('label') doughnutChartLabels: Label[] = ['Default','Default','Default']
  @Input('data')doughnutChartData: MultiDataSet = [[350, 450, 100]];
  
  public doughnutChartColors: Color[] = [
    {backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];
}
