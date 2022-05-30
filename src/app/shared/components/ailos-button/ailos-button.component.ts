import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-button',
  templateUrl: './ailos-button.component.html',
  styleUrls: ['./ailos-button.component.scss']
})
export class AilosButtonComponent {
  @Input() type: string = 'primario';
  @Input() disabled: boolean = false;
}
