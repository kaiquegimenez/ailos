import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'al-toast',
  templateUrl: './ailos-toast.component.html',
  styleUrls: ['./ailos-toast.component.scss']
})
export class AilosToastComponent implements OnInit {

  @ViewChild('loader') loader: ElementRef
  @Input() type: string = 'success'
  @Input() show: boolean = true
  @Output() closeToast = new EventEmitter<boolean>();
  timeout: number
  iconName: string = ''
  
  constructor() { }
  
  ngOnInit(): void {
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.show = false
    }, 7000)
  }

  hiddenToast() {
    this.show = false
    this.closeToast.emit(false)
  }
}
