import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  // i18nSelect Pipe
  nombre:string = 'Edwin';
  genero:string = 'masculino';

  nombre2:string = 'Samanta';
  genero2:string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  // i18nPlural Pipe
  clientes: string[] = ['Maria','Pedro','Juan','Eduardo','Fernando'];
  clientesMapa ={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

// Slice Pipe
  cambiarCliente(){
    if (this.nombre == 'Edwin'){
      this.nombre = 'Maria';
      this.genero = 'femenino'
    }else{
      this.nombre = 'Edwin';
      this.genero = 'masculino'
    }
  }
  
  borrarCliente(){
    this.clientes.pop();
  }
  
// KeyValue Pipe
persona ={
  nombre: 'Edwin',
  edad: 35,
  direccion: 'Ottawa, Canada'
}

// Json Pipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

//Async Pipe
miObservable = interval(1000); // 0,1,2,3,4,5,6...

valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(()=> {
    resolve('Tenemos data de la promesa!!!');
  }, 3500);
})
}
