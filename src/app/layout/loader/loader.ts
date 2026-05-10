import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  standalone: true
})
export class Loader implements OnChanges {
  @Input() visible: boolean = false;
  @Input() message: string = 'Loading data...';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Loader.changes: ', changes);
  }

}
