import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent {

  //Con input indicamos que recibimos información del padre 
  //Forma 1 y en el padre ponemos [progress] = 10
  //  @Input() progress: number = 50;
  //Forma 1 y en el padre ponemos [value] = 10
  @Input('value') progress: number = 50;
  //Output para que podamos emitir valores
  @Output() exitValue: EventEmitter<number> = new EventEmitter();

  //Los get son tan solo una propiedad como el progress o variable
  get getPercentage(){
    return `${this.progress}%`
  }
  changeValue( value:number){
    if( this.progress >= 100 && value >=0 ){
      this.exitValue.emit(100)
      return this.progress = 100;
    }
    if( this.progress <= 0 && value <=0 ){
      this.exitValue.emit(0)
      return this.progress = 0;    
    }
    this.progress = this.progress + value
    this.exitValue.emit(this.progress)
    console.log('entro')
  }

}
