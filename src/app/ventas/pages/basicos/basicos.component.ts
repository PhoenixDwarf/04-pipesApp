import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = 'edwin';
  nombreUpper:string = 'EDWIN';
  nombreCompleto:string = 'EdWiN nEmeGuEn';

  fecha:Date = new Date(); // Today's date (ALWAYS)


}
