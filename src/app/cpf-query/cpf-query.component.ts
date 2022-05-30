import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';
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
  disabled: boolean = false;
  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
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
    this.users.forEach((user, index) => {
      if(user.cpf === this.cpf) {
        this.user = user
        this.disabled = true
        this.messageError = ''
      } else if(this.users.length - 1 === index){
        this.user = {}
        this.messageError = ''
        this.showToast = true;
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(() => {
          this.showToast = false
        }, 7000)
      }
    })
  }
}