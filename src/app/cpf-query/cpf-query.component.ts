import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';
import { MenuService } from '../shared/services/menu.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'cpf-query',
  templateUrl: './cpf-query.component.html',
  styleUrls: ['./cpf-query.component.scss']
})
export class CpfQueryComponent implements OnInit{
  steps: string[] = ['Início', 'Documentos', 'Dados Cadastrais', 'Admissão'];
  messageError: string = '';
  user: User = {};
  cpf: string = '';
  showToast: boolean = false;
  timeout: number
  users: User[] = [];
  index: number = 0;
  disabled: boolean = false;

  open: boolean = false;
  open$: Observable<boolean>;
  openSubscription: Subscription;
  
  constructor(
    private userService: UserService,
    private menuService: MenuService
  ){}

  ngOnInit(): void {
    this.open$ = this.menuService.getOpen();
    this.openSubscription = this.open$.subscribe((value: any) => {
      this.open = value
    })
    this.users = this.userService.getUsers()
  }

  closeToast() {
    this.showToast = false;
  }

  consultCPF() {
    if(this.cpf.length < 14) {
      this.messageError = 'Cpf inválido'
      return
    }
    for(let user of this.users) {
      this.index++
      if(user.cpf === this.cpf) {
        this.user = user
        this.disabled = true
        this.messageError = ''
        break
      } else if(this.users.length === this.index){
        this.user = {};
        this.index = 0;
        this.messageError = ''
        this.showToast = true;
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(() => {
          this.showToast = false
        }, 7000)
      }

    }
  }
}