import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  valor: number = 0;

  handleIncrement(): void {
    this.valor++;
  }

  handleDecrement(): void {
    this.valor--;
  }
}
