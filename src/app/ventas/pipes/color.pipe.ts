import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'color',
})
export class ColorPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {

            case 0:
                return 'azul';
                
            case 1:
                return 'naranja';

            case 2:
                return 'negro';

            case 3:
                return 'rojo';

            case 4:
                return 'verde';

            default:
                return 'Sin color';
        }
    }
}