import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  standalone: true
})
export class Loader {
  @Input() visible: boolean = false;
  @Input() message: string = 'Cargando...';
}
