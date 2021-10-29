import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public doghnut1Label:string[] = ['Día','Mes','Año']
  public doghnut2Label:string[] = ['Usuarios','Proveedores','Catalogos']
  public doghnut3Label:string[] = ['Fecha','Conexion','Curriculum']
  public doghnut4Label:string[] = ['Cantidad','Dia','Mes']  
  public data1 = [[350, 450, 50]]
  public data2 = [[400, 350, 100]]
  public data3 = [[500, 250, 200]]
  public data4 = [[600, 150, 150]]
}
