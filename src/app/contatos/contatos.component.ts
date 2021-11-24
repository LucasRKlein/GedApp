import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../library/base-component/base.component';
import { ContatoModel } from '../models/contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent extends BaseComponent implements OnInit {

  titulo = 'Contatos'

  listaContatos: ContatoModel[] = [
    { id: 1, nome: 'Lauro', email: 'lauro137@yahoo.com.br' },
    { id: 2, nome: 'Bebeto', email: 'bebetofut@terra.com.br' },
    { id: 3, nome: 'Ronaldo', email: 'ronaldmarquesluz@gmail.com' },
    { id: 4, nome: 'Fernando', email: 'fermandodasilva@hotmail.com' },
  ]

  public contatoSelecionado: any;
  public criandoContato: boolean;

  constructor(private fb: FormBuilder) {
    super();
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  contatoSelect(contato: ContatoModel) {
    this.contatoSelecionado = contato;
    this.form.patchValue(contato);
  }


  modelSubmit() {
    console.log(this.form.value)
    // alert(this.form.value);
  }

  criaContato() {
    this.criandoContato = true;
  }

  voltar() {
    this.contatoSelecionado = null;
    this.criandoContato = false;

  }

}
