import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'al-menu',
  templateUrl: './ailos-menu.component.html',
  styleUrls: ['./ailos-menu.component.scss']
})
export class AilosMenuComponent {
  open: boolean = false;

  constructor(private menuService: MenuService){}

  openMenu(){
    this.open = !this.open
    this.menuService.setOpen(this.open)
  }
}