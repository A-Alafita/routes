import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {
  @Input() nombre = 'Un nombre';
  @Input() cif = 1234 ;
  @Input() direccion = 'Una dirección' ;

  constructor() { }

  ngOnInit(): void {
  }

}
