import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {
  progress1: number = 10;
  progress2: number = 10;
  color: string = "btn btn-info"

  //si cambia progress se ejecuta getProgress por que es un geter
  get getProgress1(){
    //console.log('ENTRO 1')
    return `${this.progress1}%`
  }

  get getProgress2(){
    //console.log('ENTRO 2')
    return `${this.progress2}%`
  }
}
