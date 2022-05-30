import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'al-stepper',
  templateUrl: './ailos-stepper.component.html',
  styleUrls: ['./ailos-stepper.component.scss']
})
export class AilosStepperComponent {
    @Input() steps: string[] = []
    @ViewChild('container') container: ElementRef
    
    ngAfterViewInit(): void {
        let children = this.container.nativeElement.children
        children[children.length - 1].children[1].classList.remove('line')
    }
}