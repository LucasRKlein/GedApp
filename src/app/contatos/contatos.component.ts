import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  titulo = 'Contatos'

  listaContatos = [
    {id: '1', text: 'Lauro', email: 'lauro137@yahoo.com.br'},
    {id: '2', text: 'Bebeto', email: 'bebetofut@terra.com.br'},
    {id: '3', text: 'Ronaldo', email: 'ronaldmarquesluz@gmail.com'},
    {id: '4', text: 'Fernando', email: 'fermandodasilva@hotmail.com'},
  ]

  public contatoSelecionado: string;


  constructor() { }

  ngOnInit() {
  }

  contatoSelect(contato: any) {
    this.contatoSelecionado = contato.text;
  }

  voltar() {
    this.contatoSelecionado = '';
  }

}
