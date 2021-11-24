import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../library/base-component/base.component';
import { UsuarioModel } from '../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent extends BaseComponent implements OnInit {

  titulo = 'Aluno';

  public usuarioSelecionado: UsuarioModel;
  public criandoUsuario: boolean;

  public usuarios: UsuarioModel[] = [
    { id: 1, nome: 'Marta', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 1 },
    { id: 2, nome: 'João', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 0 },
    { id: 3, nome: 'Pedro', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 0 },
    { id: 4, nome: 'Mauro', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 0 },
    { id: 5, nome: 'Jarbas', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 0 },
    { id: 6, nome: 'Leticia', sobrenome: 'machado', telefone: 99999 - 9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 0 },
  ]

  constructor(private fb: FormBuilder) {
    super();
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: [''],
      telefone: ['', Validators.required],
      cpf: [''], 
      login: ['', Validators.required],
      senha: ['', Validators.required],
      nivelAcesso: ['', Validators.required]
    });
  }

  usuarioSelect(usuario: UsuarioModel) {
    this.usuarioSelecionado = usuario;
    this.form.patchValue({
      usuario
    })
  }

  modelSubmit() {
    console.log(this.form.value)
  }

  criaUsuario() {
    this.criandoUsuario = true;
  }

  voltar() {
    if (this.usuarioSelecionado) {
      this.usuarioSelecionado = null;
    }
    if (this.criandoUsuario) {
      this.criandoUsuario = false;
    }
  }
}
