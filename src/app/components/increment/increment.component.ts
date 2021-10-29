import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  //Con input indicamos que recibimos información del padre 
  //Forma 1 y en el padre ponemos [progress] = 10
  //  @Input() progress: number = 50;
  //Forma 1 y en el padre ponemos [value] = 10 en el cual renombramos por si en el componente hijo una propiedad se llama igual
  @Input('value') progress: number = 50;
  //Si no se lo mandamos en progress.component pone por defecto el btn btn-sucess
  @Input() btnClass: string = "btn-success"
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
    //console.log('entro')
  }
  onChange(value: number){
    console.log(value)
    if(value > 100)
      this.progress = 100;
    else if(value < 0)
      this.progress = 0;
    else
      this.progress = value;

    this.exitValue.emit(this.progress)
  }

}
