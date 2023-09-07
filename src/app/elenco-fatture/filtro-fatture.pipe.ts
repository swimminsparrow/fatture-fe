// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filtroFatture'
// })
// export class FiltroFatturePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFatture',
})
export class FiltroFatturePipe implements PipeTransform {
  transform(fatture: any[], filtroNumeroFattura: string): any[] {
    if (!fatture || !filtroNumeroFattura) {
      return fatture; // Return the original array if no filter value is provided
    }

    return fatture.filter((fattura) =>
      fattura.numero.includes(filtroNumeroFattura)
    );
  }
}
