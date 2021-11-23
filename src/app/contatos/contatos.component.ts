import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../models/contato';

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

  public contatoSelecionado: any;
  public criandoContato: boolean;

  constructor() { }

  ngOnInit() {
  }

  contatoSelect(contato: ContatoModel) {
    this.contatoSelecionado = contato;
  }

  criaContato(){
    this.criandoContato = true;
  }

  voltar() {
    this.contatoSelecionado = null;
    this.criandoContato = false;

  }

}
