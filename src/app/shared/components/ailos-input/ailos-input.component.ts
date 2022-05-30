import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'al-input',
  templateUrl: './ailos-input.component.html',
  styleUrls: ['./ailos-input.component.scss']
})
export class AilosInputComponent {
  @Input() label: string = '';
  @Input() auxText: string = '';
  @Input() error: string = ''
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  //Propriedades para funcionar igual ngModel
  @Output() anotaModelChange = new EventEmitter<string>();

  setValue(event: any) {
    this.value = event.target.value;
  }

  value: string = '';

  maskCpf() {
      this.value= this.value.replace(/\D/g,"")
      this.value= this.value.replace(/(\d{3})(\d)/,"$1.$2")
      this.value= this.value.replace(/(\d{3})(\d)/,"$1.$2")
      this.value= this.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  }
}
