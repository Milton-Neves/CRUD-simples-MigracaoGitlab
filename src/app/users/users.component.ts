import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  meutitulo = "Testando variáveis";

  texto1 = "Olá, como vai?";
  texto2 = " Tudo bem!?"

  cliente = {
    id: 1,
    nome: "fulano"
  }

  clientes = [
    {
      id: 1,
      nome: "fulano",
      ativo: true
    },

    {
      id: 2,
      nome: "beltrano",
      ativo: false
    }, 

    {
      id: 3,
      nome: "sicrano",
      ativo: true
    } 
  ]

constructor() { }

ngOnInit(): void {
}

geraTexto() {
  return "Retorna um texto qualquer";
}

}
