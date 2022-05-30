import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'al-header',
  templateUrl: './ailos-header.component.html',
  styleUrls: ['./ailos-header.component.scss']
})
export class AilosHeaderComponent implements OnInit {
  open: boolean = false;
  open$: Observable<boolean>;
  openSubscription: Subscription;

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
    this.open$ = this.menuService.getOpen();
    this.openSubscription = this.open$.subscribe((value: any) => {
      this.open = value
    })
  }
}